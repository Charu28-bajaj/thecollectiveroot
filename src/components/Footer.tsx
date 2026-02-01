"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Culture", href: "#culture" },
  { label: "Principles", href: "#principles" },
];

export function Footer() {
  return (
    <footer id="contact" className="py-16 sm:py-20 md:py-24 bg-secondary/85 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8 sm:space-y-12"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-light mb-4">
              The collective root
            </h2>
            <p className="text-accent-gold text-sm tracking-[0.3em] uppercase">
              Leadership that Unites
            </p>
          </div>
          <p className="text-light/80 text-base sm:text-xl max-w-2xl mx-auto font-light">
            Developing human civilization through responsible leadership.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-light/70 hover:text-gold transition-colors duration-300 inline-block py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex justify-center gap-6 sm:gap-8 pt-6 sm:pt-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light/70 hover:text-gold transition-colors duration-300 p-2 -m-2 touch-target flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@collectiveroot.com"
              className="text-light/70 hover:text-gold transition-colors duration-300 p-2 -m-2 touch-target flex items-center justify-center"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-light/50 text-sm pt-8">
            © {new Date().getFullYear()} The collective root. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
