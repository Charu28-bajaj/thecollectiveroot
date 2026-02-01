"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Unity Leadership",
    description:
      "Leadership that bridges industries, geographies, and stakeholders—fostering collaboration over competition and shared prosperity over siloed gain.",
  },
  {
    title: "Empathy-Led Decision Making",
    description:
      "Understanding the emotions, motivations, and perspectives of employees, customers, and stakeholders to build trust, psychological safety, and high-performing teams.",
  },
  {
    title: "Systems Thinking",
    description:
      "A holistic approach examining how organizational parts interact and create emergent behaviors—enabling long-term, comprehensive solutions beyond isolated events.",
  },
  {
    title: "Collaborative Governance",
    description:
      "Stakeholder capitalism in practice: creating value for employees, customers, suppliers, communities, and the environment alongside shareholders.",
  },
  {
    title: "Stakeholder Alignment",
    description:
      "Strategic coordination across functions with shared accountability—eliminating silos and optimizing for organizational success.",
  },
  {
    title: "Ethical Growth",
    description:
      "Stewardship over extraction: building enduring institutions, preserving resources, and advancing long-term civilization through responsible business.",
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
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
            Foundational Beliefs
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-light mb-4 sm:mb-6">
            Leadership Philosophy
          </h2>
          <p className="text-light/80 text-base sm:text-lg max-w-2xl mx-auto">
            A globally relevant, future-focused approach to leadership that
            integrates understanding, compassion, and responsiveness into daily
            management—building environments of psychological safety,
            collaboration, and high performance.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-sm p-6 sm:p-8 hover:border-gold/20 transition-colors duration-300"
            >
              <h3 className="text-gold text-lg sm:text-xl font-medium mb-3 sm:mb-4">
                {pillar.title}
              </h3>
              <p className="text-light/80 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
