import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

      <Carousel
        className="mx-auto w-full min-w-0 max-w-7xl px-0 sm:px-4 md:px-8"
        opts={{
          align: "start",
          loop: false,
        }}
      >
        <CarouselPrevious className="hidden xl:inline-flex left-0 z-20 border-border/70 bg-background/95 shadow-md" />
        <CarouselNext className="hidden xl:inline-flex right-0 z-20 border-border/70 bg-background/95 shadow-md" />
        <CarouselContent viewportClassName="px-1 py-4 sm:px-2">
          {data.items.map((project, index) => (
            <CarouselItem
              key={project.title}
              className="min-w-0 basis-full md:basis-1/2 xl:basis-1/3"
            >
              <Card
                className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.85rem] border-border/70 bg-card/95 py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_95px_-58px_rgba(15,23,42,0.75)] ${
                  index % 2 === 0
                    ? "hover:border-primary/50"
                    : "hover:border-secondary/50"
                }`}
              >
                <CardHeader className="px-5 pt-6 pb-0 sm:px-6">
                  <CardTitle className="break-words text-xl font-semibold tracking-[-0.03em] text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex min-w-0 flex-1 flex-col px-5 pb-6 sm:px-6">
                  <p className="mt-3 break-words text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-foreground/82">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="min-w-0 break-words">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={`max-w-full rounded-full border-none px-3 py-1 text-xs font-medium break-words ${
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
                <CardFooter className="border-t border-border/70 bg-background/60 p-5">
                  <a
                    className={`flex min-w-0 items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 ${
                      index % 2 === 0 ? "text-primary" : "text-secondary"
                    }`}
                    href={project.link.href}
                  >
                    <span>{project.link.label}</span>
                    <ArrowRight className="size-4" />
                  </a>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
