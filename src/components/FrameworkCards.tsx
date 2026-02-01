"use client";

import { motion } from "framer-motion";

const frameworks = [
  {
    title: "OKRs & Strategy Execution",
    description:
      "Objective and key results frameworks that align organizational ambition with measurable outcomes, driving accountability and transparency across functions.",
  },
  {
    title: "ESG Integration",
    description:
      "Environmental, Social, and Governance standards embedded into decision-making—board-level committees, integrated reporting, and risk assessment beyond financials.",
  },
  {
    title: "Triple Bottom Line",
    description:
      "People, Planet, Profit: balancing social responsibility, environmental stewardship, and financial performance for multi-dimensional organizational success.",
  },
  {
    title: "Risk-Adjusted ROI",
    description:
      "Strategic capital allocation that factors long-term resilience, stakeholder impact, and systemic risk into investment decisions.",
  },
  {
    title: "Market Research Intelligence",
    description:
      "Systematic collection and application of market conditions, competitive landscape, and customer insights to inform strategic and tactical decisions.",
  },
  {
    title: "Strategy Execution Frameworks",
    description:
      "Hoshin Kanri, value stream mapping, and cross-functional alignment to translate vision into operational excellence.",
  },
  {
    title: "Sustainable Economics",
    description:
      "Value creation that maintains or enhances natural, social, and human capital—ensuring today&apos;s growth does not compromise future generations.",
  },
  {
    title: "Responsible Capital Allocation",
    description:
      "Investment decisions aligned with long-term strategic goals, stakeholder outcomes, and ethical governance principles.",
  },
];

export function FrameworkCards() {
  return (
    <section
      id="frameworks"
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
            Enabling Mechanisms
          </p>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-light text-light mb-4 sm:mb-6">
            Leadership Mechanisms & Business Frameworks
          </h2>
          <p className="text-light/80 text-base sm:text-lg max-w-2xl mx-auto">
            Mechanisms that enable thriving and resilient organizations
            worldwide—from operational excellence to stakeholder capitalism.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {frameworks.map((framework, i) => (
            <motion.div
              key={framework.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-sm p-5 sm:p-6 hover:border-gold/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <span className="text-gold font-semibold text-lg">{i + 1}</span>
              </div>
              <h3 className="text-light text-lg font-medium mb-3">
                {framework.title}
              </h3>
              <p className="text-light/70 text-sm leading-relaxed">
                {framework.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
