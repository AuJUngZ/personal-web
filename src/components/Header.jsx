import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { Menu, X, Network } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import cvPdf from "@/assets/Natthaphong_Thepphithak_CV.pdf";

export default function Header({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Helper to render link - use <a> for hash links on homepage, <Link> for routes
  const renderNavLink = (link, isMobile = false) => {
    const isHashLink = link.href.startsWith("#");
    const baseClasses = isMobile
      ? "text-muted-foreground hover:text-primary transition-colors duration-300 text-base font-medium py-2"
      : "text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium leading-normal";

    if (isHashLink) {
      // Hash links - on homepage use anchor, otherwise navigate to homepage with hash
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
      } else {
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
    } else {
      // Regular route links
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
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3 max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-3 text-foreground">
          <div className="size-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
            <Network className="text-background size-5" />
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] transition-all">
            {data.name}
          </h2>
        </Link>
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-8">
            {data.links.map((link) => renderNavLink(link))}
            <Link
              to="/blog"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium leading-normal"
            >
              Blog
            </Link>
          </div>
          <Button
            asChild
            className="rounded-full h-10 px-6 min-w-[84px] max-w-[480px] bg-primary text-primary-foreground font-bold tracking-[-0.015em] hover:bg-primary/90 shadow-[0_0_20px_rgba(0,245,160,0.4)]"
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
          className="md:hidden text-muted-foreground hover:bg-card"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col px-4 py-4 gap-4 max-w-6xl mx-auto">
            {data.links.map((link) => renderNavLink(link, true))}
            <Link
              to="/blog"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-base font-medium py-2"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Button
              asChild
              className="rounded-full h-10 px-6 bg-primary text-primary-foreground font-bold tracking-[-0.015em] hover:bg-primary/90 shadow-[0_0_20px_rgba(0,245,160,0.4)] w-full mt-2"
            >
              <a
                href={cvPdf}
                download="Natthaphong_Thepphithak_CV.pdf"
                onClick={closeMenu}
              >
                {data.cta.label}
              </a>
            </Button>
            <div className="flex items-center justify-between pt-2 border-t border-border mt-2">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
