"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-secondary/60 to-primary/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5 sm:space-y-8"
        >
          <p className="text-accent-gold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm font-medium">
            The collective root
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-light leading-tight">
            Leadership that{" "}
            <span className="text-gold font-normal">Unites</span>
            <br />
            Industries and Humanity
          </h1>
          <p className="text-light/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light px-1">
            A global perspective on business, sustainability, and human
            progress.
          </p>
          <motion.a
            href="#philosophy"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 border border-gold/50 text-gold hover:bg-gold/10 transition-all duration-300 rounded-sm tracking-wider text-sm uppercase font-medium touch-target"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Philosophy
          </motion.a>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border border-gold/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold/50 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
