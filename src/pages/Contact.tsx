import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Car, CreditCard } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in begins at 4:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we offer complimentary valet parking for all guests. Self-parking is also available at $35 per night.",
  },
  {
    question: "Is the hotel pet-friendly?",
    answer: "We welcome well-behaved pets under 25 lbs with a $75 per stay fee. Please notify us in advance so we can prepare special amenities for your furry companion.",
  },
  {
    question: "Do you offer airport transfers?",
    answer: "Yes, we provide luxury sedan and SUV transfers to and from LAX. Please contact the concierge at least 24 hours in advance to arrange.",
  },
  {
    question: "What dining options are available?",
    answer: "The Orchid Room restaurant serves dinner nightly, and The Veil rooftop bar is open from 4 PM to 2 AM. In-room dining is available 24 hours.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 ambient-bg" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-tiny tracking-[0.3em] text-primary mb-4">REACH US</p>
          <h1 className="font-serif text-display text-foreground text-glow">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="w-20 h-px bg-primary mb-8" />
              <h2 className="font-serif text-heading-xl text-foreground mb-8">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-tiny tracking-widest uppercase text-foreground/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-muted border border-primary/20 rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-tiny tracking-widest uppercase text-foreground/60 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 bg-muted border border-primary/20 rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-tiny tracking-widest uppercase text-foreground/60 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-6 py-4 bg-muted border border-primary/20 rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-tiny tracking-widest uppercase text-foreground/60 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-6 py-4 bg-muted border border-primary/20 rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How may we assist you?"
                    required
                  />
                </div>
                <button type="submit" className="btn-hero">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="w-20 h-px bg-primary mb-8" />
              <h2 className="font-serif text-heading-xl text-foreground mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-tiny tracking-widest uppercase text-primary mb-1">Address</p>
                    <p className="text-body text-foreground">
                      1234 Sunset Boulevard<br />
                      West Hollywood, CA 90069
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-tiny tracking-widest uppercase text-primary mb-1">Phone</p>
                    <a href="tel:+13105550100" className="text-body text-foreground hover:text-primary transition-colors">
                      +1 (310) 555-0100
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-tiny tracking-widest uppercase text-primary mb-1">Email</p>
                    <a href="mailto:hello@thevalorianhotel.com" className="text-body text-foreground hover:text-primary transition-colors">
                      hello@thevalorianhotel.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="glass-card p-8 rounded-sm">
                <h3 className="font-serif text-heading-sm text-foreground mb-6">
                  Quick Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-body text-foreground/80">Check-in: 4:00 PM | Check-out: 12:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-primary" />
                    <span className="text-body text-foreground/80">Complimentary valet parking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span className="text-body text-foreground/80">All major credit cards accepted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-muted">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-body text-foreground/70">Interactive Map</p>
            <p className="text-small text-foreground/50">1234 Sunset Boulevard, West Hollywood</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-tiny tracking-[0.3em] text-primary mb-4">SUPPORT</p>
              <h2 className="font-serif text-heading-xl text-foreground">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-primary/20"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <span className="font-serif text-subheading text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <span className={`text-primary transition-transform ${openFaq === index ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="pb-6">
                      <p className="text-body text-foreground/70">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
