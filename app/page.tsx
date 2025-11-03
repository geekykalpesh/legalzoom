"use client";
import { useEffect } from "react";
import { HeroSection } from "../components/ui/hero-section";
import { AttorneySection } from "../components/ui/attorney-section";
import { HighlightsSection } from "../components/ui/highlights-section";
import { WhyChooseUsSection } from "../components/ui/why-choose-us-section";
import { LegalServicesSection } from "../components/ui/legal-services-section";
import { TestimonialsSection } from "../components/ui/testimonials-section";
import { Footer } from "../components/ui/footer";
import { ContactSection } from "../components/ui/contact-section";

import { motion } from "motion/react";
import { useRef } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <HeroSection />
      
      <AttorneySection />
      
      <HighlightsSection />
      
      
      <LegalServicesSection />
      
      <TestimonialsSection />
      
      <WhyChooseUsSection />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
}
