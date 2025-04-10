
import { motion } from "framer-motion";
import { MessageSquare, Code, Headphones } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Share Your Idea",
      description: "Define project goals, requirements, and technical specifications to create a clear roadmap.",
      delay: 0
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Watch It Come to Life",
      description: "Expert development with regular updates and transparency throughout the build process.",
      delay: 0.2
    },
    {
      icon: <Headphones className="w-6 h-6 text-white" />,
      title: "Stay Supported",
      description: "Continuous optimization, monitoring, and maintenance to ensure your system stays robust.",
      delay: 0.4
    }
  ];
  
  return (
    <section id="process" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center">
            <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
            <span className="text-white/70 text-sm uppercase tracking-wider font-medium">The Process</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            From Vision to Reality
          </h2>
          
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            A streamlined approach to bringing your backend infrastructure to life with expertise and precision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.delay }}
              viewport={{ once: true }}
              className="meta-glass p-8 text-center relative group hover:bg-white/10 transition-colors duration-300"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300">
                  {step.icon}
                </div>
              </div>
              
              <div className="mt-8">
                <span className="inline-block w-8 h-8 rounded-full bg-white/5 text-white font-medium mb-4">
                  {index + 1}
                </span>
                <h3 className="text-xl font-medium mb-4 group-hover:text-white transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300 text-sm">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-0 -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
