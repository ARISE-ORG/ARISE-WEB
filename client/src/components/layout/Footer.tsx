import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-neon-cyan/20 backdrop-blur-custom">
      <div className="container-custom z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black neon-glow mb-4">ARISE</h3>
            <p className="text-slate-400">Lock in. Gain more. No excuses.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-neon-cyan transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-cyan transition">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-cyan transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-neon-cyan transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-cyan transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-cyan transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Follow</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-neon-cyan transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-cyan transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-cyan transition">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neon-cyan/10 pt-8 text-center text-slate-500">
          <p>
            © {currentYear} ARISE. All rights reserved. | Made with 💪 for gym
            bros
          </p>
        </div>
      </div>
    </footer>
  );
};
