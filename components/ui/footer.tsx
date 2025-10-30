"use client";

export function Footer() {
  return (
    <footer className="bg-white text-black py-12 relative z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Customer Care</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Speak with an attorney</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Order status</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Join attorney network</a></li>
            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h4 className="font-semibold mb-4">Legal Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">What is an LLC?</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">How to Start an LLC?</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Business Formation</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Trademark Search</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Legal Templates</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Business Name Generator</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">What is a DBA?</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Registered Agent</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Small Business Ideas</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Legal Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-300 pt-8">
          <p className="text-sm mb-4">&copy; 2024 LegalZoom. All rights reserved.</p>
          <p className="text-xs text-gray-600">
            LegalZoom provides access to independent attorneys and self-service tools. Use of our services is governed by our Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    </footer>
  );
}