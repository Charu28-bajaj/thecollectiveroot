"use client";

import { motion } from "framer-motion";

const quotes = [
  "Leadership that unites industries and humanity—not divides them.",
  "Sustainable economies through technology, responsibility, and long-term thinking.",
  "Organizations that thrive—not merely survive.",
  "Working toward the long-term development of human civilization through responsible and ethical business.",
  "Stewardship over extraction. Building enduring institutions for future generations.",
  "Empathetic leadership fosters trust, engagement, and resilience.",
  "Systems thinking enables comprehensive solutions beyond isolated events.",
  "Stakeholder capitalism balances people, planet, and profit.",
];

export function QuoteBlock() {
  return (
    <section
      id="principles"
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
            Guiding Principles
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-light">
            Quotes & Principles
          </h2>
        </motion.div>
        <div className="space-y-8 sm:space-y-12">
          {quotes.map((quote, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center"
            >
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-light/95 leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
