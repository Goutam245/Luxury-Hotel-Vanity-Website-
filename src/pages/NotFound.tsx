import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-tiny tracking-[0.3em] text-primary mb-4">ERROR</p>
          <h1 className="font-serif text-display-lg text-foreground text-glow mb-6">404</h1>
          <p className="text-body-lg text-foreground/70 mb-10 max-w-md mx-auto">
            The page you're looking for has vanished like a dream at dawn.
          </p>
          <Link 
            to="/" 
            className="btn-secondary inline-flex items-center gap-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to The Valorian
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
