
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white text-xl font-bold">
            <span className="neon-glow-blue">DEV</span>
            <span className="neon-glow-green">PORT</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#expertise" className="text-white/80 hover:text-white transition-colors">
            Expertise
          </a>
          <a href="#workflow" className="text-white/80 hover:text-white transition-colors">
            Workflow
          </a>
          <a href="#process" className="text-white/80 hover:text-white transition-colors">
            Process
          </a>
          <a href="#story" className="text-white/80 hover:text-white transition-colors">
            Story
          </a>
          <a href="#faq" className="text-white/80 hover:text-white transition-colors">
            FAQ
          </a>
          <Button 
            className="bg-neon-green hover:bg-neon-green/90 text-black font-medium"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Me
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 right-0 border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#expertise" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Expertise
            </a>
            <a 
              href="#workflow" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Workflow
            </a>
            <a 
              href="#process" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#story" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Story
            </a>
            <a 
              href="#faq" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              className="bg-neon-green hover:bg-neon-green/90 text-black font-medium w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
