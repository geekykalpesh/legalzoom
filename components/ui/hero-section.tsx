"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FlipWords } from "./flip-words";
import { AnimatedShinyText } from "./animated-shiny-text";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import { SparklesCore } from "./sparkles";
import { useRouter } from "next/navigation";
import { Ripple } from "./ripple";
import { CardContainer, CardBody, CardItem } from "./3d-card";

export function HeroSection() {
  const router = useRouter();

  return (
    <BackgroundBeamsWithCollision className="min-h-screen w-full">
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="absolute inset-0 z-1">
        <Ripple />
      </div>
      
      <div className="absolute bottom-10 left-10 z-2">
        <Ripple />
      </div>
      
      <div className="absolute bottom-10 right-10 z-2">
        <Ripple />
      </div>
      
      <div className="absolute inset-0 z-5 opacity-45">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#ea6a61"
          speed={2}
        />
      </div>
      
      <main className="relative z-30 flex w-full flex-col items-center justify-start px-6 -mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <div className="inline-block border border-gray-300 rounded-full px-4 py-2">
              <AnimatedShinyText className="text-sm font-medium text-gray-500">
                ✨ Trusted Legal Expertise
              </AnimatedShinyText>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              U.S. Legal Help in
              <FlipWords words={["United Arab Emirates", "Dubai", "Abu Dhabi", "Middle East"]} className="text-6xl md:text-7xl font-extrabold text-center" style={{color: '#ea6a61'}} />
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto"
          >
            Professional legal services for your business and personal needs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button onClick={() => router.push('/business/business-formation')}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">
                Business Formation
              </span>
            </button>
            <button onClick={() => router.push('/personal/estate-planning/estate-planning-bundle')}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">Wills & Trusts</span>
            </button>
            <button onClick={() => router.push('/business/intellectual-property')}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">Intellectual Property</span>
            </button>
          </motion.div>
        </div>
      </main>
    </BackgroundBeamsWithCollision>
  );
}