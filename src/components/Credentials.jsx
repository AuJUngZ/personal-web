import { Award, GraduationCap, MapPin } from "lucide-react";

export default function Credentials({ education, certifications }) {
  return (
    <section className="py-12 md:py-20" id="education">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[2rem] border border-border/70 bg-card/95 p-6 shadow-[0_28px_90px_-56px_rgba(15,23,42,0.65)] md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
              <GraduationCap className="size-5" />
            </div>
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {education.title}
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                Academic Background
              </h2>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {education.items.map((item) => (
              <div
                key={`${item.school}-${item.degree}`}
                className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-base font-medium text-foreground/88">
                      {item.school}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground md:text-right">
                    <p>{item.period}</p>
                    <p className="mt-1 inline-flex items-center gap-1">
                      <MapPin className="size-3.5" />
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-border/70 bg-card px-3 py-1 text-sm font-medium text-foreground/86"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-border/70 bg-card/95 p-6 shadow-[0_28px_90px_-56px_rgba(15,23,42,0.65)] md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary/14 text-secondary">
              <Award className="size-5" />
            </div>
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {certifications.title}
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                Professional Validation
              </h2>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {certifications.items.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5 text-base font-medium leading-7 text-foreground/88"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
