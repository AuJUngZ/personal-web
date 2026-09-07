import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact({ data }) {
  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="relative mx-auto min-w-0 max-w-5xl overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-none sm:p-8 md:p-12">
        <div className="relative z-10 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center">
          <div className="min-w-0">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-4xl">
              {data.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              {data.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-full px-6 text-sm font-semibold shadow-none"
              >
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-2"
                >
                  <Mail className="size-4.5" />
                  Email Me
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-border bg-background px-6 text-sm font-semibold text-foreground"
              >
                <a href={`tel:${data.phone.replace(/\s/g, "")}`}>
                  <span className="flex items-center gap-2">
                    <Phone className="size-4.5" />
                    {data.phone}
                  </span>
                </a>
              </Button>
            </div>
          </div>

          <div className="min-w-0 space-y-3">
            <a
              className="flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-border bg-background px-5 py-4 transition-colors hover:border-primary/40 hover:bg-background"
              href={`mailto:${data.email}`}
            >
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </span>
                <span className="mt-1 block break-all text-sm font-medium text-foreground">
                  {data.email}
                </span>
              </span>
              <Mail className="size-5 shrink-0 text-primary" />
            </a>
            {data.socials.map((social) => (
              <a
                key={social.platform}
                className="flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-border bg-background px-5 py-4 transition-colors hover:border-primary/40 hover:bg-background"
                href={social.href}
              >
                <span className="block min-w-0 truncate text-sm font-medium text-foreground">
                  {social.platform}
                </span>
                {social.icon === "linkedin" && (
                  <Linkedin className="size-5 shrink-0 text-primary" />
                )}
                {social.icon === "github" && (
                  <Github className="size-5 shrink-0 text-primary" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
