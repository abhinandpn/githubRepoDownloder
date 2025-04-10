
import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen bg-white text-neutral-900 grid grid-cols-[1fr] gap-4 p-4 md:p-8 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none">
        {Array.from({ length: 12 * 12 }).map((_, i) => (
          <div key={i} className="border border-neutral-100"></div>
        ))}
      </div>
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-16 md:mb-24">
        <a href="#" className="text-neutral-900 font-medium">
          abhinand.dev
        </a>
        
        <Button 
          variant="outline" 
          className="meta-glass meta-button text-neutral-600 border-neutral-200 gap-2"
        >
          <Settings size={16} />
          Settings
        </Button>
      </header>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto w-full mt-12 md:mt-24">
        <div className="space-y-4">
          <div className="text-neutral-500 text-sm">
            01 About.md
          </div>
          <div className="text-neutral-500">
            Hi, I am
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8">
            Abhinand P N
          </h1>
          
          <div className="text-neutral-700 text-lg leading-relaxed space-y-4">
            <p>
              Motivated and experienced <span className="font-semibold">Golang developer</span> with 1 year of work experience. 
              Possesses a deep understanding of <span className="font-semibold">Go, REST API, SQL and NoSQL databases</span>, 
              gRPC, Docker, CICD, AWS, and more. Strong technical background in software development 
              and passion for building <span className="font-semibold">scalable and robust applications</span>.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-8">
            <Button 
              variant="outline" 
              className="meta-glass meta-button text-neutral-600 border-neutral-200 gap-2"
              onClick={() => window.open('https://github.com/abhinandpn', '_blank')}
            >
              <Github size={16} />
              Github
            </Button>
            
            <Button 
              variant="outline" 
              className="meta-glass meta-button text-neutral-600 border-neutral-200 gap-2"
              onClick={() => window.open('https://www.linkedin.com/in/abhinandpn/', '_blank')}
            >
              <Linkedin size={16} />
              LinkedIn
            </Button>
            
            <Button 
              variant="outline" 
              className="meta-glass meta-button text-neutral-600 border-neutral-200 gap-2"
              onClick={() => window.open('https://instagram.com/abhinand_p_n', '_blank')}
            >
              <Instagram size={16} />
              Instagram
            </Button>
          </div>
        </div>
      </div>
      
      {/* Fixed position "cursor" */}
      <div className="fixed right-6 top-24 z-40">
        <div className="w-10 h-10 rounded-full border-2 border-neutral-800 flex items-center justify-center">
          <div className={`w-2 h-2 rounded-full bg-neutral-800 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Index;

