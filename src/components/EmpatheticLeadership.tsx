"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Self-Awareness",
    subtitle: "Understanding Your Inner Landscape",
    description:
      "The ability to recognize and understand your own emotions, strengths, weaknesses, values, and goals, and how they impact your leadership style and team interactions.",
    techniques: [
      "Mindfulness & Reflection: Daily journaling, meditation, or quiet reflection",
      "Identify Triggers: Understand situations that provoke strong emotional responses",
      "Seek Feedback: Proactively ask peers and subordinates for honest insights",
    ],
  },
  {
    title: "Social Awareness",
    subtitle: "Reading the Room and People",
    description:
      "The capacity to understand the emotions, needs, and concerns of others—sensing emotional currents and unspoken dynamics within a group.",
    techniques: [
      "Active Listening: Give full attention, ask clarifying questions, paraphrase",
      "Observe Non-Verbal Cues: Body language, tone of voice, facial expressions",
      "Perspective-Taking: View situations from others' viewpoints",
    ],
  },
  {
    title: "Relationship Management",
    subtitle: "Building Trust and Collaboration",
    description:
      "The skill of influencing, coaching, mentoring, and resolving conflicts—building strong connections that foster open communication and teamwork.",
    techniques: [
      "Open Communication: Safe environment for ideas and concerns",
      "Conflict Resolution: Focus on underlying needs and common ground",
      "Coaching & Mentoring: Guide development with powerful questions",
      "Vulnerability: Share challenges and learning moments",
    ],
  },
  {
    title: "Responsible Decision-Making",
    subtitle: "Considering Human Impact",
    description:
      "Making choices that serve organizational goals while thoughtfully considering the well-being, feelings, and diverse perspectives of all affected individuals.",
    techniques: [
      "Stakeholder Mapping: Identify impacted groups and seek their input",
      "Ethical Consideration: Evaluate long-term human consequences",
      "Transparency: Communicate rationale behind decisions",
    ],
  },
];

export function EmpatheticLeadership() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-primary/85 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <p className="text-accent-gold tracking-[0.2em] uppercase text-sm font-medium mb-4">
            The Four Pillars
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-light mb-4 sm:mb-6">
            The Empathetic Leadership Framework
          </h2>
          <p className="text-light/80 text-base sm:text-lg max-w-3xl">
            A foundational approach that integrates understanding, compassion,
            and responsiveness into daily management—ensuring leaders foster
            environments of psychological safety, collaboration, and high
            performance.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-sm p-6 sm:p-8 hover:border-gold/20 transition-colors duration-300"
            >
              <span className="text-accent-gold text-sm font-medium tracking-wider">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-gold text-xl font-medium mt-2 mb-1">
                {pillar.title}
              </h3>
              <p className="text-light/70 text-sm mb-4">{pillar.subtitle}</p>
              <p className="text-light/85 mb-6 leading-relaxed">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.techniques.map((tech) => (
                  <li key={tech} className="text-light/70 text-sm flex gap-2">
                    <span className="text-gold/70">•</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
