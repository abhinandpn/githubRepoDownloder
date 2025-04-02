
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const StorySection = () => {
  return (
    <section id="story" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center">
            <span className="w-3 h-3 rounded-full bg-neon-green mr-2"></span>
            <span className="text-neon-green text-sm uppercase tracking-wider font-medium">My Story</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6">
              <Quote className="w-12 h-12 text-neon-blue opacity-50" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              With innovation at our core, we've redefined growth—no longer bound by the need to hire countless design professionals. Our systems are faster, efficient, and resilient.
            </h2>
            <div className="flex items-center mt-8">
              <div className="mr-4">
                <div className="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-neon-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-medium text-white">Backend Developer</p>
                <p className="text-white/60 text-sm">Lead Architect</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden neon-border-blue">
                <img 
                  src="/lovable-uploads/5ea62d5a-6b74-4ae0-9128-01a65f1afd37.png" 
                  alt="Backend developer with server infrastructure" 
                  className="w-full object-cover h-[400px]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-black p-4 rounded-lg neon-border-green">
                <div className="text-neon-green font-mono text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-neon-green mr-2 animate-pulse"></span>
                    <span>systems.online</span>
                  </div>
                  <div className="mt-1 flex items-center">
                    <span className="w-3 h-3 rounded-full bg-neon-yellow mr-2"></span>
                    <span className="text-neon-yellow">99.9% uptime</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
