
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would typically connect to a backend service
    // For demonstration, we're just showing a toast notification
    
    if (!email || !message || !name) {
      toast.error("Please fill in all fields");
      return;
    }
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-black/50">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon-green/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-neon-blue/5 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing Together!
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Ready to take your backend infrastructure to the next level? Send me a message and let's discuss how we can work together.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto glass-card p-8 neon-border-green">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-white/80 mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-white/80 mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-white/80 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[120px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-neon-green hover:bg-neon-green/90 text-black font-medium py-6"
            >
              Send Message <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 mb-2">Or reach out directly via email</p>
            <a 
              href="mailto:contact@example.com" 
              className="inline-flex items-center text-neon-blue hover:text-neon-blue/80 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              contact@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
