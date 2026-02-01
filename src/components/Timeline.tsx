"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    period: "Education",
    title: "BTech & MBA",
    description:
      "Foundation in engineering and management—equipping analytical rigor with strategic leadership frameworks.",
  },
  {
    period: "Early Career",
    title: "Market Research Foundations",
    description:
      "Building expertise in primary and secondary research, competitive intelligence, and customer insights.",
  },
  {
    period: "Leadership",
    title: "Market Research Leadership",
    description:
      "Leading teams and engagements across multinational markets—driving data-driven strategy and growth.",
  },
  {
    period: "Enterprise",
    title: "Global & Enterprise Projects",
    description:
      "Advising Fortune 500 clients including Google—business intelligence, decision science, and growth strategy.",
  },
  {
    period: "Present",
    title: "Evolving Leadership Philosophy",
    description:
      "Integrating empathetic leadership, systems thinking, stakeholder capitalism, and sustainable value creation.",
  },
];

export function Timeline() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 md:py-32 bg-primary/85 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-accent-gold tracking-[0.2em] uppercase text-sm font-medium mb-4">
            Professional Journey
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-light">
            Experience Timeline
          </h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/20 to-transparent" />
          <div className="space-y-8 sm:space-y-12 pl-10 sm:pl-12">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-start gap-6"
              >
                <div className="absolute -left-10 sm:-left-12 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold/20 border-2 border-gold/50 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-accent-gold text-sm font-medium tracking-wider mb-2">
                    {milestone.period}
                  </p>
                  <h3 className="text-light text-lg sm:text-xl font-medium mb-2 sm:mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-light/75 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
