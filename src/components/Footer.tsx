
import { Github, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-white text-xl font-bold">
              <span className="neon-glow-blue">ABHINAND</span>
              <span className="neon-glow-green">PN</span>
            </a>
            <p className="text-white/50 mt-2">Secure, Scalable & AI-Driven Solutions</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/abhinandpn/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://x.com/abhinand_p_n" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/abhinandpn/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-white/5 rounded-full border border-white/10 hover:neon-border-green transition-all"
          >
            <ArrowUp className="w-5 h-5 text-white/70 hover:text-neon-green transition-colors" />
          </button>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Abhinand P N. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
