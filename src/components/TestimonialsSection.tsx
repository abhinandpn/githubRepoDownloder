
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "CTO, TechVision",
      quote: "The backend architecture designed for our platform has been rock-solid. Even during traffic spikes, we've experienced zero downtime.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Product Lead, DataFlow",
      quote: "Incredible expertise in Kafka and event-driven systems. Our real-time analytics platform now processes millions of events without breaking a sweat.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, CloudScale",
      quote: "The microservices architecture implemented for our SaaS product allowed us to scale individual components as needed, saving us significant infrastructure costs.",
      rating: 4
    }
  ];

  const stats = [
    { value: "45+", label: "Happy Clients" },
    { value: "5K+", label: "Hours of Coding" },
    { value: "4.8", label: "Rating" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 relative"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-neon-yellow text-neon-yellow" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-500" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-green/30 to-neon-blue/30 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="py-8"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-neon-green via-neon-blue to-neon-yellow">
                {stat.value}
              </p>
              <p className="text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
