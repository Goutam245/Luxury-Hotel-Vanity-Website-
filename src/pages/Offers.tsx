import { Link } from "react-router-dom";
import { ArrowRight, Heart, Calendar, Wine } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import suiteBedroom from "@/assets/suite-bedroom.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";
import restaurant from "@/assets/restaurant.jpg";

const offers = [
  {
    icon: Heart,
    title: "Romance Package",
    description: "A curated experience for two, including champagne upon arrival, couples spa treatment, and a private rooftop dinner under the stars.",
    price: "From $1,200",
    includes: ["2-night stay in Deluxe Suite", "Champagne & flowers", "Couples spa treatment", "Private dinner"],
    image: suiteBedroom,
  },
  {
    icon: Calendar,
    title: "Extended Stay",
    description: "Make The Valorian your home away from home. Enjoy exclusive benefits and significant savings on stays of 5 nights or more.",
    price: "20% off",
    includes: ["5+ night minimum", "Daily breakfast", "Complimentary parking", "Late checkout"],
    image: rooftopBar,
  },
  {
    icon: Wine,
    title: "Rooftop Experience",
    description: "Elevate your evening with our signature rooftop package, featuring premium cocktails and VIP seating as the sun sets over Los Angeles.",
    price: "From $350",
    includes: ["VIP rooftop table", "Bottle of champagne", "Chef's tasting menu", "Skyline views"],
    image: restaurant,
  },
];

const Offers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 ambient-bg" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-tiny tracking-[0.3em] text-primary mb-4">EXCLUSIVE</p>
          <h1 className="font-serif text-display text-foreground text-glow">
            Special Offers
          </h1>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-24">
            {offers.map((offer, index) => (
              <div
                key={offer.title}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative luxury-image rounded-sm overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <offer.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-20 h-px bg-primary mb-8" />
                  <h2 className="font-serif text-heading-xl text-foreground mb-4">
                    {offer.title}
                  </h2>
                  <p className="text-body-lg text-foreground/70 leading-relaxed mb-8">
                    {offer.description}
                  </p>
                  
                  {/* Includes */}
                  <div className="mb-8">
                    <p className="text-tiny tracking-widest uppercase text-primary mb-4">
                      Package Includes
                    </p>
                    <div className="space-y-3">
                      {offer.includes.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-body text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-wrap items-center gap-8">
                    <div>
                      <p className="font-serif text-heading-sm text-primary">
                        {offer.price}
                      </p>
                    </div>
                    <Link to="#book" className="btn-hero flex items-center gap-3">
                      Book This Offer
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <p className="text-small text-foreground/50 text-center max-w-3xl mx-auto">
            All offers are subject to availability and blackout dates may apply. 
            Packages cannot be combined with other promotions. Terms and conditions 
            apply. Contact reservations for full details.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;
