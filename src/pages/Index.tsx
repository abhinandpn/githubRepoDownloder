
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import WorkflowSection from "@/components/WorkflowSection";
import ProcessSection from "@/components/ProcessSection";
import StorySection from "@/components/StorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        <HeroSection />
        <TechStackSection />
        <ExpertiseSection />
        <WorkflowSection />
        <ProcessSection />
        <StorySection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
