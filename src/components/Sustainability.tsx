"use client";

import { motion } from "framer-motion";

const commitments = [
  {
    title: "Carbon Footprint Reduction",
    description:
      "Electrification, green procurement, and energy efficiency across operations—addressing regulatory pressure, investor mandates, and climate ethics.",
  },
  {
    title: "Decarbonization Strategy",
    description:
      "Systematic reduction of emissions across operations, supply chains, and products—aligned with science-based targets and planetary boundaries.",
  },
  {
    title: "Net-Zero Thinking",
    description:
      "Scope 1, 2, and 3 emissions accountability—recognizing that indirect supply chain emissions often exceed 80% of total organizational footprint.",
  },
  {
    title: "Responsible Supply Chains",
    description:
      "Ethical sourcing, fair payment terms, and supplier development—ensuring resilience, quality, and positive social impact throughout the value chain.",
  },
  {
    title: "Climate-Conscious Leadership",
    description:
      "Emissions auditing, third-party verification, and transparent progress reporting—taking measurable responsibility for organizational climate footprint.",
  },
  {
    title: "Technology-Enabled Sustainability",
    description:
      "Circular economy principles, regenerative materials, and renewable energy—leveraging innovation for long-term ecological and business viability.",
  },
];

export function Sustainability() {
  return (
    <section
      id="sustainability"
      className="py-16 sm:py-24 md:py-32 bg-primary/85 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-accent-gold tracking-[0.2em] uppercase text-sm font-medium mb-4">
            Moral + Strategic Responsibility
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-light mb-4 sm:mb-6">
            Sustainability & Climate Commitment
          </h2>
          <p className="text-light/80 text-base sm:text-lg max-w-2xl mx-auto">
            Climate responsibility as both ethical imperative and strategic
            advantage—reducing risk, enhancing resilience, and aligning with
            stakeholder expectations.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {commitments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-sm p-6 sm:p-8 hover:border-gold/20 transition-colors duration-300"
            >
              <h3 className="text-gold text-xl font-medium mb-4">{item.title}</h3>
              <p className="text-light/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
