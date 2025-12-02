import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero({ data }) {
  return (
    <section className="py-16 md:py-28">
      <div className="flex flex-col gap-10 md:flex-row-reverse md:gap-16 items-center">
        {/* Profile Image */}
        <div className="flex justify-center md:w-1/3 animate-in fade-in duration-1000">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-60 animate-pulse"></div>
            <div
              className="relative w-full h-full rounded-full bg-center bg-no-repeat bg-cover border-4 border-card"
              style={{ backgroundImage: `url("${data.image.src}")` }}
              aria-label={data.image.alt}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 text-center md:text-left md:w-2/3 md:justify-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-foreground text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              {data.name}
            </h1>
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              {data.title}
            </h2>
            <p className="text-muted-foreground text-base font-normal leading-relaxed max-w-2xl mx-auto md:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              {data.description}
            </p>
          </div>
          <div className="flex-wrap gap-4 flex justify-center md:justify-start animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            {data.actions.map((action) => (
              <Button
                key={action.label}
                asChild
                variant={action.primary ? "default" : "outline"}
                size="lg"
                className={`rounded-full h-12 min-w-[84px] max-w-[480px] font-bold tracking-[-0.015em] ${
                  action.primary
                    ? "px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,245,160,0.4)]"
                    : "px-6 bg-card border-border text-foreground hover:bg-border hover:text-foreground"
                }`}
              >
                <a href={action.href} className="flex items-center gap-2">
                  {action.label}
                  {!action.primary && <ArrowRight className="size-4" />}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
