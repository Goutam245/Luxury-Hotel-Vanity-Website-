import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Music, ShoppingBag, Palette } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import rooftopBar from "@/assets/rooftop-bar.jpg";
import heroLobby from "@/assets/hero-lobby.jpg";
import sunsetStrip from "@/assets/sunset-strip.jpg";

const highlights = [
  {
    icon: Music,
    title: "Nightlife",
    description: "World-renowned clubs, live music venues, and sophisticated lounges line the legendary Sunset Strip, just steps from our door.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping",
    description: "From Melrose Avenue boutiques to Robertson Boulevard's designer flagships, West Hollywood offers unparalleled retail experiences.",
  },
  {
    icon: Palette,
    title: "Culture",
    description: "LACMA, the Getty, and countless galleries showcase both classical masterpieces and cutting-edge contemporary art.",
  },
];

const recommendations = [
  { name: "Chateau Marmont", type: "Iconic Hotel Bar", distance: "5 min walk" },
  { name: "The Abbey", type: "Historic Lounge", distance: "10 min walk" },
  { name: "Craig's", type: "Celebrity Dining", distance: "8 min walk" },
  { name: "Melrose Avenue", type: "Shopping District", distance: "12 min walk" },
  { name: "Soho House", type: "Private Club", distance: "7 min walk" },
];

const Experiences = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={sunsetStrip}
          alt="West Hollywood Sunset Strip"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grain-overlay" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-tiny tracking-[0.3em] text-primary mb-4">DISCOVER</p>
          <h1 className="font-serif text-display text-foreground text-glow">
            West Hollywood Awaits
          </h1>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="w-20 h-px bg-primary mb-8 mx-auto" />
            <h2 className="font-serif text-heading-xl text-foreground mb-6">
              The Heart of Los Angeles
            </h2>
            <p className="text-body-lg text-foreground/70 leading-relaxed">
              West Hollywood pulses with creative energy—a vibrant enclave where 
              entertainment industry legends meet emerging artists, where historic 
              rock venues neighbor avant-garde galleries, and where every street 
              corner tells a story of glamour and reinvention.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass-card p-10 rounded-sm text-center hover:shadow-card-hover transition-all duration-500 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-heading-sm text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-body text-foreground/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-20 h-px bg-primary mb-8" />
              <p className="text-tiny tracking-[0.3em] text-primary mb-4">CURATED</p>
              <h2 className="font-serif text-heading-xl text-foreground mb-8">
                Our Recommendations
              </h2>
              
              <div className="space-y-6">
                {recommendations.map((place) => (
                  <div
                    key={place.name}
                    className="flex items-center justify-between p-4 border-b border-primary/20 group hover:bg-primary/5 transition-colors"
                  >
                    <div>
                      <h4 className="font-serif text-subheading text-foreground group-hover:text-primary transition-colors">
                        {place.name}
                      </h4>
                      <p className="text-small text-foreground/60">{place.type}</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      <span className="text-small">{place.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative luxury-image rounded-sm overflow-hidden">
              <img
                src={heroLobby}
                alt="West Hollywood scene"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-heading-lg text-foreground mb-6">
            Let Us Guide Your Journey
          </h2>
          <p className="text-body-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Our concierge team crafts bespoke experiences tailored to your desires
          </p>
          <Link to="/contact" className="btn-hero inline-flex items-center gap-3">
            Contact Concierge
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experiences;
