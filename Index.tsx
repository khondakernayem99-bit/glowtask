import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <Button variant="hero" size="lg" asChild>
          <a href="/dashboard">
            <LayoutDashboard className="h-5 w-5 mr-2" />
            Go to Dashboard
          </a>
        </Button>
      </div>
      <Hero />
      <HowItWorks />
      <Testimonials />
      <SignupSection />
      <Footer />
    </div>
  );
};

export default Index;
