"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, var(--accent-primary), transparent)",
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, var(--accent-secondary), transparent)",
            x: mousePosition.x * -0.05,
            y: mousePosition.y * -0.05,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm tracking-widest uppercase text-[var(--text-secondary)] mb-6"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-light mb-8 text-balance tracking-tight">
          Pavan Angadi
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto text-balance font-light"
        >
          Building intelligent, interactive, and scalable web experiences. Passionate about AI and
          cutting-edge technologies.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center flex-wrap">
          <motion.button
            className="px-8 py-3 text-sm tracking-widest uppercase font-medium border border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-[var(--bg-primary)] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Work
          </motion.button>
          <motion.button
            className="px-8 py-3 text-sm tracking-widest uppercase font-medium text-[var(--accent-primary)] hover:opacity-60 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <p className="text-xs tracking-widest uppercase text-[var(--text-secondary)]">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
