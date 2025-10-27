"use client";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Get helpful tips!
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="name@email.com"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 px-6 py-2 rounded-md hover:bg-orange-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Customer Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Speak with attorney</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 LegalZoom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}