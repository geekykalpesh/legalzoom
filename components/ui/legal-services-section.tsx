"use client";
import { motion } from "motion/react";
import { GlowingEffect } from "./glowing-effect";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import { PointerHighlight } from "./pointer-highlight";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export function LegalServicesSection() {

  const services = [
    {
      icon: "🏢",
      heading: "Business",
      paragraph: "Form companies, get licenses, and set up your business for long-term success.",
      mainButton: "Start my business",
      buttons: ["LLC", "Corporation", "DBA", "Get legal help"]
    },
    {
      icon: "👨‍👩‍👧‍👦",
      heading: "Family",
      paragraph: "Create wills and estate planning documents to protect your loved ones now.",
      mainButton: "Start my Estate Plan",
      buttons: ["Last will", "Living trust", "Power of attorney", "Get legal help"]
    },
    {
      icon: "💡",
      heading: "Patents",
      paragraph: "Secure trademark, copyright, and patent protection for your creative works today.",
      mainButton: "View all options",
      buttons: ["Trademarks", "Copyrights", "Patents"]
    }
  ];

  return (
    <div className="px-6 py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center "
        >
          <TypewriterEffectSmooth 
            words={[
              { text: "Legal" },
              { text: "help" },
              { text: "for" },
              { text: "every" },
              { text: "part" },
              { text: "of" },
              { text: "your" },
              { text: "life", className: "text-[#ea6a61]" }
            ]}
            cursorClassName="bg-[#ea6a61]"
            className="text-4xl md:text-5xl font-bold text-gray-900 justify-center"
          />
        </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => {
              return (
                <div key={index} data-card={index} onMouseEnter={() => {
                    const lordIcon = document.querySelectorAll(`[data-card="${index}"] lord-icon`)[0] as HTMLElement & { play: () => void };
                    if (lordIcon) lordIcon.play();
                  }}>
                  <CardContainer className="inter-var ">
                    <CardBody className="bg-gray-50 relative group/card border-gray-200 w-80 h-auto rounded-xl p-6 border">
                    <CardItem translateZ="50" className="flex items-center justify-between mb-6 gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl"
                        style={{ backgroundColor: '#ea6a611a' }}
                      >
                        {index === 0 ? (
                          <lord-icon
                            src="https://cdn.lordicon.com/qlpudrww.json"
                            trigger="morph"
                            colors="primary:#ea6a61"
                            style={{width:"40px", height:"40px"}}
                          ></lord-icon>
                        ) : index === 1 ? (
                          <lord-icon
                            src="https://cdn.lordicon.com/oeotfwsx.json"
                            trigger="morph"
                            colors="primary:#ea6a61"
                            style={{width:"40px", height:"40px"}}
                          ></lord-icon>
                        ) : (
                          <lord-icon
                            src="https://cdn.lordicon.com/jqqjtvlf.json"
                            trigger="morph"
                            colors="primary:#ea6a61"
                            style={{width:"40px", height:"40px"}}
                          ></lord-icon>
                        )}
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 text-right flex-1 ml-4">
                        {service.heading}
                      </h3>
                    </CardItem>
                    
                    <CardItem translateZ="60" as="p" className="text-gray-600 mb-6 leading-relaxed">
                      {service.paragraph}
                    </CardItem>
                    
                    <CardItem translateZ="80" className="w-full mb-4">
                      <button className="w-full">
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front">{service.mainButton}</span>
                      </button>
                    </CardItem>
                    
                    <CardItem translateZ="40" className="grid grid-cols-2 gap-2 justify-items-center">
                      {service.buttons.map((button, btnIndex) => (
                        <button key={btnIndex} className="secondary-button">
                          {button}
                        </button>
                      ))}
                    </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}