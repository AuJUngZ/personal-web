import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero({ data }) {
  return (
    <section className="relative overflow-hidden py-14 md:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(30,64,175,0.18),_transparent_48%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_36%)]" />
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary">
            {data.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-7xl">
            {data.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full border border-border/80 bg-card/70 px-3 py-1.5 font-medium text-foreground/88">
              {data.title}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/70 px-3 py-1.5">
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
                    ? "h-12 rounded-full px-6 text-sm font-semibold shadow-[0_18px_40px_-24px_rgba(30,64,175,0.7)]"
                    : "h-12 rounded-full border-border/80 bg-card/75 px-6 text-sm font-semibold text-foreground"
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
          <div className="relative isolate w-full rounded-[2rem] border border-border/70 bg-card/85 p-6 shadow-[0_36px_120px_-60px_rgba(15,23,42,0.8)] backdrop-blur">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="absolute -right-6 -top-6 -z-10 size-24 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-8 -left-4 -z-10 size-24 rounded-full bg-secondary/15 blur-3xl" />
            <div
              className="aspect-[4/5] w-full rounded-[1.5rem] border border-border/70 bg-cover bg-center"
              style={{ backgroundImage: `url("${data.image.src}")` }}
              aria-label={data.image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
