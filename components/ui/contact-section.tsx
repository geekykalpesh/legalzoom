"use client";
import { motion } from "motion/react";
import { LampContainer } from "./lamp";
import { SparklesCore } from "./sparkles";
import { CardContainer, CardBody, CardItem } from "./3d-card";

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
    <LampContainer className="pt-15 relative -mb-80 pb-10">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 1.1,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] [mask-image:radial-gradient(ellipse_300px_200px_at_center,white_20%,transparent_70%)]"
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
        className="mt-80 text-white py-4 text-center text-4xl md:text-5xl font-bold tracking-tight mb-0"
      >
        Contact Us
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="text-white text-lg max-w-2xl mx-auto text-center mb-4"
      >
        Get in touch with our team for support and sales inquiries
      </motion.p>
      
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {contactInfo.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
          >
            <CardContainer className="inter-var py-2">
              <CardBody className="bg-white/10 backdrop-blur-sm relative group/card border-white/20 w-80 h-auto rounded-xl p-8 border">
                <CardItem translateZ="50" className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {contact.title}
                  </h3>
                </CardItem>
                
                <CardItem translateZ="60" className="text-center mb-4">
                  <div className="text-3xl font-bold" style={{ color: '#ea6a61' }}>
                    {contact.phone}
                  </div>
                </CardItem>
                
                <CardItem translateZ="40" as="p" className="text-slate-400 mb-6 whitespace-pre-line text-center">
                  {contact.hours}
                </CardItem>
                
                <CardItem translateZ="80" className="w-full">
                  <button>
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front flex items-center gap-2">
                      <lord-icon
                        src="https://cdn.lordicon.com/bpptgtfr.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{width:"20px", height:"20px"}}
                      ></lord-icon>
                      Chat with us
                    </span>
                  </button>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
      

    </LampContainer>
  );
}