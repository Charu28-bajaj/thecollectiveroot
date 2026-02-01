"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Collaboration over Competition",
    description:
      "Fostering partnerships and collective progress—global cooperation as the path to sustainable development.",
  },
  {
    title: "Inclusion",
    description:
      "Actively seeking diverse perspectives, fostering belonging, and ensuring every voice contributes to organizational success.",
  },
  {
    title: "Shared Prosperity",
    description:
      "Economic advancement that benefits all segments of society—especially marginalized and underrepresented groups.",
  },
  {
    title: "Cross-Functional Harmony",
    description:
      "Strategic coordination across departments with shared goals and accountability—eliminating internal friction.",
  },
  {
    title: "Thrive Not Survive Economy",
    description:
      "Organizations designed for long-term resilience, human-first cultures, and sustainable value creation.",
  },
  {
    title: "Business Serving Humanity",
    description:
      "Purpose beyond profit—technology as a force for societal progress, leadership as stewardship of future generations.",
  },
];

export function Culture() {
  return (
    <section
      id="culture"
      className="py-16 sm:py-24 md:py-32 bg-secondary/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-accent-gold tracking-[0.2em] uppercase text-sm font-medium mb-4">
            Organizational Vision
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-light mb-4 sm:mb-6">
            Culture & Unity
          </h2>
          <p className="text-light/80 text-base sm:text-lg max-w-2xl mx-auto">
            A culture that unites humanity rather than divides it—rooted in
            inclusive growth, human-first organizations, and shared prosperity.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-sm p-6 sm:p-8 hover:border-gold/20 transition-colors duration-300"
            >
              <h3 className="text-gold text-lg sm:text-xl font-medium mb-3 sm:mb-4">
                {principle.title}
              </h3>
              <p className="text-light/80 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
