"use client";
import { motion } from "motion/react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Footer } from "@/components/ui/footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import LightRays from "@/components/ui/light-rays";

export default function AttorneysPage() {
  const businessFeatures = [
    "Unlimited 30-minute attorney consults on new legal matters†",
    "Attorney review for contracts and key documents (10 pages included)‡",
    "One-hour annual consultation to keep your business on track",
    "Library of 150+ frequently used business and personal legal templates",
    "Rich editor to customize our LegalZoom forms",
    "Unlimited access to eSignature",
    "One copyright registration per month§",
    "Get 10% off filings, trademarks, and other LegalZoom services",
    "25% off additional attorney services through our attorney network"
  ];

  const personalFeatures = [
    "Unlimited 30-minute attorney consults on personal legal matters",
    "Document review for personal contracts and agreements",
    "Estate planning consultation and guidance",
    "Access to personal legal document templates",
    "Priority customer support"
  ];

  const whyChooseUs = [
    {
      title: "Experienced Attorneys",
      description: "Work with vetted legal professionals across all practice areas."
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Know exactly what you'll pay."
    },
    {
      title: "24/7 Support",
      description: "Get help when you need it with our round-the-clock support team."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="container-xl pt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Attorney Plans
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Business Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CardContainer className="inter-var w-full h-full">
                <CardBody className="bg-gradient-to-br from-white via-gray-50 to-white relative group/card border-[#ea6a61]/30 w-full h-auto rounded-3xl p-8 border-2 hover:border-[#ea6a61] transition-all duration-500 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(234,106,97,0.25)] transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ea6a61]/5 via-transparent to-[#ff8a80]/5 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardItem translateZ="100" className="text-center mb-4 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ea6a61] via-[#ff8a80] to-[#ea6a61] rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg transform rotate-3 group-hover/card:rotate-6 transition-transform duration-300">
                      <span className="text-white text-3xl font-bold drop-shadow-lg">B</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                      Business Plan
                    </h3>
                    <div className="text-base text-gray-600 mb-4 font-medium">Perfect for growing businesses</div>
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="text-xl text-gray-400 line-through font-medium">$43.17</span>
                      <span className="text-4xl font-bold text-[#ea6a61] tracking-tight">$39.09</span>
                    </div>
                    <div className="bg-gradient-to-r from-[#ea6a61] to-[#ff8a80] text-white text-sm px-4 py-2 rounded-full inline-block mb-4 font-bold shadow-lg">
                      SAVE 10%
                    </div>
                    <div className="text-sm text-gray-500 font-medium">/mo billed annually</div>
                  </CardItem>
                  
                  <CardItem translateZ="80" className="w-full mb-4 relative z-10">
                    <button className="w-full">
                      <span className="shadow"></span>
                      <span className="edge"></span>
                      <span className="front">Get Started Now</span>
                    </button>
                  </CardItem>
                  
                  <CardItem translateZ="60" className="relative z-10">
                    <ul className="space-y-3">
                      {businessFeatures.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-base text-gray-700 flex items-start font-medium">
                          <span className="text-[#ea6a61] mr-4 mt-1 text-xl font-bold">✓</span>
                          <span className="flex-1 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            {/* Personal Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <CardContainer className="inter-var w-full h-full">
                <CardBody className="bg-gradient-to-br from-white via-gray-50 to-white relative group/card border-[#ea6a61]/30 w-full h-auto rounded-3xl p-8 border-2 hover:border-[#ea6a61] transition-all duration-500 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(234,106,97,0.25)] transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff8a80]/5 via-transparent to-[#ea6a61]/5 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardItem translateZ="100" className="text-center mb-4 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ff8a80] via-[#ea6a61] to-[#d55a51] rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg transform -rotate-3 group-hover/card:-rotate-6 transition-transform duration-300">
                      <span className="text-white text-3xl font-bold drop-shadow-lg">P</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                      Personal Plan
                    </h3>
                    <div className="text-base text-gray-600 mb-4 font-medium">Ideal for individuals</div>
                    <div className="text-4xl font-bold text-[#ea6a61] mb-4 tracking-tight">$43.17</div>
                    <div className="text-sm text-gray-500 font-medium">/mo billed every 6 months</div>
                  </CardItem>
                  
                  <CardItem translateZ="80" className="w-full mb-4 relative z-10">
                    <button className="w-full">
                      <span className="shadow"></span>
                      <span className="edge"></span>
                      <span className="front">Get Started Now</span>
                    </button>
                  </CardItem>
                  
                  <CardItem translateZ="60" className="relative z-10">
                    <ul className="space-y-3">
                      {personalFeatures.map((feature, idx) => (
                        <li key={idx} className="text-base text-gray-700 flex items-start font-medium">
                          <span className="text-[#ea6a61] mr-4 mt-1 text-xl font-bold">✓</span>
                          <span className="flex-1 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
        </div>
      </div>
      
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}