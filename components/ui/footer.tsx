"use client";
import { motion } from "motion/react";
import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': any;
    }
  }
}

export function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <footer className="bg-white text-black py-6 relative z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <lord-icon
                src="https://cdn.lordicon.com/icons/system/regular/57-email.json"
                trigger="hover"
                colors="primary:#ea6a61,secondary:#d85a51"
                style={{ width: '24px', height: '24px' }}
              />
              <h3 className="text-lg font-semibold">
                Get helpful tips!
              </h3>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="name@email.com"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-md transition-colors" style={{ backgroundColor: '#ea6a61' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#d85a51'} onMouseLeave={(e) => e.target.style.backgroundColor = '#ea6a61'}
              >
                Subscribe
              </motion.button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="hover:text-gray-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="hover:text-gray-600 transition-colors">Customer Care</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Speak with attorney</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-black">
          <p>&copy; 2024 LegalZoom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}