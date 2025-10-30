"use client";
import { motion } from "motion/react";
import { LayoutTextFlip } from "./layout-text-flip";


export function AttorneySection() {
  return (
    <div className="section-sm">
      <div className="text-center container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" flex flex-col items-center justify-center gap-md text-center sm:flex-row"
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
          className="text-lg text-gray-600 mb-xl container-md leading-relaxed p-5 pb-8"
        >
          Vetted attorneys, no hourly charges.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-md justify-center items-center"
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