
import { useState } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would typically connect to a backend service
    // For demonstration, we're just showing a toast notification
    
    if (!email || !message || !name) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setLoading(true);
    
    // Simulate sending message
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setEmail("");
      setMessage("");
      setName("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-black/50">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon-green/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-neon-blue/5 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto max-w-5xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-white/70">
            Let's discuss how we can work together on your next project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Contact Info */}
          <div className="md:col-span-2 glass-card p-6 neon-border-blue flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-white/70">Feel free to reach out through any of these channels.</p>
            </div>
            
            <a 
              href="mailto:dev.abhinandpn@gmail.com" 
              className="flex items-center gap-3 text-white/80 hover:text-neon-blue transition-colors group"
            >
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <span>dev.abhinandpn@gmail.com</span>
            </a>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/abhinandpn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-neon-blue transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/abhinand_p_n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-neon-blue transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhinandpn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-neon-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3 glass-card p-6 neon-border-green">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div>
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
                
                <div>
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
                
                <div>
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
                  className="bg-neon-green hover:bg-neon-green/90 text-black font-medium"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
