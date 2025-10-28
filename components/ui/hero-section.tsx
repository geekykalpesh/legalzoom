"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FlipWords } from "./flip-words";
import { AnimatedShinyText } from "./animated-shiny-text";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import { SparklesCore } from "./sparkles";
import { Button } from "./moving-border";
import { Ripple } from "./ripple";

export function HeroSection() {
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
      
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full border-[64px] border-black opacity-15 z-2 animate-spin" style={{animationDuration: '20s'}}></div>
      
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full border-[64px] border-black opacity-15 z-2 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      
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
              <FlipWords words={["United Arab Emirates", "Dubai", "Abu Dhabi", "Middle East"]} className="text-6xl md:text-7xl font-extrabold" style={{color: '#ea6a61'}} />
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
            <Button
              borderRadius="0.5rem"
              className="bg-black text-white font-medium px-8 py-4 hover:scale-105 hover:-translate-y-2 active:scale-95 active:translate-y-0 active:shadow-lg transition-all duration-200"
              containerClassName="w-auto h-auto"
              as="a"
              href="#"
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = '#ea6a61';
                (e.target as HTMLAnchorElement).style.boxShadow = '0 25px 50px -12px rgba(234, 106, 97, 0.5)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = 'black';
                (e.target as HTMLAnchorElement).style.boxShadow = '';
              }}
            >
              Business Formation
            </Button>
            <Button
              borderRadius="0.5rem"
              className="bg-black text-white font-medium px-8 py-4 hover:scale-105 hover:-translate-y-2 active:scale-95 active:translate-y-0 active:shadow-lg transition-all duration-200"
              containerClassName="w-auto h-auto"
              as="a"
              href="#"
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = '#ea6a61';
                (e.target as HTMLAnchorElement).style.boxShadow = '0 25px 50px -12px rgba(234, 106, 97, 0.5)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = 'black';
                (e.target as HTMLAnchorElement).style.boxShadow = '';
              }}
            >
              Wills & Trusts
            </Button>
            <Button
              borderRadius="0.5rem"
              className="bg-black text-white font-medium px-8 py-4 hover:scale-105 hover:-translate-y-2 active:scale-95 active:translate-y-0 active:shadow-lg transition-all duration-200"
              containerClassName="w-auto h-auto"
              as="a"
              href="#"
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = '#ea6a61';
                (e.target as HTMLAnchorElement).style.boxShadow = '0 25px 50px -12px rgba(234, 106, 97, 0.5)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = 'black';
                (e.target as HTMLAnchorElement).style.boxShadow = '';
              }}
            >
              Intellectual Property
            </Button>
          </motion.div>
        </div>
      </main>
    </BackgroundBeamsWithCollision>
  );
}