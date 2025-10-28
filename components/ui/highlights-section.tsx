"use client";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { BackgroundBeams } from "./background-beams";


function AnimatedNumber({ finalNumber }: { finalNumber: string }) {
  const [displayNumber, setDisplayNumber] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    const match = finalNumber.match(/([0-9.]+)(.*)/);
    if (!match) return;
    
    const targetValue = parseFloat(match[1]);
    const suffix = match[2];
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / 2000, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * targetValue;
      
      if (progress < 1) {
        setDisplayNumber(currentValue.toFixed(1) + suffix);
        requestAnimationFrame(animate);
      } else {
        setDisplayNumber(finalNumber);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, finalNumber]);

  return <span ref={ref}>{displayNumber}</span>;
}

export function HighlightsSection() {
  const highlights = [
    {
      number: "3.5M+",
      title: "Estate Planning Docs",
      description: "Protecting families with trusted legal documents."
    },
    {
      number: "4M+",
      title: "Businesses Formed",
      description: "Helping entrepreneurs launch successful ventures."
    },
    {
      number: "20+",
      title: "Years of Excellence",
      description: "Leading the industry with affordable legal solutions."
    }
  ];

  return (
    <div className="relative bg-neutral-950 rounded-md overflow-hidden">
     
      <div className="mx-auto max-w-7xl py-20 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-4">
            Proven Track Record
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-4" style={{ color: '#ea6a61' }}>
                <AnimatedNumber finalNumber={highlight.number} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-neutral-400">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}