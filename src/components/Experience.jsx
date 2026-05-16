import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";

const formatPeriodForDateTime = (period) => period.replace(/\s+/g, " ");

export default function Experience({ data }) {
  return (
    <section
      className="py-12 md:py-20"
      id="experience"
      aria-labelledby="experience-title"
    >
      <header className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase text-primary">
          Experience
        </p>
        <h2
          id="experience-title"
          className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-4xl"
        >
          {data.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {data.description}
        </p>
      </header>

      <ol className="flex flex-col gap-6 md:hidden" aria-label={data.title}>
        {data.jobs.map((job, index) => (
          <li key={`${job.company}-${job.period}`}>
            <Card className="min-w-0 rounded-lg border-border/70 bg-card/95 py-0 shadow-[0_24px_80px_-54px_rgba(15,23,42,0.7)]">
              <CardContent className="p-5">
                <article>
                  <header className="mb-4 flex items-start gap-4">
                    <div
                      className={`grid size-12 shrink-0 place-content-center rounded-lg border ${
                        index % 2 === 0
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-secondary/30 bg-secondary/10 text-secondary"
                      }`}
                      aria-hidden="true"
                    >
                      <Building2 className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="break-words text-lg font-semibold leading-tight text-foreground">
                          {job.role}
                        </h3>
                        <time
                          className="text-xs font-medium uppercase text-muted-foreground"
                          dateTime={formatPeriodForDateTime(job.period)}
                        >
                          {job.period}
                        </time>
                      </div>
                      <p className="mt-1 break-words text-sm font-medium text-foreground/85">
                        {job.company}
                      </p>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="size-3.5" aria-hidden="true" />
                        {job.location}
                      </p>
                    </div>
                  </header>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {job.summary}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/82">
                    {job.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <ArrowUpRight
                          className="mt-1 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="min-w-0 break-words">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>

      <ol className="hidden space-y-8 md:block" aria-label={data.title}>
        {data.jobs.map((job, index) => (
          <li
            key={`${job.company}-${job.period}`}
            className="grid grid-cols-[10rem_3rem_minmax(0,1fr)] items-start"
          >
            <aside className="pt-1 pr-6 text-right">
              <time
                className="block text-xs font-semibold uppercase text-muted-foreground"
                dateTime={formatPeriodForDateTime(job.period)}
              >
                {job.period}
              </time>
              <p className="mt-3 inline-flex items-center justify-end gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" aria-hidden="true" />
                {job.location}
              </p>
            </aside>

            <div className="relative flex justify-center self-stretch">
              <div
                className={`absolute left-1/2 top-11 w-px -translate-x-1/2 bg-border ${
                  index === data.jobs.length - 1 ? "bottom-0 opacity-0" : "-bottom-8"
                }`}
                aria-hidden="true"
              />
              <div
                className={`relative z-10 flex size-10 items-center justify-center rounded-lg border bg-background ${
                  index % 2 === 0
                    ? "border-primary/35 text-primary"
                    : "border-secondary/35 text-secondary"
                }`}
                aria-hidden="true"
              >
                <Building2 className="size-5" />
              </div>
            </div>

            <Card className="min-w-0 rounded-lg border-border/70 bg-card/95 py-0 shadow-[0_28px_90px_-56px_rgba(15,23,42,0.75)]">
              <CardContent className="p-7">
                <article>
                  <header>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-base font-medium text-foreground/86">
                      {job.company}
                    </p>
                  </header>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                    {job.summary}
                  </p>
                  <ul className="mt-6 grid gap-3 text-sm leading-6 text-foreground/82">
                    {job.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <ArrowUpRight
                          className="mt-1 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
