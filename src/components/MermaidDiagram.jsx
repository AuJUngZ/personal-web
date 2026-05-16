import { useEffect, useId, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import mermaid from "mermaid";

function getTheme() {
  if (typeof document === "undefined") {
    return "default";
  }

  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "default";
}

export default function MermaidDiagram({ chart }) {
  const diagramId = useId().replace(/:/g, "");
  const [theme, setTheme] = useState(getTheme);
  const [svg, setSvg] = useState("");
  const [error, setError] = useState("");
  const [showSource, setShowSource] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;

    const renderDiagram = async () => {
      try {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme,
        });

        const { svg: renderedSvg } = await mermaid.render(
          `mermaid-${diagramId}-${theme}`,
          chart.trim()
        );

        if (!cancelled) {
          setSvg(renderedSvg);
          setError("");
        }
      } catch (renderError) {
        if (!cancelled) {
          setSvg("");
          setError(
            renderError instanceof Error
              ? renderError.message
              : "Unable to render Mermaid diagram."
          );
        }
      }
    };

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [chart, diagramId, theme]);

  if (error) {
    return (
      <div className="my-6 rounded-2xl border border-destructive/30 bg-destructive/5 p-4">
        <p className="mb-3 text-sm font-semibold text-destructive">
          Mermaid render error
        </p>
        <p className="mb-4 text-sm text-foreground/80">{error}</p>
        <pre className="overflow-x-auto rounded-xl bg-[#0d1117] p-4 text-sm text-white">
          <code>{chart}</code>
        </pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="my-6 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
        Rendering diagram...
      </div>
    );
  }

  return (
    <div className="mermaid-diagram my-8 overflow-x-auto rounded-2xl border border-border bg-card p-4 md:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-muted-foreground">
          Mermaid diagram
        </p>

        <button
          type="button"
          onClick={() => setShowSource((value) => !value)}
          aria-expanded={showSource}
          aria-label={showSource ? "Hide Mermaid code" : "Show Mermaid code"}
          title={showSource ? "Hide Mermaid code" : "Show Mermaid code"}
          className="inline-flex size-8 items-center justify-center rounded-md border border-transparent text-muted-foreground transition-colors duration-200 hover:border-border hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          {showSource ? (
            <ChevronUp className="size-4 transition-transform duration-200" />
          ) : (
            <ChevronDown className="size-4 transition-transform duration-200" />
          )}
        </button>
      </div>

      <div dangerouslySetInnerHTML={{ __html: svg }} />

      {showSource && (
        <pre className="mt-6 overflow-x-auto rounded-xl bg-[#0d1117] p-4 text-sm text-white">
          <code>{`\
\`\`\`mermaid
${chart.trim()}
\`\`\``}</code>
        </pre>
      )}
    </div>
  );
}
