import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
  Play,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F5EBDD] text-[#333333] px-6 py-10 mt-1">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Dnalyst</h3>
          <p className="flex items-start gap-2">
            <MapPin size={16} />
            Yenepoya Technology Incubator, Deralakatte, Mangalore, 575020
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Phone size={16} /> +91 98765 43210
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Mail size={16} /> wellness@molys.in
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Clock size={16} /> Open 24 hours
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/privacy"
                className="hover:text-[#CC5500] transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-[#CC5500] transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/customer"
                className="hover:text-[#CC5500] transition-colors"
              >
                Customer Support
              </a>
            </li>
            <li>
              <a
                href="/enquiry"
                className="hover:text-[#CC5500] transition-colors"
              >
                Enquiry Form
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="hover:text-[#CC5500] transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/shipping"
                className="hover:text-[#CC5500] transition-colors"
              >
                Shipping Info
              </a>
            </li>
            <li>
              <a
                href="/returns"
                className="hover:text-[#CC5500] transition-colors"
              >
                Returns & Refunds
              </a>
            </li>
            <li>
              <a
                href="/track"
                className="hover:text-[#CC5500] transition-colors"
              >
                Track Order
              </a>
            </li>
          </ul>
        </div> */}

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <div className="p-2 rounded-full bg-gray-100 hover:bg-[#CC5500] hover:text-white transition-colors">
                <Facebook size={20} />
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <div className="p-2 rounded-full bg-gray-100 hover:bg-[#CC5500] hover:text-white transition-colors">
                <Instagram size={20} />
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <div className="p-2 rounded-full bg-gray-100 hover:bg-[#CC5500] hover:text-white transition-colors">
                <Twitter size={20} />
              </div>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-2 rounded-full bg-gray-100 hover:bg-[#CC5500] hover:text-white transition-colors">
                <Play size={20} />
                <span className="sr-only">YouTube</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-[#CC5500]">
        &copy; {new Date().getFullYear()} Dnalyst. All rights reserved.
      </div>
    </footer>
  );
}
