"use client";
import { motion } from "motion/react";

import { CardContainer, CardBody, CardItem } from "./3d-card";





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
    <div className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-xl"
        >
          <h2 className="heading-lg text-gray-900">
            Legal help for every part of your <span className="text-[#ea6a61]">life</span>
          </h2>
        </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => {
              return (
                <div key={index} data-card={index} onMouseEnter={() => {
                    const lordIcon = document.querySelectorAll(`[data-card="${index}"] lord-icon`)[0] as HTMLElement & { play?: () => void };
                    if (lordIcon && lordIcon.play) lordIcon.play();
                  }}>
                  <CardContainer className="inter-var ">
                    <CardBody className="bg-gray-50 relative group/card border-gray-200 w-80 h-auto rounded-xl p-6 border">
                    <CardItem translateZ="50" className="flex items-center justify-between mb-6 gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl bg-[#ea6a611a]"
                      >
                        {index === 0 ? (
                          <div className="w-10 h-10 bg-[#ea6a61] rounded-full flex items-center justify-center text-white text-lg font-bold">B</div>
                        ) : index === 1 ? (
                          <div className="w-10 h-10 bg-[#ea6a61] rounded-full flex items-center justify-center text-white text-lg font-bold">F</div>
                        ) : (
                          <div className="w-10 h-10 bg-[#ea6a61] rounded-full flex items-center justify-center text-white text-lg font-bold">P</div>
                        )}
                      </motion.div>
                      
                      <h3 className="heading-md text-gray-900 text-right flex-1 ml-4">
                        {service.heading}
                      </h3>
                    </CardItem>
                    
                    <CardItem translateZ="60" as="p" className="text-base text-gray-600 mb-md leading-relaxed">
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