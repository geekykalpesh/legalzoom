"use client";
import { motion } from "motion/react";
import { PointerHighlight } from "./pointer-highlight";
import { LayoutTextFlip } from "./layout-text-flip";

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
    <div className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full border-[64px] border-[#ea6a61] opacity-15 z-0 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full border-[64px] border-[#ea6a61] opacity-15 z-0 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <LayoutTextFlip
              text="We help you"
              words={["succeed", "grow", "thrive", "win"]}
            />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}