import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Tv, Wine, Bath, Mountain, Users } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import suiteBedroom from "@/assets/suite-bedroom.jpg";
import heroLobby from "@/assets/hero-lobby.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";

const rooms = [
  {
    name: "Premium King Room",
    description: "A sanctuary of refined comfort with panoramic city views. Floor-to-ceiling windows flood the space with natural light, while bespoke furnishings and curated artwork create an atmosphere of understated luxury.",
    price: 450,
    size: "400 sq ft",
    image: suiteBedroom,
    features: ["King Bed", "City View", "Rain Shower", "Mini Bar"],
  },
  {
    name: "Deluxe Suite",
    description: "An expansive retreat featuring a separate living area and dedicated workspace. The perfect balance of productivity and pleasure, designed for extended stays and discerning travelers.",
    price: 750,
    size: "650 sq ft",
    image: heroLobby,
    features: ["King Bed", "Living Area", "Soaking Tub", "Private Bar"],
  },
  {
    name: "Signature Penthouse",
    description: "The pinnacle of Valorian luxury. A private sanctuary spanning the top floor with wraparound terrace, bespoke amenities, and dedicated concierge service available around the clock.",
    price: 1500,
    size: "1,200 sq ft",
    image: rooftopBar,
    features: ["Master Suite", "Private Terrace", "Butler Service", "Hot Tub"],
  },
];

const amenities = [
  { icon: Wifi, name: "High-Speed WiFi" },
  { icon: Tv, name: "55\" Smart TV" },
  { icon: Wine, name: "Curated Mini Bar" },
  { icon: Bath, name: "Luxury Bath Products" },
  { icon: Mountain, name: "City Views" },
  { icon: Users, name: "24/7 Concierge" },
];

const Rooms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={suiteBedroom}
          alt="Luxury suite at The Valorian"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grain-overlay" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-tiny tracking-[0.3em] text-primary mb-4">ACCOMMODATIONS</p>
          <h1 className="font-serif text-display text-foreground text-glow">
            Rooms & Suites
          </h1>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className={`grid lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative luxury-image rounded-sm overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="w-20 h-px bg-primary mb-8" />
                <h2 className="font-serif text-heading-xl text-foreground mb-4">
                  {room.name}
                </h2>
                <p className="text-body-lg text-foreground/70 leading-relaxed mb-8">
                  {room.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {room.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-body text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex flex-wrap items-center gap-8">
                  <div>
                    <p className="text-tiny text-foreground/50 mb-1">From</p>
                    <p className="font-serif text-heading-sm text-primary">
                      ${room.price}<span className="text-body">/night</span>
                    </p>
                  </div>
                  <Link to="#book" className="btn-hero flex items-center gap-3">
                    Check Availability
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-tiny tracking-[0.3em] text-primary mb-4">IN-ROOM</p>
            <h2 className="font-serif text-heading-xl text-foreground">
              Signature Amenities
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((amenity) => (
              <div
                key={amenity.name}
                className="flex flex-col items-center text-center p-6 glass-card rounded-sm"
              >
                <amenity.icon className="w-8 h-8 text-primary mb-4" />
                <span className="text-small text-foreground">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-heading-lg text-foreground mb-6">
            Ready to Experience The Valorian?
          </h2>
          <p className="text-body-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Book directly for our best rates and exclusive benefits
          </p>
          <Link to="#book" className="btn-hero inline-flex items-center gap-3">
            Book Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
