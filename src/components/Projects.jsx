"use client"

import { motion } from "framer-motion"

const PROJECTS = [
  {
    title: "SubSplit",
    description:
      "A subscription cost-splitting platform leveraging blockchain technology for secure, transparent transactions. Built with Next.js and integrated with Solana smart contracts.",
    tech: ["Next.js", "MongoDB", "Solana", "Smart Contracts", "React"],
    link: "#",
    github: "https://github.com/pavannangadi/SubSplit",
  },
  {
    title: "AI Learning Chatbot",
    description:
      "Personalized learning assistant powered by FLAN-T5 and Rasa. Provides adaptive learning paths and real-time assistance for students.",
    tech: ["Python", "FLAN-T5", "Rasa", "NLP", "Streamlit"],
    link: "#",
    github: "https://github.com/pavannangadi/Chatbot_for_Personalized_Learning",
  },
  // {
  //   title: "Personal Expense Tracker",
  //   description:
  //     "Enterprise-grade expense tracking application. Implements DAO pattern and Service Layer architecture for scalable data management.",
  //   tech: ["Java", "Design Patterns", "Database Design", "OOP"],
  //   link: "#",
  //   github: "#",
  // },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio built with React, Vite, and Tailwind CSS. Features smooth animations with Framer Motion.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
  },
]

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group border-b border-[var(--accent-secondary)] pb-8"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-light text-[var(--text-primary)]">{project.title}</h3>
      {/* <motion.div
        whileHover={{ x: 4, opacity: 1 }}
        className="text-lg opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-secondary)]"
      >
        →  // this is the arrow on the left side of the project
      </motion.div> */}
    </div>

    <p className="text-[var(--text-secondary)] mb-6 font-light leading-relaxed">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-xs uppercase tracking-widest border border-[var(--accent-secondary)] text-[var(--text-secondary)]"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-6">
      {/* <motion.a
        href={project.link}
        className="text-sm uppercase tracking-widest font-medium text-[var(--text-primary)] hover:opacity-60 transition-opacity"
        whileHover={{ x: 2 }}
      >
        View → // this is the view botthon on the left side of Github button
      </motion.a> */}
      <motion.a
        href={project.github}
        className="text-sm uppercase tracking-widest font-medium text-[var(--text-primary)] hover:opacity-60 transition-opacity"
        whileHover={{ x: 2 }}
      >
        GitHub →
      </motion.a>
    </div>
  </motion.div>
)

export default function Projects() {
  return (
    <section className="min-h-screen py-20 px-4 border-t border-[var(--accent-secondary)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-[var(--text-secondary)] text-base font-light max-w-2xl">
            Showcasing my best work in web development and blockchain technology.
          </p>
        </motion.div>

        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
