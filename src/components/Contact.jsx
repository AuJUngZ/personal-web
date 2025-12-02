import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact({ data }) {
  return (
    <section className="py-16 md:py-28" id="contact">
      <div className="text-center bg-card border border-border rounded-2xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(0,245,160,0.1)_0%,_rgba(13,17,23,0)_50%)] animate-pulse"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {data.title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            {data.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button
              asChild
              className="w-full sm:w-auto rounded-full h-12 px-6 min-w-[84px] max-w-[480px] bg-primary text-primary-foreground font-bold tracking-[-0.015em] hover:bg-primary/90 shadow-[0_0_20px_rgba(0,245,160,0.4)]"
            >
              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-2"
              >
                <Mail className="size-5" />
                <span className="truncate">{data.email}</span>
              </a>
            </Button>
            <div className="flex gap-4">
              {data.socials.map((social) => (
                <a
                  key={social.platform}
                  className="grid place-content-center w-12 h-12 rounded-full bg-border text-muted-foreground hover:text-primary transition-colors duration-300"
                  href={social.href}
                >
                  {social.icon === "linkedin" && (
                    <Linkedin className="size-6" />
                  )}
                  {social.icon === "github" && <Github className="size-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
