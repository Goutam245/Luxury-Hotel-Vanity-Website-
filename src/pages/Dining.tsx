import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import restaurant from "@/assets/restaurant.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";

const Dining = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={rooftopBar}
          alt="The Valorian rooftop bar"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grain-overlay" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-tiny tracking-[0.3em] text-primary mb-4">CULINARY</p>
          <h1 className="font-serif text-display text-foreground text-glow">
            Dining & Bars
          </h1>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-20 h-px bg-primary mb-8" />
              <p className="text-tiny tracking-[0.3em] text-primary mb-4">RESTAURANT</p>
              <h2 className="font-serif text-heading-xl text-foreground mb-6">
                The Orchid Room
              </h2>
              <p className="text-body-lg text-foreground/70 leading-relaxed mb-8">
                California-inspired cuisine meets global sophistication in our signature 
                restaurant. Executive Chef crafts seasonal menus using locally-sourced 
                ingredients, presented with artistic precision in an intimate, 
                candlelit setting.
              </p>

              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-body text-foreground/80">6pm – 11pm daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-body text-foreground/80">Smart casual attire</span>
                </div>
              </div>

              <Link to="#reserve" className="btn-secondary inline-flex items-center gap-3">
                View Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative luxury-image rounded-sm overflow-hidden">
              <img
                src={restaurant}
                alt="The Orchid Room restaurant"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooftop Bar Section */}
      <section className="relative py-32 overflow-hidden">
        <img
          src={rooftopBar}
          alt="Rooftop bar at sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-px bg-primary mb-8 mx-auto" />
            <p className="text-tiny tracking-[0.3em] text-primary mb-4">ROOFTOP</p>
            <h2 className="font-serif text-heading-xl text-foreground mb-6">
              The Veil
            </h2>
            <p className="text-body-lg text-foreground/70 leading-relaxed mb-8">
              Elevated above the Sunset Strip, The Veil offers panoramic views of 
              West Hollywood and beyond. Our master mixologists craft signature 
              cocktails that blur the line between art and intoxication, served 
              as the sun sets over the City of Angels.
            </p>

            <div className="glass-card inline-block p-8 rounded-sm mb-8">
              <h3 className="font-serif text-heading-sm text-foreground mb-4">
                Signature Cocktails
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between gap-8">
                  <span className="text-body text-foreground">The White Rabbit</span>
                  <span className="text-body text-primary">$24</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-body text-foreground">Midnight Orchid</span>
                  <span className="text-body text-primary">$22</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-body text-foreground">Sunset Boulevard</span>
                  <span className="text-body text-primary">$26</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-body text-foreground/80">4pm – 2am daily</span>
              </div>
            </div>

            <Link to="#reserve" className="btn-hero inline-flex items-center gap-3">
              Reserve a Table
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dining;
