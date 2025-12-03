import { useState } from "react";
import { X } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import heroLobby from "@/assets/hero-lobby.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";
import suiteBedroom from "@/assets/suite-bedroom.jpg";
import restaurant from "@/assets/restaurant.jpg";
import bathroom from "@/assets/bathroom.jpg";
import sunsetStrip from "@/assets/sunset-strip.jpg";

const images = [
  { src: heroLobby, alt: "The Valorian lobby", category: "Spaces" },
  { src: rooftopBar, alt: "Rooftop bar at sunset", category: "Dining" },
  { src: suiteBedroom, alt: "Premium King Room", category: "Rooms" },
  { src: restaurant, alt: "The Orchid Room restaurant", category: "Dining" },
  { src: bathroom, alt: "Luxury marble bathroom", category: "Rooms" },
  { src: sunsetStrip, alt: "West Hollywood Sunset Strip at night", category: "Views" },
  { src: heroLobby, alt: "Crystal chandelier detail", category: "Details" },
  { src: rooftopBar, alt: "City views from rooftop", category: "Views" },
  { src: suiteBedroom, alt: "Deluxe Suite living area", category: "Rooms" },
  { src: restaurant, alt: "Fine dining ambiance", category: "Dining" },
];

const categories = ["All", "Rooms", "Dining", "Spaces", "Views", "Details"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 ambient-bg" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-tiny tracking-[0.3em] text-primary mb-4">VISUAL JOURNEY</p>
          <h1 className="font-serif text-display text-foreground text-glow">
            Gallery
          </h1>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-tiny tracking-widest uppercase transition-all rounded ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-6 group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-tiny tracking-widest uppercase text-primary">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-primary hover:text-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
