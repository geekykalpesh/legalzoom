"use client";
import { motion } from "motion/react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Footer } from "@/components/ui/footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function IntellectualPropertyPage() {
  const firstSectionServices = [
    {
      title: "Trademark registration",
      description: "Get exclusive rights to a name, symbol, or slogan that distinguishes.",
      buttonText: "Learn more"
    },
    {
      title: "Trademark search",
      description: "See if the name, symbol, or slogan you want to register is available.",
      buttonText: "Learn more"
    },
    {
      title: "Trademark monitoring",
      description: "Protect your brand by being alerted of potential infringements.",
      buttonText: "Learn more"
    },
    {
      title: "Copyright registration",
      description: "Keep others from using and profiting from your book, article, song, photo, art, etc.",
      buttonText: "Learn more"
    },
    {
      title: "Provisional patent application",
      description: "Get \"patent pending\" status while you prepare.",
      buttonText: "Learn more"
    },
    {
      title: "Design patent",
      description: "Prevent others from using your unique product design without your permission.",
      buttonText: "Learn more"
    }
  ];

  const secondSectionServices = [
    {
      title: "Trademark",
      description: "A name, slogan, or logo that distinguishes your product.",
      items: ["Name", "Logo", "Slogan", "Symbol", "Brand", "Mark", "Design", "Identity"],
      buttonText: "Start my trademark"
    },
    {
      title: "Copyright",
      description: "Keep your original creative work from being used without your consent.",
      items: ["Books", "Articles", "Songs", "Films", "Photos", "Art", "Software", "and more"],
      buttonText: "Start my copyright"
    },
    {
      title: "Patent",
      description: "Protects how your invention works, or the way your product looks.",
      items: ["Utility", "Design", "Provisional", "Plant", "Inventions", "Processes", "Machines", "Improvements"],
      buttonText: "Start my patent"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* First Section */}
      <div className="section">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Protect Your <span className="text-[#ea6a61]">Intellectual</span> Property
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Secure your innovations with professional IP protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-none mx-auto px-4">
            {firstSectionServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-auto w-full"
              >
                <CardContainer className="inter-var w-full h-full">
                  <CardBody className="bg-white relative group/card border-gray-200 w-full h-full rounded-xl p-6 border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <CardItem translateZ="50" className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 leading-tight">
                          {service.title}
                        </h3>
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
      </div>

      {/* Second Section */}
      <div className="section bg-gray-50">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Get the right <span className="text-[#ea6a61]">intellectual</span> property protection
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the protection that fits your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {secondSectionServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-96 w-full"
              >
                <CardContainer className="inter-var w-full h-full">
                  <CardBody className="bg-white relative group/card border-gray-200 w-full h-full rounded-xl p-6 border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <CardItem translateZ="50" className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </CardItem>
                    
                    <CardItem translateZ="40" as="p" className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </CardItem>
                    
                    {service.items?.length > 0 && (
                      <CardItem translateZ="30" className="mb-6">
                        <div className="grid grid-cols-3 gap-2">
                          {service.items.map((item, idx) => (
                            <div key={idx} className="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded">
                              {item}
                            </div>
                          ))}
                        </div>
                      </CardItem>
                    )}
                    
                    <CardItem translateZ="80" className="w-full mt-auto">
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
      </div>
      
      <Footer />
    </div>
  );
}