import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Star, MapPin, Wine, Utensils, Eye, Building } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import heroLobby from "@/assets/hero-lobby.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";
import suiteBedroom from "@/assets/suite-bedroom.jpg";
import restaurant from "@/assets/restaurant.jpg";

const rooms = [
  {
    name: "Premium King Room",
    price: "From $450/night",
    image: suiteBedroom,
    size: "400 sq ft",
  },
  {
    name: "Deluxe Suite",
    price: "From $750/night",
    image: heroLobby,
    size: "650 sq ft",
  },
  {
    name: "Signature Penthouse",
    price: "From $1,500/night",
    image: rooftopBar,
    size: "1,200 sq ft",
  },
];

const experiences = [
  {
    icon: Wine,
    name: "Rooftop Bar",
    description: "Sunset cocktails with panoramic views of the city skyline",
    image: rooftopBar,
  },
  {
    icon: Utensils,
    name: "Fine Dining",
    description: "California-inspired cuisine in an intimate setting",
    image: restaurant,
  },
  {
    icon: Eye,
    name: "Skyline Views",
    description: "Unparalleled vistas of West Hollywood and beyond",
    image: rooftopBar,
  },
  {
    icon: Building,
    name: "West Hollywood",
    description: "Steps from the legendary Sunset Strip",
    image: heroLobby,
  },
];

const testimonials = [
  { quote: "A dreamlike escape from reality...", author: "Harper M.", location: "New York" },
  { quote: "Where elegance meets pure indulgence", author: "Sebastian K.", location: "London" },
  { quote: "The most seductive hotel experience", author: "Valentina R.", location: "Milan" },
  { quote: "Transcendent luxury redefined", author: "James L.", location: "Sydney" },
  { quote: "Every detail whispers sophistication", author: "Aria C.", location: "Paris" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image with Ken Burns */}
        <div
          ref={heroRef}
          className="absolute inset-0 scale-110"
        >
          <img
            src={heroLobby}
            alt="The Valorian luxury hotel lobby"
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Grain Texture */}
        <div className="absolute inset-0 grain-overlay" />

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-mysterious opacity-60" />

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          {/* Eyebrow */}
          <p className="text-tiny tracking-[0.3em] text-primary mb-6 opacity-0 animate-fade-in">
            WEST HOLLYWOOD • SUNSET STRIP
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-display-xl md:text-display-xl text-foreground text-glow mb-6 opacity-0 animate-fade-in delay-200">
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px]">THE VALORIAN</span>
          </h1>

          {/* Subheadline */}
          <p className="font-serif text-subheading md:text-heading-sm text-foreground/80 italic max-w-2xl mb-12 opacity-0 animate-fade-in delay-300">
            A fever dream in white — where elegance meets desire
          </p>

          {/* CTA Button */}
          <Link
            to="#book"
            className="btn-hero flex items-center gap-3 opacity-0 animate-fade-in delay-400"
          >
            Book Your Escape
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-in delay-600">
          <span className="text-tiny tracking-[0.2em] text-foreground/60">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 text-primary animate-float" />
        </div>
      </section>

      {/* Brand Introduction Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 ambient-bg" />
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative luxury-image rounded-sm overflow-hidden">
              <img
                src={restaurant}
                alt="The Valorian interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <div className="w-20 h-px bg-primary mb-8" />
              <h2 className="font-serif text-heading-xl text-foreground mb-8">
                Step Through<br />the Looking Glass
              </h2>
              <p className="text-body-lg text-foreground/70 leading-relaxed mb-8">
                Rising above the Sunset Strip, The Valorian is a seductive collision of 
                fantasy and fame. Within its luminous walls, glamour hides danger and 
                pleasure flirts with consequence. A modern temple for those who live 
                between light and shadow.
              </p>
              <p className="text-body-lg text-foreground/70 leading-relaxed mb-10">
                Cross the threshold and time seems to slow. Here, allure is the rule, 
                and transcendence is always one drink — or one glance — away.
              </p>
              <Link
                to="/about"
                className="btn-secondary inline-flex items-center gap-3"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="relative py-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxury opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-tiny tracking-[0.3em] text-primary mb-4">ACCOMMODATIONS</p>
            <h2 className="font-serif text-heading-xl text-foreground">
              Rooms & Suites
            </h2>
          </div>

          {/* Rooms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Link
                key={room.name}
                to="/rooms"
                className="group relative overflow-hidden rounded-sm"
              >
                {/* Image */}
                <div className="relative h-[450px] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Gold overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="glass-card p-6 rounded-sm">
                    <h3 className="font-serif text-heading-sm text-foreground mb-2">
                      {room.name}
                    </h3>
                    <p className="text-small text-primary mb-2">{room.price}</p>
                    <p className="text-tiny text-foreground/60">{room.size}</p>
                    
                    {/* Explore button - shows on hover */}
                    <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-tiny tracking-widest uppercase">Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link to="/rooms" className="btn-secondary inline-flex items-center gap-3">
              View All Rooms
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 ambient-bg" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-tiny tracking-[0.3em] text-primary mb-4">INDULGE</p>
            <h2 className="font-serif text-heading-xl text-foreground">
              Curated Experiences
            </h2>
          </div>

          {/* Horizontal Scroll */}
          <div className="flex gap-8 overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {experiences.map((exp) => (
              <Link
                key={exp.name}
                to="/experiences"
                className="group flex-none w-[350px] md:w-[450px] snap-center"
              >
                <div className="relative h-[500px] overflow-hidden rounded-sm">
                  <img
                    src={exp.image}
                    alt={exp.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <exp.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-serif text-heading-sm text-foreground mb-2">
                      {exp.name}
                    </h3>
                    <p className="text-body text-foreground/70 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                      <span className="text-tiny tracking-widest uppercase">Discover</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative py-32 bg-emerald overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mysterious opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Map Placeholder */}
            <div className="relative h-[500px] rounded-sm overflow-hidden bg-background/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-body text-foreground/70">Interactive Map</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="glass-card p-10 rounded-sm">
              <p className="text-tiny tracking-[0.3em] text-primary mb-4">LOCATION</p>
              <h2 className="font-serif text-heading-lg text-foreground mb-6">
                Sunset Strip,<br />West Hollywood
              </h2>
              <p className="text-body-lg text-foreground/70 leading-relaxed mb-8">
                Positioned at the heart of West Hollywood's legendary Sunset Strip, 
                The Valorian offers immediate access to world-class dining, boutique 
                shopping, and Los Angeles's most celebrated nightlife.
              </p>
              
              {/* Nearby */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-body text-foreground/80">Sunset Strip — Steps away</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-body text-foreground/80">Beverly Hills — 10 min drive</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-body text-foreground/80">Hollywood — 15 min drive</span>
                </div>
              </div>

              <Link to="/experiences" className="btn-secondary inline-flex items-center gap-3">
                Explore Neighborhood
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="relative py-20 bg-gradient-burgundy overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        
        <div className="relative">
          <div className="marquee whitespace-nowrap">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="inline-flex items-center gap-8 mx-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-serif text-heading-sm text-foreground italic">
                  "{t.quote}"
                </span>
                <span className="text-small text-foreground/60">
                  — {t.author}, {t.location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background */}
        <img
          src={rooftopBar}
          alt="The Valorian rooftop at sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 grain-overlay" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="font-serif text-display md:text-display-lg text-foreground text-glow mb-6">
            Your Escape Awaits
          </h2>
          <p className="text-body-lg text-foreground/70 mb-10">
            Limited availability • Reserve your moment of transcendence
          </p>
          <Link to="#book" className="btn-hero flex items-center gap-3">
            Reserve Your Stay
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-small text-primary mt-8">
            Starting from $450 per night
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
