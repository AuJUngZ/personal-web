import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Linkedin, MapPin } from "lucide-react";

export default function Hero({ data, linkedin }) {
  return (
    <section className="relative overflow-hidden py-14 md:py-24">
      <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
        <div className="min-w-0 max-w-3xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary sm:tracking-[0.28em]">
            {data.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl break-words text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-7xl">
            {data.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="max-w-full rounded-full border border-border bg-card px-3 py-1.5 font-medium text-foreground/88">
              {data.title}
            </span>
            <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5">
              <MapPin className="size-4" />
              {data.location}
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {data.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {data.actions.map((action) => (
              <Button
                key={action.label}
                asChild
                variant={action.primary ? "default" : "outline"}
                size="lg"
                className={
                  action.primary
                    ? "h-12 rounded-full px-6 text-sm font-semibold shadow-none"
                    : "h-12 rounded-full border-border bg-card px-6 text-sm font-semibold text-foreground"
                }
              >
                <a href={action.href} className="flex items-center gap-2">
                  {action.label}
                  {!action.primary && <ArrowRight className="size-4" />}
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[22rem] justify-center lg:justify-end">
          <div className="relative isolate w-full rounded-2xl border border-border bg-card p-6 shadow-none">
            <div
              className="aspect-[4/5] w-full rounded-2xl border border-border bg-cover bg-center"
              style={{ backgroundImage: `url("${data.image.src}")` }}
              aria-label={data.image.alt}
            />
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${data.name} on LinkedIn (opens in a new tab)`}
                className="mt-5 flex items-center gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#0a66c2] text-white">
                  <Linkedin className="size-6" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-foreground">{data.name}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">View LinkedIn profile</span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
