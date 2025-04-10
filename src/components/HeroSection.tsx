
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/5 rounded-full filter blur-[100px] opacity-40 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-white/5 rounded-full filter blur-[100px] opacity-40 animate-pulse-slow"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
              <span className="block">Passionate</span>
              <span className="block mb-2">Backend Developer</span>
              <span className="block text-gradient">
                Secure, Scalable &
              </span>
              <span className="block text-gradient">
                AI-Driven Solutions
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Expert in building high-performance backend systems using modern technologies.
              Specializing in microservices architecture, real-time data processing, and secure API development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="meta-glass meta-button text-white px-6 py-5"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Connect Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="meta-glass meta-button text-white/80 px-6 py-5 border-white/10"
                onClick={() => {
                  const workflowSection = document.getElementById('workflow');
                  workflowSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore My Work
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="row-span-2 meta-glass p-4 flex items-center justify-center animate-float opacity-80">
              <div className="w-32 h-32 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 text-white fill-current">
                  <path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536L3 12.7071L3 17.5C3 19.433 4.567 21 6.5 21L17.5 21C19.433 21 21 19.433 21 17.5L21 12.7071L21.8536 11.8536C22.0488 11.6583 22.0488 11.3417 21.8536 11.1464L20.9558 10.2487L21.293 9.91151L21.3492 9.85529C21.9044 9.30004 21.9044 8.40034 21.3492 7.8451L20.7071 7.20297C20.1518 6.64772 19.2521 6.64772 18.6969 7.20297L18.1514 7.74847L17.2538 6.85088L16.8017 6.3988C16.5569 6.15398 16.5569 5.75061 16.8017 5.50579C16.9241 5.3834 16.9241 5.18401 16.8017 5.06161L14.9384 3.1983C14.816 3.07591 14.6166 3.07591 14.4942 3.1983C14.2494 3.44311 13.846 3.44311 13.6012 3.1983L13.1492 2.74622L12.2516 1.84863L11.8536 1.45064C11.6583 1.25538 11.3417 1.25538 11.1464 1.45064L10.2487 2.34823L8.74847 3.84853L7.74847 4.84853L3.84853 8.74847L2.14645 10.4505L2.14645 11.1464ZM11.5 14C12.8807 14 14 12.8807 14 11.5C14 10.1193 12.8807 9 11.5 9C10.1193 9 9 10.1193 9 11.5C9 12.8807 10.1193 14 11.5 14Z" />
                </svg>
              </div>
            </div>
            <div className="meta-glass p-4 flex items-center justify-center animate-float opacity-80" style={{ animationDelay: "0.5s" }}>
              <div className="w-16 h-16 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white fill-current">
                  <path d="M15.9998 5.33331C9.74842 5.33331 4.6665 10.4152 4.6665 16.6666C4.6665 22.918 9.74842 28 15.9998 28C22.2513 28 27.3332 22.918 27.3332 16.6666C27.3332 10.4152 22.2513 5.33331 15.9998 5.33331ZM13.9156 20.8166L10.3532 17.2541C9.94128 16.8422 9.94128 16.1696 10.3532 15.7577C10.7651 15.3458 11.4377 15.3458 11.8496 15.7577L14.6665 18.5746L20.148 13.0931C20.5599 12.6812 21.2325 12.6812 21.6444 13.0931C22.0563 13.505 22.0563 14.1776 21.6444 14.5895L15.412 20.8219C15.0001 21.2338 14.3275 21.2338 13.9156 20.8219V20.8166Z" />
                </svg>
              </div>
            </div>
            <div className="meta-glass p-4 flex items-center justify-center animate-float opacity-80" style={{ animationDelay: "1s" }}>
              <div className="w-16 h-16 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-10 h-10 text-white fill-current">
                  <path d="M13.7233 2.68658C14.9312 2.02809 16.4249 2.02808 17.6328 2.68656L25.8374 7.31323C27.0453 7.97171 27.7922 9.25767 27.7922 10.6533V19.9067C27.7922 21.3023 27.0453 22.5883 25.8374 23.2468L17.6328 27.8734C16.4249 28.5319 14.9312 28.5319 13.7233 27.8734L5.51869 23.2468C4.31082 22.5883 3.56393 21.3023 3.56393 19.9067V10.6533C3.56393 9.25767 4.31082 7.97172 5.51869 7.31324L13.7233 2.68658Z"/>
                </svg>
              </div>
            </div>
            <div className="meta-glass p-4 flex items-center justify-center animate-float opacity-80" style={{ animationDelay: "1.5s" }}>
              <div className="w-16 h-16 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white fill-current">
                   <path d="M8.5 4.5C5.46243 4.5 3 6.96243 3 10C3 13.0376 5.46243 15.5 8.5 15.5C9.58943 15.5 10.6123 15.1923 11.4746 14.65L12 15.1754V16.5H14V18.5H16V20.5H19V17.5L12.9246 11.4246C13.559 10.5191 13.9167 9.39777 13.9167 8.25C13.9167 5.21243 11.4542 2.75 8.41667 2.75C7.59002 2.75 6.76759 2.90906 6 3.2L8.8 6L7.5 8.5L5 9.8L2.2 7C1.90906 7.76759 1.75 8.59002 1.75 9.41667C1.75 12.4542 4.21243 14.9167 7.25 14.9167C8.39777 14.9167 9.5191 14.559 10.4246 13.9246L16.5 20H14.5L14.5 22H12.5L12.5 24H15.5L21.5 18L21.5 14.5L15.1754 8.17537L14.65 8.75C15.1923 7.8877 15.5 6.8648 15.5 5.77537C15.5 2.7378 13.0376 0.275366 10 0.275366C6.96243 0.275366 4.5 2.7378 4.5 5.77537L8.5 5.77537L8.5 4.5ZM5.75 9.75C5.75 8.50736 6.75736 7.5 8 7.5C9.24264 7.5 10.25 8.50736 10.25 9.75C10.25 10.9926 9.24264 12 8 12C6.75736 12 5.75 10.9926 5.75 9.75Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-28 flex justify-center">
          <a href="#tech-stack" className="animate-bounce p-2">
            <svg
              className="w-6 h-6 text-white/30"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
