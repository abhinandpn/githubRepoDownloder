
import { motion } from "framer-motion";
import { 
  LineChart, 
  BarChart,
  TrendingUp 
} from "lucide-react";

const ExpertiseSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="mb-6 inline-flex items-center">
              <span className="w-3 h-3 rounded-full bg-neon-green mr-2"></span>
              <span className="text-neon-green text-sm uppercase tracking-wider font-medium">My Expertise</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="block mb-2">Backend Developer | </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                Secure & Scalable
              </span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              A backend developer building secure, scalable, and AI-driven systems in 
              <span className="text-neon-green"> Golang</span>, <span className="text-neon-blue">gRPC</span>, <span className="text-neon-yellow">Kafka</span>, and cloud 
              technologies like <span className="text-neon-yellow">AWS</span> & <span className="text-neon-blue">Kubernetes</span>, 
              specializing in <span className="text-neon-green">microservices</span> and high-performance architectures.
            </p>
            
            <div className="flex items-center mb-8">
              <span className="text-neon-yellow mr-3">★</span>
              <p className="text-white/80">
                Solving complex challenges with scalable, secure, and AI-powered solutions.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="glass-card p-6 neon-border-green"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="text-neon-green w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 neon-glow-green">Cost-effective solutions</h3>
              <p className="text-white/70">
                High-performance, optimized backend systems that scale efficiently to reduce infrastructure costs.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 neon-border-blue"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="text-neon-blue w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 neon-glow-blue">Tailor-made design</h3>
              <p className="text-white/70">
                Custom, performance-focused backend architectures designed specifically to solve your unique challenges.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 neon-border-yellow md:col-span-2"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-neon-yellow/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-neon-yellow w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 neon-glow-yellow">Scalable as you grow</h3>
              <p className="text-white/70">
                Future-proof designs that grow with your business, ensuring smooth scaling without major refactoring.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
