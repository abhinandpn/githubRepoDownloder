
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface WorkflowItem {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: "green" | "blue" | "yellow";
}

const WorkflowSection = () => {
  const workflowItems: WorkflowItem[] = [
    {
      title: "Event-Driven Architecture",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-neon-green">
          <path d="M13.5 1.5C12.6716 1.5 12 2.17157 12 3V9.75C12 10.1642 12.3358 10.5 12.75 10.5H19.5C19.9142 10.5 20.25 10.1642 20.25 9.75C20.25 7.26472 18.2353 5.25 15.75 5.25V3C15.75 2.17157 15.0784 1.5 14.25 1.5H13.5Z" />
          <path d="M3 21C3 21.6358 3.5142 22.5 4.5 22.5H19.5C20.4858 22.5 21 21.6358 21 21C21 20.3642 20.4858 19.5 19.5 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V5.25C4.5 4.83579 4.83579 4.5 5.25 4.5C5.66421 4.5 6 4.83579 6 5.25V17.25C6 17.6642 6.33579 18 6.75 18H18.75C19.1642 18 19.5 17.6642 19.5 17.25V14.25C19.5 13.8358 19.8358 13.5 20.25 13.5C20.6642 13.5 21 13.8358 21 14.25V18C21 19.5 19.9142 21 18.75 21H4.5C3.3358 21 3 19.9142 3 19.5V4.5C3 3.3358 3.83579 3 4.5 3C5.16421 3 6 3.3358 6 4.5V16.5C6 16.9142 6.33579 17.25 6.75 17.25H18C18.4142 17.25 18.75 16.9142 18.75 16.5V14.25C18.75 13.8358 19.0858 13.5 19.5 13.5C19.9142 13.5 20.25 13.8358 20.25 14.25V16.5C20.25 17.6642 19.4142 18.75 18 18.75H6.75C5.33579 18.75 4.5 17.9142 4.5 16.5V4.5C4.5 4.0858 4.16421 3.75 3.75 3.75C3.33579 3.75 3 4.0858 3 4.5V21Z" />
        </svg>
      ),
      description: "Design systems that react to events in real-time, promoting loose coupling and high resilience.",
      color: "green"
    },
    {
      title: "Real-Time Data Processing",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-neon-blue">
          <path d="M2.5 7.5C2.5 5.29086 4.29086 3.5 6.5 3.5C8.70914 3.5 10.5 5.29086 10.5 7.5C10.5 9.70914 8.70914 11.5 6.5 11.5C4.29086 11.5 2.5 9.70914 2.5 7.5Z" fillOpacity="0.5" />
          <path d="M13.5 7.5C13.5 5.29086 15.2909 3.5 17.5 3.5C19.7091 3.5 21.5 5.29086 21.5 7.5C21.5 9.70914 19.7091 11.5 17.5 11.5C15.2909 11.5 13.5 9.70914 13.5 7.5Z" fillOpacity="0.7" />
          <path d="M2.5 17.5C2.5 15.2909 4.29086 13.5 6.5 13.5C8.70914 13.5 10.5 15.2909 10.5 17.5C10.5 19.7091 8.70914 21.5 6.5 21.5C4.29086 21.5 2.5 19.7091 2.5 17.5Z" fillOpacity="0.7" />
          <path d="M13.5 17.5C13.5 15.2909 15.2909 13.5 17.5 13.5C19.7091 13.5 21.5 15.2909 21.5 17.5C21.5 19.7091 19.7091 21.5 17.5 21.5C15.2909 21.5 13.5 19.7091 13.5 17.5Z" fillOpacity="0.5" />
        </svg>
      ),
      description: "Build systems that can handle streaming data and provide real-time insights for immediate action.",
      color: "blue"
    },
    {
      title: "Microservices Architecture",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-neon-yellow">
          <path d="M4 4.5V7.5C4 8.05228 4.44772 8.5 5 8.5H7C7.55228 8.5 8 8.05228 8 7.5V4.5C8 3.94772 7.55228 3.5 7 3.5H5C4.44772 3.5 4 3.94772 4 4.5Z" />
          <path d="M4 12.5V15.5C4 16.0523 4.44772 16.5 5 16.5H7C7.55228 16.5 8 16.0523 8 15.5V12.5C8 11.9477 7.55228 11.5 7 11.5H5C4.44772 11.5 4 11.9477 4 12.5Z" />
          <path d="M12 4.5V7.5C12 8.05228 12.4477 8.5 13 8.5H15C15.5523 8.5 16 8.05228 16 7.5V4.5C16 3.94772 15.5523 3.5 15 3.5H13C12.4477 3.5 12 3.94772 12 4.5Z" />
          <path d="M12 12.5V15.5C12 16.0523 12.4477 16.5 13 16.5H15C15.5523 16.5 16 16.0523 16 15.5V12.5C16 11.9477 15.5523 11.5 15 11.5H13C12.4477 11.5 12 11.9477 12 12.5Z" />
          <path d="M4 20.5V19.5C4 18.9477 4.44772 18.5 5 18.5H19C19.5523 18.5 20 18.9477 20 19.5V20.5C20 21.0523 19.5523 21.5 19 21.5H5C4.44772 21.5 4 21.0523 4 20.5Z" />
          <path d="M20 4.5V15.5C20 16.0523 19.5523 16.5 19 16.5H18C17.4477 16.5 17 16.0523 17 15.5V4.5C17 3.94772 17.4477 3.5 18 3.5H19C19.5523 3.5 20 3.94772 20 4.5Z" />
        </svg>
      ),
      description: "Develop decoupled services that enable faster deployment, better scaling, and improved resilience.",
      color: "yellow"
    },
    {
      title: "Secure API Integrations",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-neon-green">
          <path d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10M12 14V17M8 22H16C17.1046 22 18 21.1046 18 20V12C18 10.8954 17.1046 10 16 10H8C6.89543 10 6 10.8954 6 12V20C6 21.1046 6.89543 22 8 22Z" strokeWidth="2" strokeLinecap="round" fillOpacity="0" stroke="currentColor" />
        </svg>
      ),
      description: "Create robust, secure API endpoints with proper authentication, authorization, and data validation.",
      color: "green"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="workflow" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-black/50">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-neon-green/10 rounded-full filter blur-[80px] opacity-60"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[100px] opacity-60"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center">
            <span className="w-3 h-3 rounded-full bg-neon-blue mr-2"></span>
            <span className="text-neon-blue text-sm uppercase tracking-wider font-medium">My Workflow</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Backend Development Approach
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            I utilize modern architectural patterns and best practices to deliver 
            high-performance, scalable backend systems
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {workflowItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`glass-card p-6 relative overflow-hidden neon-border-${item.color}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-${item.color}/10 flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 neon-glow-${item.color}`}>{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowRight className={`w-5 h-5 text-${item.color} opacity-50`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
