"use client";
import { motion } from "motion/react";
import { LayoutTextFlip } from "./layout-text-flip";


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
          <button>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">Get legal help</span>
          </button>
          <button>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">Legal plan</span>
          </button>
          <button>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">Schedule a call</span>
          </button>
          <button>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">Attorney directory</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}