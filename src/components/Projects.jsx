import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function Projects({ data }) {
  return (
    <section className="py-12 md:py-20" id="projects">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-foreground md:text-4xl">
          {data.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {data.description}
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {data.items.map((project, index) => (
          <Card
            key={project.title}
            className={`group flex h-full flex-col overflow-hidden rounded-[1.85rem] border-border/70 bg-card/95 py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_95px_-58px_rgba(15,23,42,0.75)] ${
              index % 2 === 0 ? "hover:border-primary/50" : "hover:border-secondary/50"
            }`}
          >
            <CardHeader className="px-6 pt-6 pb-0">
              <CardTitle className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col px-6 pb-6">
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-foreground/82">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className={`rounded-full border-none px-3 py-1 text-xs font-medium ${
                      index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t border-border/70 bg-background/60 p-5">
              <a
                className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 ${
                  index % 2 === 0 ? "text-primary" : "text-secondary"
                }`}
                href={project.link.href}
              >
                <span>{project.link.label}</span>
                <ArrowRight className="size-4" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
