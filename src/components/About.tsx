"use client";

import { motion } from "framer-motion";

const highlights = [
  "Nearly a decade of experience in market research and strategy",
  "BTech and MBA credentials",
  "Global client experience including Google",
  "Expertise in business intelligence, decision science, and growth strategy",
  "Multinational market exposure and cross-cultural collaboration",
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-secondary/70 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 sm:space-y-12"
        >
          <div>
            <p className="text-accent-gold tracking-[0.2em] uppercase text-sm font-medium mb-4">
              Professional Profile
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-light">
              About Ritu Bhargava
            </h2>
          </div>
          <p className="text-light/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
            Ritu Bhargava brings nearly a decade of strategic market
            research and business intelligence expertise to global enterprises.
            With a foundation in engineering (BTech) and management (MBA), she has
            advised leading organizations—including Fortune 500 clients such as
            Google—on market dynamics, growth strategy, and data-driven decision
            frameworks.
          </p>
          <p className="text-light/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            Her work spans business intelligence, decision science, and growth
            strategy across multinational markets, with a distinctive focus on
            cross-functional alignment, stakeholder capitalism, and sustainable
            value creation. She champions empathetic leadership, systems
            thinking, and responsible innovation as cornerstones of
            organizational resilience and long-term human progress.
          </p>
          <ul className="space-y-4 pt-4">
            {highlights.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-light/85"
              >
                <span className="text-gold mt-1.5">—</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
