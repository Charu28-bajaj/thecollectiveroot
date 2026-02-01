"use client";

import { motion } from "framer-motion";

const impacts = [
  {
    metric: "Revenue Growth",
    description: "Strategic market research and data-driven decision frameworks driving measurable top-line expansion.",
  },
  {
    metric: "Efficiency Gains",
    description: "Operational excellence initiatives—waste elimination, process standardization, and continuous improvement.",
  },
  {
    metric: "Employee Engagement",
    description: "Empathetic leadership fostering psychological safety, collaboration, and higher retention.",
  },
  {
    metric: "Client Success",
    description: "Enterprise-level engagements with global clients—market intelligence, strategy, and execution support.",
  },
  {
    metric: "Sustainability Initiatives",
    description: "ESG integration, decarbonization planning, and responsible supply chain development.",
  },
  {
    metric: "Organizational Transformation",
    description: "Cross-functional alignment, systems thinking, and stakeholder-centric governance models.",
  },
];

export function ImpactSection() {
  return (
    <section
      id="impact"
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
            Measurable Outcomes
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-light mb-4 sm:mb-6">
            Impact & Outcomes
          </h2>
          <p className="text-light/80 text-base sm:text-lg max-w-2xl mx-auto">
            Impact highlights across revenue, efficiency, engagement, and
            sustainability—presented as organizational transformation.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {impacts.map((item, i) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="glass-card rounded-sm p-6 sm:p-8 h-full hover:border-gold/20 transition-colors duration-300">
                <span className="text-gold text-sm font-medium tracking-wider uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-light text-xl sm:text-2xl font-light mt-4 mb-3 sm:mb-4">
                  {item.metric}
                </h3>
                <p className="text-light/70 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
