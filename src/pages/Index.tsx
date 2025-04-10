
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
          remin.in
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
            01 Title.md
          </div>
          <div className="text-neutral-500">
            Hi, I am
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8">
            Remin T Roy
          </h1>
          
          <div className="text-neutral-700 text-lg leading-relaxed space-y-4">
            <p>
              A <span className="font-semibold">self-taught MERN</span> stack developer based in Palakkad, Kerala. Curious to learn more about developing 
              scalable distributed systems. Loves <span className="font-semibold">problem-solving</span> and cares about writing <span className="font-semibold">readable and maintainable</span> 
              code. Passionate about making web applications <span className="font-semibold">fast</span> and <span className="font-semibold">interactive</span>.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-8">
            <Button 
              variant="outline" 
              className="meta-glass meta-button text-neutral-600 border-neutral-200 gap-2"
            >
              <Github size={16} />
              Github
            </Button>
            
            <Button 
              variant="outline" 
              className="meta-glass meta-button text-neutral-600 border-neutral-200 gap-2"
            >
              <Linkedin size={16} />
              LinkedIn
            </Button>
            
            <Button 
              variant="outline" 
              className="meta-glass meta-button text-neutral-600 border-neutral-200 gap-2"
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
