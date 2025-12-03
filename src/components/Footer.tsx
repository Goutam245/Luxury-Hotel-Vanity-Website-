import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "Dining & Bars", href: "/dining" },
  { name: "Rooftop Experience", href: "/dining" },
  { name: "Meetings & Events", href: "/events" },
  { name: "Neighborhood Guide", href: "/experiences" },
  { name: "Gallery", href: "/gallery" },
  { name: "Special Offers", href: "/offers" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail("");
  };

  return (
    <footer className="relative">
      {/* Newsletter Section */}
      <section className="relative py-20 bg-gradient-burgundy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mysterious opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-heading-lg text-foreground mb-4">
              Join Our Circle
            </h3>
            <p className="text-body text-foreground/70 mb-8">
              Exclusive offers and experiences, delivered discreetly.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-foreground/5 backdrop-blur-sm border border-primary/30 rounded text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-tiny rounded hover:bg-primary/90 transition-all hover:shadow-gold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div>
              <Link to="/" className="inline-block font-serif text-subheading tracking-widest text-foreground mb-4">
                THE VALORIAN
              </Link>
              <p className="text-body-lg text-primary italic mb-8">
                Where elegance meets desire
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-sm bg-foreground/5 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-sm bg-foreground/5 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-sm bg-foreground/5 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-tiny font-medium tracking-widest uppercase text-primary mb-6">
                Explore
              </h4>
              <nav className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="group flex items-center gap-2 text-body text-foreground/80 hover:text-primary transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-tiny font-medium tracking-widest uppercase text-primary mb-6">
                Get In Touch
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-body text-foreground/80 hover:text-foreground transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>1234 Sunset Boulevard<br />West Hollywood, CA 90069</span>
                </a>
                <a
                  href="tel:+13105550100"
                  className="flex items-center gap-3 text-body text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>+1 (310) 555-0100</span>
                </a>
                <a
                  href="mailto:hello@thevalorianhotel.com"
                  className="flex items-center gap-3 text-body text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>hello@thevalorianhotel.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="py-6 bg-navy border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-tiny text-foreground/50">
            <p>© 2025 The Valorian. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
