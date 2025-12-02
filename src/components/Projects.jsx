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
    <section className="py-10 md:py-20" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-foreground text-3xl font-bold leading-tight tracking-[-0.015em]">
          {data.title}
        </h2>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
          {data.description}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {data.items.map((project, index) => (
          <Card
            key={project.title}
            className={`group flex flex-col bg-card border-border overflow-hidden transition-all duration-300 hover:shadow-2xl w-full md:w-[calc(50%-1rem)] md:max-w-[600px] ${
              index % 2 === 0
                ? "hover:border-primary hover:shadow-primary/20"
                : "hover:border-secondary hover:shadow-secondary/20"
            }`}
          >
            <CardHeader className="p-6 pb-0">
              <CardTitle className="text-lg font-bold text-foreground">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-1 flex flex-col">
              <p className="mt-2 text-sm text-muted-foreground flex-1">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className={`text-xs font-medium border-none py-1 px-3 rounded-full ${
                      index % 2 === 0
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t border-border p-4 bg-background/50">
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
