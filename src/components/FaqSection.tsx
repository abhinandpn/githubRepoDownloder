
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const faqItems: FaqItem[] = [
    {
      question: "What programming languages and technologies do you work with?",
      answer: "I primarily work with Golang for backend development, utilizing gRPC for efficient microservices communication, Kafka for event streaming, and Docker/Kubernetes for containerization and orchestration. For cloud infrastructure, I mainly work with AWS services like EKS, Lambda, DynamoDB, and S3. I'm also experienced with CI/CD pipelines using tools like GitHub Actions, Jenkins, and ArgoCD."
    },
    {
      question: "How do you handle scalability challenges in your solutions?",
      answer: "Scalability is designed from the ground up in all my solutions. I implement horizontal scaling with stateless services, utilize efficient caching strategies, and design data models optimized for high throughput. For database scaling, I employ sharding, read replicas, and carefully designed indexes. Event-driven architectures help decouple services, allowing independent scaling based on specific workloads. Everything is monitored with comprehensive metrics to identify bottlenecks early."
    },
    {
      question: "What's your approach to integrating AI into backend systems?",
      answer: "I take a pragmatic approach to AI integration, identifying specific problems where AI can provide real value. This might include implementing recommendation engines, fraud detection systems, chatbots for customer service, or content moderation. I typically work with established ML frameworks and cloud ML services, creating well-designed APIs that abstract the complexity while providing robust monitoring for model performance. The key is maintaining a balance between innovation and reliability."
    },
    {
      question: "How do you ensure the security of the systems you develop?",
      answer: "Security is integrated at every level of my development process. I follow secure coding practices, implement proper authentication and authorization using industry standards like OAuth 2.0/JWT, encrypt data both in transit and at rest, and conduct regular security audits. I also implement rate limiting, input validation, and protection against common vulnerabilities. For deployment, I follow the principle of least privilege, use network segmentation, and ensure all dependencies are regularly updated."
    },
    {
      question: "What's your experience with real-world, high-traffic systems?",
      answer: "I've worked on several high-traffic systems processing millions of requests daily. This includes developing event-streaming pipelines handling 10,000+ messages per second, designing APIs that maintain sub-100ms response times under heavy load, and implementing fault-tolerant microservices with graceful degradation. I've also led the migration of monolithic applications to cloud-native architectures, resulting in improved scalability and significant cost reductions while maintaining reliability."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We've got the answers
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Common questions about my backend development services
          </p>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <button
                className="flex justify-between items-center w-full text-left px-6 py-4"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-white text-lg">{item.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-white/70 transition-transform duration-200 ${
                    openItem === index ? "transform rotate-180" : ""
                  }`} 
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-white/70">
                  {item.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
