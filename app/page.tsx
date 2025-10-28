"use client";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "../components/ui/resizable-navbar";
import { HeroSection } from "../components/ui/hero-section";
import { AttorneySection } from "../components/ui/attorney-section";
import { HighlightsSection } from "../components/ui/highlights-section";
import { WhyChooseUsSection } from "../components/ui/why-choose-us-section";
import { LegalServicesSection } from "../components/ui/legal-services-section";
import { TestimonialsSection } from "../components/ui/testimonials-section";
import { Footer } from "../components/ui/footer";
import { ContactSection } from "../components/ui/contact-section";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Business", link: "/business" },
    { name: "Personal", link: "/personal" },
    { name: "Attorneys", link: "/attorneys" },
    { name: "Forms", link: "/forms" },
    { name: "Support", link: "/support" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <Navbar className="fixed top-0">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton>Sign In</NavbarButton>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navItems.map((item, idx) => (
              <a key={idx} href={item.link} className="text-neutral-600">
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
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
