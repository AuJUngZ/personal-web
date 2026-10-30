import { ArrowUpRight, GitFork, Github } from "lucide-react";

export default function OpenSource() {
  return (
    <section id="open-source" className="scroll-mt-24 py-12 md:py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary">Open source</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">Building in the open.</h2>
        </div>
        <p className="max-w-md text-base leading-7 text-muted-foreground">
          Contributing to tools that help engineers build and manage better infrastructure.
        </p>
      </div>

      <article className="group relative overflow-hidden rounded-3xl bg-[#101c32] text-white shadow-xl shadow-blue-950/10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-40 size-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col p-7 sm:p-10 lg:p-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
              <GitFork className="size-4" /> Contributor
            </div>
            <p className="mt-10 text-sm font-medium text-blue-200/75">winebarrel /</p>
            <h3 className="mt-2 break-words text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">terraform-provider-redash</h3>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
              A Terraform provider for managing Redash resources as code. I contribute to this community-maintained project.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Terraform", "Go", "Redash"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">{tag}</span>
              ))}
            </div>
            <a href="https://github.com/winebarrel/terraform-provider-redash" target="_blank" rel="noreferrer" className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <Github className="size-4" /> View repository <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <div aria-hidden="true" className="relative flex items-center border-t border-white/10 bg-white/[0.03] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div className="w-full rounded-2xl border border-white/10 bg-[#0b1526] p-5 shadow-2xl sm:p-6">
              <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="size-2 rounded-full bg-rose-400/80" /><span className="size-2 rounded-full bg-amber-300/80" /><span className="size-2 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-xs text-slate-500">main.tf</span>
              </div>
              <div className="overflow-x-auto font-mono text-xs leading-7 sm:text-sm">
                <div><span className="text-purple-300">terraform</span> {'{'}</div>
                <div className="pl-4"><span className="text-purple-300">required_providers</span> {'{'}</div>
                <div className="pl-8"><span className="text-sky-300">redash</span> = {'{'}</div>
                <div className="pl-12"><span className="text-slate-300">source</span> = <span className="text-emerald-300">"winebarrel/redash"</span></div>
                <div className="pl-8">{'}'}</div>
                <div className="pl-4">{'}'}</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
