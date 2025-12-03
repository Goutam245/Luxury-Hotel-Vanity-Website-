import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Rooms", href: "/rooms" },
  { name: "Dining", href: "/dining" },
  { name: "Experiences", href: "/experiences" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-2 bg-background/95 backdrop-blur-xl border-b border-primary/10" : "py-4"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-lg tracking-[0.25em] text-foreground hover:text-primary transition-colors uppercase"
            >
              The Valorian
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-tiny font-medium tracking-[0.15em] uppercase text-foreground/90 hover:text-primary transition-colors duration-300",
                    location.pathname === link.href && "text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Book Now Button - Desktop */}
            <Link
              to="#book"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 text-tiny font-medium tracking-[0.1em] uppercase bg-champagne text-background rounded-sm hover:bg-champagne/90 transition-all duration-300 group"
            >
              Book Now
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-all duration-500",
          isMobileMenuOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-background/95 backdrop-blur-xl transition-opacity duration-500",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-full max-w-md bg-background border-l border-primary/10 transition-transform duration-500 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-8">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end p-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Mobile Links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "font-serif text-heading-sm text-foreground hover:text-primary transition-all hover:scale-105",
                    isMobileMenuOpen && "animate-fade-in",
                    location.pathname === link.href && "text-primary"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                to="#book"
                className="mt-8 btn-hero"
                style={{ animationDelay: `${navLinks.length * 100}ms` }}
              >
                Book Your Escape
              </Link>
            </nav>

            {/* Social Links */}
            <div className="flex justify-center gap-6 text-primary">
              <a href="#" className="hover:text-primary/80 transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary/80 transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
