"use client";
import { motion } from "motion/react";
import { LayoutTextFlip } from "./layout-text-flip";
import { Button } from "./moving-border";

export function AttorneySection() {
  return (
    <div className="mx-auto max-w-7xl py-20 px-6">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >
          <LayoutTextFlip
            text="Attorneys with you,"
            words={["every step", "every decision", "every challenge", "every milestone"]}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Vetted attorneys, no hourly charges.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <Button
            borderRadius="0.5rem"
            className="bg-black text-white font-medium px-8 py-4 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 hover:-translate-y-2 active:scale-95 active:translate-y-0 active:shadow-lg transition-all duration-200"
            containerClassName="w-auto h-auto"
            as="a"
            href="#"
          >
            Get legal help
          </Button>
          <Button
            borderRadius="0.5rem"
            className="bg-black text-white font-medium px-8 py-4 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 hover:-translate-y-2 active:scale-95 active:translate-y-0 active:shadow-lg transition-all duration-200"
            containerClassName="w-auto h-auto"
            as="a"
            href="#"
          >
            Legal plan
          </Button>
          <Button
            borderRadius="0.5rem"
            className="bg-black text-white font-medium px-8 py-4 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 hover:-translate-y-2 active:scale-95 active:translate-y-0 active:shadow-lg transition-all duration-200"
            containerClassName="w-auto h-auto"
            as="a"
            href="#"
          >
            Schedule a call
          </Button>
          <Button
            borderRadius="0.5rem"
            className="bg-black text-white font-medium px-8 py-4 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 hover:-translate-y-2 active:scale-95 active:translate-y-0 active:shadow-lg transition-all duration-200"
            containerClassName="w-auto h-auto"
            as="a"
            href="#"
          >
            Attorney directory
          </Button>
        </motion.div>
      </div>
    </div>
  );
}