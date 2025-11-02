"use client";
import { motion } from "motion/react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer } from "@/components/ui/footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function BusinessFormationPage() {
  const services = [
    {
      title: "Limited Liability Company (LLC)",
      price: "$0 + state fees",
      description: "Protect personal assets with flexible business structure and tax benefits.",
      buttonText: "Start my LLC"
    },
    {
      title: "Corporation (S or C Corp)",
      price: "$149 + state fees",
      description: "Issue shares and attract investors for business ",
      buttonText: "Start my Corporation"
    },
    {
      title: "Nonprofit (501c3)",
      price: "$99 + state fees",
      description: "Tax-exempt organization designed for social benefit causes and community impact.",
      buttonText: "Start my Nonprofit"
    },
    {
      title: "Doing Business As (DBA)",
      price: "$99 + state fees",
      description: "Use business name without the complexity of LLC formation .",
      buttonText: "Start my DBA"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="section">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-xl"
          >
            <TextGenerateEffect 
              words="Kickstart your business in minutes"
              className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8"
            />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-xl">
              Choose the right business structure to protect your assets and maximize your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-none mx-auto px-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-white relative group/card border-gray-200 w-full h-80 rounded-xl p-6 border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <CardItem translateZ="50" className="mb-4">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {service.title}
                        </h3>
                      </CardItem>
                      
                      <CardItem translateZ="60" className="mb-4">
                        <p className="text-2xl font-bold text-[#ea6a61]">
                          {service.price}
                        </p>
                      </CardItem>
                      
                      <CardItem translateZ="40" as="p" className="text-base text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </CardItem>
                    </div>
                    
                    <CardItem translateZ="80" className="w-full">
                      <button className="w-full">
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front text-sm">{service.buttonText}</span>
                      </button>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="section bg-gray-50">
          <div className="container-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-xl"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-6 font-semibold hover:no-underline">
                    What's the difference between an LLC and a corporation?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    Both protect owners from personal liability. LLCs have individual owners while corporations have shareholders. Corporations require more formal record-keeping.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-6 font-semibold hover:no-underline">
                    What's the difference between a C corporation and an S corporation?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    C corps are taxed separately, S corps pass profits/losses to shareholders' personal returns. S corps have ownership restrictions.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-6 font-semibold hover:no-underline">
                    What's the main difference between a sole proprietorship and an LLC?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    Sole proprietorships offer no liability protection. LLCs protect personal assets from business debts.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="px-6 font-semibold hover:no-underline">
                    How are different business types taxed?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    LLCs and sole proprietorships: pass-through taxation. C corps: double taxation. S corps: pass-through with restrictions.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="px-6 font-semibold hover:no-underline">
                    Which business types give me personal liability protection?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    LLCs and corporations provide liability protection. Sole proprietorships and partnerships do not.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}