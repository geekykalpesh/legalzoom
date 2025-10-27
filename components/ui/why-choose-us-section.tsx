"use client";
import { motion } from "motion/react";
import { CheckCircle, Shield, MapPin } from "lucide-react";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "We do right by you",
      description: "60-day money-back guarantee."
    },
    {
      icon: MapPin,
      title: "All 50 states covered",
      description: "Legally recognized nationwide."
    },
    {
      icon: Shield,
      title: "Flat-rate fees",
      description: "No surprises. Really."
    }
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why choose us
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6"
                >
                  <Icon className="w-8 h-8 text-orange-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}