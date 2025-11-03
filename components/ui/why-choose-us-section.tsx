"use client";
import { motion } from "motion/react";

import { LayoutTextFlip } from "./layout-text-flip";
import { cn } from "@/lib/utils";
import { CardContainer, CardBody, CardItem } from "./3d-card";


export function WhyChooseUsSection() {
  const features = [
    {
      title: "We do right by you",
      description: "60-day money-back guarantee."
    },
    {
      title: "All 50 states covered",
      description: "Legally recognized nationwide."
    },
    {
      title: "Flat-rate fees",
      description: "No surprises. Really."
    }
  ];

  return (
    <div className="section bg-white relative overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-xl"
        >
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <LayoutTextFlip
              text="We help you"
              words={["succeed", "grow", "thrive", "win"]}
            />
          </div>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-linear-to-br from-gray-900 to-black relative group/card border-gray-700 w-80 h-auto rounded-xl p-8 border border-l-4 border-l-[#ea6a61] shadow-2xl shadow-black/50">
                  <CardItem translateZ="100" className="text-center mb-4">
                    <h3 className="heading-sm text-white">
                      {feature.title}
                    </h3>
                  </CardItem>
                  <CardItem translateZ="80" as="p" className="text-base text-white text-center">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}