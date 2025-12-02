import { Card, CardContent } from "@/components/ui/card";
import { Building2, Briefcase } from "lucide-react";

export default function Experience({ data }) {
  return (
    <section className="py-10 md:py-20" id="experience">
      <div className="text-center mb-12">
        <h2 className="text-foreground text-3xl font-bold leading-tight tracking-[-0.015em]">
          {data.title}
        </h2>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
          {data.description}
        </p>
      </div>

      {/* Mobile Layout (no timeline) */}
      <div className="flex flex-col gap-6 md:hidden">
        {data.jobs.map((job, index) => (
          <Card
            key={index}
            className={`bg-card border-border transition-all duration-300 ${
              index % 2 === 0
                ? "hover:border-primary"
                : "hover:border-secondary"
            }`}
          >
            <CardContent className="p-5">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`grid place-content-center w-12 h-12 rounded-full bg-card border-2 shrink-0 ${
                    index % 2 === 0
                      ? "border-primary text-primary shadow-[0_0_15px_rgba(0,245,160,0.5)]"
                      : "border-secondary text-secondary shadow-[0_0_15px_rgba(0,217,245,0.5)]"
                  }`}
                >
                  {job.icon === "apartment" ? (
                    <Building2 className="size-6" />
                  ) : (
                    <Briefcase className="size-6" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {job.role}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {job.company}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{job.period}</p>
              <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop Layout (with timeline) */}
      <div className="hidden md:flex relative flex-col gap-12 before:content-[''] before:absolute before:left-8 before:top-4 before:bottom-0 before:w-0.5 before:bg-border">
        {data.jobs.map((job, index) => (
          <div key={index} className="relative flex items-start gap-8">
            <div className="z-10 absolute left-8 top-0 -translate-x-1/2">
              <div
                className={`grid place-content-center w-16 h-16 rounded-full bg-card border-2 ${
                  index % 2 === 0
                    ? "border-primary text-primary shadow-[0_0_15px_rgba(0,245,160,0.5)]"
                    : "border-secondary text-secondary shadow-[0_0_15px_rgba(0,217,245,0.5)]"
                }`}
              >
                {job.icon === "apartment" ? (
                  <Building2 className="size-8" />
                ) : (
                  <Briefcase className="size-8" />
                )}
              </div>
            </div>
            <div className="flex-1 pl-20 pb-10">
              <Card
                className={`bg-card border-border transition-all duration-300 ${
                  index % 2 === 0
                    ? "hover:border-primary"
                    : "hover:border-secondary"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {job.role}
                      </h3>
                      <p className="text-md font-medium text-muted-foreground">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground text-right shrink-0">
                      {job.period}
                    </p>
                  </div>
                  <ul className="mt-4 list-disc list-outside ml-4 text-muted-foreground space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
