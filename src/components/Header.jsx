import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { Menu, Network, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import cvPdf from "@/assets/Natthaphong_Thepphithak_CV.pdf";

export default function Header({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const renderNavLink = (link, isMobile = false) => {
    const isHashLink = link.href.startsWith("#");
    const baseClasses = isMobile
      ? "py-2 text-base font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
      : "text-sm font-medium leading-normal text-muted-foreground transition-colors duration-300 hover:text-primary";

    if (isHashLink) {
      if (isHomePage) {
        return (
          <a
            key={link.label}
            className={baseClasses}
            href={link.href}
            onClick={isMobile ? closeMenu : undefined}
          >
            {link.label}
          </a>
        );
      }

      return (
        <Link
          key={link.label}
          className={baseClasses}
          to={`/${link.href}`}
          onClick={isMobile ? closeMenu : undefined}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <Link
        key={link.label}
        className={baseClasses}
        to={link.href}
        onClick={isMobile ? closeMenu : undefined}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between whitespace-nowrap px-4 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-3 text-foreground">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(30,64,175,0.95),rgba(14,165,233,0.9))] shadow-[0_16px_32px_-20px_rgba(30,64,175,0.95)]">
            <Network className="size-5 text-white" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Portfolio
            </p>
            <h2 className="text-sm font-semibold leading-tight tracking-[-0.02em] transition-all sm:text-base">
              {data.name}
            </h2>
          </div>
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
          <div className="flex items-center gap-7">
            {data.links.map((link) => renderNavLink(link))}
            <Link
              to="/blog"
              className="text-sm font-medium leading-normal text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              Blog
            </Link>
          </div>
          <Button
            asChild
            className="h-10 rounded-full px-5 text-sm font-semibold shadow-[0_16px_36px_-24px_rgba(30,64,175,0.95)]"
          >
            <a href={cvPdf} download="Natthaphong_Thepphithak_CV.pdf">
              {data.cta.label}
            </a>
          </Button>
          <ModeToggle />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-card md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="animate-in slide-in-from-top-2 duration-200 md:hidden border-b border-border/70 bg-background/95 backdrop-blur-xl fade-in">
          <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
            {data.links.map((link) => renderNavLink(link, true))}
            <Link
              to="/blog"
              className="py-2 text-base font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Button
              asChild
              className="mt-2 h-10 w-full rounded-full px-6 text-sm font-semibold shadow-[0_16px_36px_-24px_rgba(30,64,175,0.95)]"
            >
              <a
                href={cvPdf}
                download="Natthaphong_Thepphithak_CV.pdf"
                onClick={closeMenu}
              >
                {data.cta.label}
              </a>
            </Button>
            <div className="mt-2 flex items-center justify-between border-t border-border/70 pt-2">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
