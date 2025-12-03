import { Link } from "react-router-dom";
import { ArrowRight, Users, Building2, PartyPopper, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import heroLobby from "@/assets/hero-lobby.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";

const eventTypes = [
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Elevate your business gatherings with sophisticated meeting spaces and world-class amenities.",
  },
  {
    icon: PartyPopper,
    title: "Social Celebrations",
    description: "From intimate anniversaries to milestone birthdays, create unforgettable moments.",
  },
  {
    icon: Users,
    title: "Private Parties",
    description: "Exclusive venue hire for bespoke experiences tailored to your vision.",
  },
];

const spaces = [
  {
    name: "The Crystal Room",
    capacity: "Up to 80 guests",
    features: ["Natural light", "AV equipment", "Catering available"],
    image: heroLobby,
  },
  {
    name: "The Rooftop Terrace",
    capacity: "Up to 120 guests",
    features: ["City views", "Outdoor setting", "Private bar"],
    image: rooftopBar,
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={heroLobby}
          alt="Event space at The Valorian"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grain-overlay" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-tiny tracking-[0.3em] text-primary mb-4">GATHERINGS</p>
          <h1 className="font-serif text-display text-foreground text-glow">
            Meetings & Events
          </h1>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-20 h-px bg-primary mb-8 mx-auto" />
            <h2 className="font-serif text-heading-xl text-foreground mb-6">
              Exceptional Occasions
            </h2>
            <p className="text-body-lg text-foreground/70 max-w-2xl mx-auto">
              Whatever the occasion, The Valorian provides the perfect backdrop 
              for moments that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventTypes.map((type) => (
              <div
                key={type.title}
                className="glass-card p-10 rounded-sm text-center hover:shadow-card-hover transition-all duration-500 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-heading-sm text-foreground mb-4">
                  {type.title}
                </h3>
                <p className="text-body text-foreground/70">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spaces */}
      <section className="py-32 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-tiny tracking-[0.3em] text-primary mb-4">VENUES</p>
            <h2 className="font-serif text-heading-xl text-foreground">
              Event Spaces
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {spaces.map((space) => (
              <div
                key={space.name}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="relative h-[400px]">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-heading-sm text-foreground mb-2">
                    {space.name}
                  </h3>
                  <p className="text-body text-primary mb-4">{space.capacity}</p>
                  <div className="flex flex-wrap gap-3">
                    {space.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-tiny bg-foreground/10 text-foreground/80 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center rounded-full bg-primary/10">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-heading-lg text-foreground mb-6">
              Plan Your Event
            </h2>
            <p className="text-body-lg text-foreground/70 mb-10">
              Our events team is ready to bring your vision to life. 
              Contact us to discuss your requirements.
            </p>
            <a
              href="mailto:events@thevalorianhotel.com"
              className="btn-hero inline-flex items-center gap-3"
            >
              Contact Events Team
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-small text-foreground/50 mt-4">
              events@thevalorianhotel.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
