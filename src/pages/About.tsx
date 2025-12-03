import { Link } from "react-router-dom";
import { ArrowRight, Star, Heart, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import heroLobby from "@/assets/hero-lobby.jpg";
import restaurant from "@/assets/restaurant.jpg";

const values = [
  {
    icon: Star,
    title: "Dream",
    description: "We create spaces where reality bends and imagination flourishes. Every detail is designed to transport guests beyond the ordinary.",
  },
  {
    icon: Heart,
    title: "Desire",
    description: "We understand that true luxury speaks to the heart. Our experiences are crafted to ignite passion and create lasting memories.",
  },
  {
    icon: Sparkles,
    title: "Distinction",
    description: "We celebrate individuality and refined taste. Our guests seek exclusivity not for status, but for authentic self-expression.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={heroLobby}
          alt="The Valorian interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grain-overlay" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-tiny tracking-[0.3em] text-primary mb-4">OUR STORY</p>
          <h1 className="font-serif text-display text-foreground text-glow">
            About The Valorian
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-px bg-primary mb-8 mx-auto" />
            
            <blockquote className="text-center mb-16">
              <p className="font-serif text-heading-lg text-foreground italic mb-6">
                "Where elegance flirts with temptation"
              </p>
            </blockquote>

            <div className="prose prose-lg text-foreground/70 space-y-8 text-center">
              <p className="text-body-lg leading-relaxed">
                Rising above the Sunset Strip, The Valorian is a fever dream in white — 
                a seductive collision of fantasy and fame. Within its translucent walls, 
                glamour hides danger and pleasure flirts with consequence. It's a place 
                where creativity, confidence, and desire intertwine — a modern temple 
                for those who live between light and shadow.
              </p>
              <p className="text-body-lg leading-relaxed">
                Cross the threshold and time seems to slow, as if you've followed a 
                White Rabbit into a world where rules dissolve and beauty bends. 
                Refined yet untamed, The Valorian invites guests to drift beyond reality, 
                where every reflection hints at another world.
              </p>
              <p className="text-body-lg leading-relaxed">
                Here, allure is the rule, and transcendence is always one drink — 
                or one glance — away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-32 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative luxury-image rounded-sm overflow-hidden">
              <img
                src={restaurant}
                alt="The Valorian design details"
                className="w-full h-[600px] object-cover"
              />
            </div>

            <div>
              <div className="w-20 h-px bg-primary mb-8" />
              <p className="text-tiny tracking-[0.3em] text-primary mb-4">DESIGN</p>
              <h2 className="font-serif text-heading-xl text-foreground mb-6">
                Minimalism Charged<br />With Emotion
              </h2>
              <p className="text-body-lg text-foreground/70 leading-relaxed mb-6">
                Our design philosophy balances minimalism and mystique. Clean lines, 
                luminous whites, and soft contrasts hint at something unseen. 
                Every element breathes exclusivity, mystery, and confidence.
              </p>
              <p className="text-body-lg text-foreground/70 leading-relaxed">
                Typography feels confident, modern, and timeless, with subtle 
                character — like elegance holding back chaos. A visual language 
                that reveals just enough to intrigue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-tiny tracking-[0.3em] text-primary mb-4">OUR PILLARS</p>
            <h2 className="font-serif text-heading-xl text-foreground">
              Dream • Desire • Distinction
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card p-10 rounded-sm text-center hover:shadow-card-hover transition-all duration-500 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-heading-sm text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-body text-foreground/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-emerald">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-heading-lg text-foreground mb-6">
            Experience The Legend
          </h2>
          <p className="text-body-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Step through the looking glass and discover your own story at The Valorian
          </p>
          <Link to="#book" className="btn-hero inline-flex items-center gap-3">
            Book Your Stay
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
