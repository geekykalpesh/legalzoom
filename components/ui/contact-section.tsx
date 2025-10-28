"use client";
import { motion } from "motion/react";
import { LampContainer } from "./lamp";
import { SparklesCore } from "./sparkles";

export function ContactSection() {
  const contactInfo = [
    {
      title: "Customer Care",
      phone: "(888) 379-0854",
      hours: "Mon–Fri: 5 a.m.–7 p.m. PT\nWeekends: 7 a.m.–4 p.m. PT"
    },
    {
      title: "Sales",
      phone: "(855) 787-1922",
      hours: "Mon–Fri: 5 a.m.–7 p.m. PT\nWeekends: 7 a.m.–4 p.m. PT"
    }
  ];

  return (
    <LampContainer className="pt-20 relative -mb-48">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 1.1,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] [mask-image:radial-gradient(ellipse_300px_200px_at_center,white_20%,transparent_70%)]"
      >
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={800}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-80 text-white py-4 text-center text-4xl md:text-5xl font-bold tracking-tight mb-8"
      >
        Contact Us
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-white text-lg max-w-2xl mx-auto text-center mb-16"
      >
        Get in touch with our team for support and sales inquiries
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {contactInfo.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
            className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              {contact.title}
            </h3>
            
            <div className="text-3xl font-bold mb-4" style={{ color: '#ea6a61' }}>
              {contact.phone}
            </div>
            
            <p className="text-slate-400 mb-6 whitespace-pre-line">
              {contact.hours}
            </p>
            
            <button 
              className="px-6 py-3 rounded-lg border-2 font-semibold transition-all duration-200 hover:scale-105"
              style={{ borderColor: '#ea6a61', color: '#ea6a61' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ea6a61';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#ea6a61';
              }}
            >
              Chat with us
            </button>
          </motion.div>
        ))}
      </div>
    </LampContainer>
  );
}