
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <ScrollArea className="h-screen">
      <div className="min-h-screen bg-gradient-to-br from-white to-neutral-50 text-neutral-900 p-4 md:p-8 relative">
        {/* Background Grid */}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none">
          {Array.from({ length: 12 * 12 }).map((_, i) => (
            <div key={i} className="border border-neutral-100"></div>
          ))}
        </div>
        
        {/* Header */}
        <header className="relative z-10 flex justify-between items-center mb-16 md:mb-24">
          <a href="#" className="text-neutral-900 font-medium">
            abhinandpn.dev
          </a>
        </header>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-3xl mx-auto w-full mt-12 md:mt-24">
          <div className="space-y-8 animate-fade-in">
            {/* Name Section */}
            <div className="space-y-4">
              <div className="text-neutral-500 text-sm">
                01 Hello.md
              </div>
              <div className="text-neutral-500">
                Hi, I am
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8">
                Abhinandpn
              </h1>
            </div>
            
            {/* Bio Section */}
            <div className="space-y-4">
              <div className="text-neutral-500 text-sm">
                02 About.md
              </div>
              <div className="text-neutral-700 text-lg leading-relaxed">
                <p>
                  Passionate <span className="font-semibold">Golang Developer</span> at Talrop - Steyp, 
                  building <span className="font-semibold">scalable systems</span> and 
                  modern <span className="font-semibold">backend solutions</span>.
                </p>
              </div>
            </div>
            
            {/* Social Links Section */}
            <div className="space-y-4">
              <div className="text-neutral-500 text-sm">
                03 Connect.md
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
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
                  onClick={() => window.open('https://twitter.com/abhinandpn', '_blank')}
                >
                  <Twitter size={16} />
                  Twitter
                </Button>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-24 pt-8 border-t border-neutral-100 text-neutral-400 text-sm">
              © {new Date().getFullYear()} Abhinandpn. All rights reserved.
            </footer>
          </div>
        </div>
        
        {/* Fixed position "cursor" */}
        <div className="fixed right-6 top-24 z-40">
          <div className="w-10 h-10 rounded-full border-2 border-neutral-800 flex items-center justify-center">
            <div className={`w-2 h-2 rounded-full bg-neutral-800 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Index;
