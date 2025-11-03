"use client"

import { motion } from "framer-motion"

const EXPERIENCES = [
  {
    title: "AIML Intern",
    company: "Infosys Springboard",
    period: "2024 - 2025",
    description:
      "Developing AI chatbot solutions using FLAN-T5, Rasa, and Streamlit. Implementing natural language processing and machine learning models for enterprise applications.",
    skills: ["Python", "FLAN-T5", "Rasa", "Streamlit", "NLP"],
  },
  // {
  //   title: "Full Stack Developer",
  //   company: "Personal Projects",
  //   period: "2023 - Present",
  //   description:
  //     "Building subscription-sharing platform (SubSplit) with Next.js, MongoDB, and Solana blockchain integration. Architecting scalable web3 applications.",
  //   skills: ["Next.js", "React", "MongoDB", "Solana", "Smart Contracts"],
  // },
  // {
  //   title: "Computer Science Student",
  //   company: "University",
  //   period: "2022 - Present",
  //   description:
  //     "Pursuing passion for Web3, AI, and full stack development. Competing in data structures and algorithms challenges.",
  //   skills: ["DSA", "AI/ML", "Web Development", "Blockchain"],
  // },
]

export default function Experience() {
  return (
    <section className="min-h-screen py-20 px-4 border-t border-[var(--accent-secondary)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">Experience</h2>
          <p className="text-[var(--text-secondary)] text-base font-light max-w-2xl">
            My professional path building innovative solutions and continuous growth.
          </p>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border-b border-[var(--accent-secondary)] pb-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-medium text-[var(--text-primary)]">{exp.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] font-light">{exp.company}</p>
                </div>
                <p className="text-sm text-[var(--text-secondary)] font-light whitespace-nowrap">{exp.period}</p>
              </div>
              <p className="text-[var(--text-secondary)] font-light mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs uppercase tracking-widest border border-[var(--accent-secondary)] text-[var(--text-secondary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
