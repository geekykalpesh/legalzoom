"use client";
import { motion } from "motion/react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Footer } from "@/components/ui/footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useState } from "react";

export default function EstatePlanningBundlePage() {
  const [selectedTab, setSelectedTab] = useState("individual");

  const willPlans = [
    {
      title: "Pro Will",
      price: "$149",
      buttonText: "Start my will",
      features: [
        "Last will & testament",
        "Healthcare directive",
        "Power of attorney",
        "30 days attorney consultations",
        "Document storage"
      ]
    },
    {
      title: "Premium Will",
      price: "$299",
      buttonText: "Start my will",
      features: [
        "Last will & testament",
        "Healthcare directive",
        "Power of attorney",
        "1 year attorney consultations",
        "Document storage",
        "10% off products",
        "Annual estate review"
      ]
    }
  ];

  const trustPlans = [
    {
      title: "Basic Trust",
      price: "$399",
      buttonText: "Start my trust",
      features: [
        "Living trust",
        "Pour-over will",
        "Healthcare directive",
        "Power of attorney",
        "Document storage"
      ]
    },
    {
      title: "Premium Trust",
      price: "$549",
      buttonText: "Start my trust",
      features: [
        "Living trust",
        "Pour-over will",
        "Healthcare directive",
        "Power of attorney",
        "1 year attorney consultations",
        "Document storage",
        "10% off products",
        "Annual estate review"
      ]
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
              words="Estate plans at affordable prices"
              className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8"
            />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Create your will or trust online with professional legal assistance.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setSelectedTab("individual")}
                className={`px-8 py-3 rounded-md font-semibold transition-colors ${
                  selectedTab === "individual"
                    ? "bg-white text-[#ea6a61] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setSelectedTab("couple")}
                className={`px-8 py-3 rounded-md font-semibold transition-colors ${
                  selectedTab === "couple"
                    ? "bg-white text-[#ea6a61] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Couple
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-lg p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose a will</h2>
                <p className="text-lg text-gray-600">Make a plan for your children and assets for the future</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {willPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-96 w-full"
                  >
                    <CardContainer className="inter-var w-full h-full">
                      <CardBody className="bg-white relative group/card border-gray-200 w-full h-full rounded-xl p-6 border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                        <CardItem translateZ="50" className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
                          <p className="text-3xl font-bold text-[#ea6a61] mt-2">{plan.price}</p>
                        </CardItem>
                        
                        <CardItem translateZ="80" className="w-full mb-4">
                          <button className="w-full">
                            <span className="shadow"></span>
                            <span className="edge"></span>
                            <span className="front text-sm">{plan.buttonText}</span>
                          </button>
                        </CardItem>
                        
                        <CardItem translateZ="40" className="mb-4">
                          <ul className="space-y-1">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="text-xs text-gray-600 flex items-start">
                                <span className="text-[#ea6a61] mr-2">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-lg p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose a trust</h2>
                <p className="text-lg text-gray-600">Get all the protection of a will and avoid probate court</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trustPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-96 w-full"
                  >
                    <CardContainer className="inter-var w-full h-full">
                      <CardBody className="bg-white relative group/card border-gray-200 w-full h-full rounded-xl p-6 border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                        <CardItem translateZ="50" className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
                          <p className="text-3xl font-bold text-[#ea6a61] mt-2">{plan.price}</p>
                        </CardItem>
                        
                        <CardItem translateZ="80" className="w-full mb-4">
                          <button className="w-full">
                            <span className="shadow"></span>
                            <span className="edge"></span>
                            <span className="front text-sm">{plan.buttonText}</span>
                          </button>
                        </CardItem>
                        
                        <CardItem translateZ="40" className="mb-4">
                          <ul className="space-y-1">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="text-xs text-gray-600 flex items-start">
                                <span className="text-[#ea6a61] mr-2">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}