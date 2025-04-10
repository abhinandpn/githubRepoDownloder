
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
        isScrolled ? "bg-black/60 backdrop-blur-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white text-xl font-medium">
            <span className="text-white">ABHINAND</span>
            <span className="text-gradient ml-1">PN</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#expertise" className="text-white/70 hover:text-white transition-colors text-sm">
            Expertise
          </a>
          <a href="#workflow" className="text-white/70 hover:text-white transition-colors text-sm">
            Workflow
          </a>
          <a href="#process" className="text-white/70 hover:text-white transition-colors text-sm">
            Process
          </a>
          <a href="#story" className="text-white/70 hover:text-white transition-colors text-sm">
            Story
          </a>
          <a href="#faq" className="text-white/70 hover:text-white transition-colors text-sm">
            FAQ
          </a>
          <Button 
            className="meta-glass meta-button text-white text-sm px-5 py-2"
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
        <div className="md:hidden bg-black/80 backdrop-blur-lg absolute top-full left-0 right-0 border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#expertise" 
              className="text-white/70 hover:text-white transition-colors py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Expertise
            </a>
            <a 
              href="#workflow" 
              className="text-white/70 hover:text-white transition-colors py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Workflow
            </a>
            <a 
              href="#process" 
              className="text-white/70 hover:text-white transition-colors py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#story" 
              className="text-white/70 hover:text-white transition-colors py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Story
            </a>
            <a 
              href="#faq" 
              className="text-white/70 hover:text-white transition-colors py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              className="meta-glass meta-button text-white w-full text-sm"
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
