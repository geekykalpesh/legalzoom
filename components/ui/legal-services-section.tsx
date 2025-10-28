"use client";
import { motion } from "motion/react";
import { GlowingEffect } from "./glowing-effect";

import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': any;
    }
  }
}

export function LegalServicesSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const services = [
    {
      iconSrc: "https://cdn.lordicon.com/jvucoldz.json",
      heading: "Business",
      paragraph: "Form companies, get licenses, and set up your business for long-term success.",
      mainButton: "Start my business",
      buttons: ["LLC", "Corporation", "DBA", "Get legal help"]
    },
    {
      iconSrc: "https://cdn.lordicon.com/hrjifpbq.json",
      heading: "Family",
      paragraph: "Create wills and estate planning documents to protect your loved ones now.",
      mainButton: "Start my Estate Plan",
      buttons: ["Last will", "Living trust", "Power of attorney", "Get legal help"]
    },
    {
      iconSrc: "https://cdn.lordicon.com/kkvxgpti.json",
      heading: "Intellectual Property",
      paragraph: "Secure trademark, copyright, and patent protection for your creative works today.",
      mainButton: "View all options",
      buttons: ["Trademarks", "Copyrights", "Patents"]
    }
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Legal help for every part of your life
          </h2>
        </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <GlowingEffect
                    disabled={false}
                    proximity={100}
                    spread={30}
                    blur={2}
                    borderWidth={2}
                  />
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full"
                      style={{ backgroundColor: '#ea6a611a' }}
                    >
                      <lord-icon
                        src={service.iconSrc}
                        trigger="hover"
                        colors="primary:#ea6a61,secondary:#d85a51"
                        style={{ width: '32px', height: '32px' }}
                      />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 text-right flex-1 ml-4">
                      {service.heading}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.paragraph}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-white font-semibold py-3 px-6 rounded-lg mb-4 transition-colors duration-200"
                    style={{ backgroundColor: '#ea6a61' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#d85a51'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ea6a61'}
                  >
                    {service.mainButton}
                  </motion.button>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {service.buttons.map((button, btnIndex) => (
                      <motion.button
                        key={btnIndex}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-sm border border-gray-300 text-gray-700 py-2 px-3 rounded-md transition-all duration-200"
                        onMouseEnter={(e) => {
                          e.target.style.borderColor = '#ea6a61';
                          e.target.style.color = '#ea6a61';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.borderColor = '#d1d5db';
                          e.target.style.color = '#374151';
                        }}
                      >
                        {button}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
  );
}