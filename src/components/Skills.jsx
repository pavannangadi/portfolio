"use client"

import { motion } from "framer-motion"

const SKILLS = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "C"] },
  { category: "Frontend", items: ["React.js","HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "MySQL"] },
  { category: "AI", items: ["AI/ML", "FLAN-T5", "Rasa"] },
  { category: "Tools", items: ["Git", "Docker"] },
  { category: "Other", items: ["DSA", "System Design","StreamLit"] },
]

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="p-3 text-center text-sm border-b border-[var(--accent-secondary)]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: index * 0.03 }}
  >
    <p className="text-[var(--text-primary)] font-light">{skill}</p>
  </motion.div>
)

export default function Skills() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">Skills & Expertise</h2>
          <p className="text-[var(--text-secondary)] text-base font-light max-w-2xl">
            A comprehensive toolkit for building modern web experiences and AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SKILLS.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              <h3 className="text-sm uppercase tracking-widest font-medium text-[var(--text-primary)] mb-8 border-b border-[var(--accent-primary)] pb-3">
                {skillGroup.category}
              </h3>
              <div className="space-y-0">
                {skillGroup.items.map((skill, index) => (
                  <SkillCard key={skill} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
