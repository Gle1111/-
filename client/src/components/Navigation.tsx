import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Преимущества", href: "#benefits" },
    { label: "Требования", href: "#requirements" },
    { label: "Процесс", href: "#process" },
    { label: "Контакты", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2 border-b border-border/40"
          : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className="container-width flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-primary-foreground font-display font-bold text-xl">
            СВО
          </div>
          <span
            className={`font-display font-bold text-xl tracking-wide uppercase ${
              isScrolled ? "text-foreground" : "text-white"
            } md:text-2xl`}
          >
            Контракт - СВОим
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors ${
                isScrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            variant={isScrolled ? "default" : "secondary"}
            className="font-bold uppercase tracking-wider gap-2"
          >
            <a href="tel:+79990955559">
              <Phone className="w-4 h-4" />
              +7 999 095-55-59
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? "text-foreground" : "text-white"}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background border-l-border">
              <div className="flex flex-col gap-8 mt-10">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      handleScrollTo(e, link.href);
                    }}
                    className="text-lg font-display font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Горячая линия</p>
                  <a
                    href="tel:+79990955559"
                    className="flex items-center gap-2 text-xl font-bold text-primary"
                  >
                    <Phone className="w-5 h-5" />
                    +7 999 095-55-59
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
