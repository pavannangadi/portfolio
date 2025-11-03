"use client"

import { useState, useEffect } from "react"

export default function Navbar({ isDark, onThemeToggle, onAdminClick }) {
  const [activeSection, setActiveSection] = useState("hero")

  const sections = [
    { id: "hero", label: "HOME" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b"
      style={{ borderColor: "var(--accent-secondary)", backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xs font-light tracking-widest uppercase"></h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ opacity: activeSection === section.id ? 1 : 0.5 }}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <button
            onClick={onThemeToggle}
            className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity"
          >
            {isDark ? "LIGHT" : "DARK"}
          </button>
          {/* <button
            onClick={onAdminClick}
            className="text-xs tracking-widest uppercase border border-[var(--accent-secondary)] px-3 py-1 hover:bg-[var(--bg-secondary)] transition"
          >
            ADMIN
          </button> */}
        </div>
      </div>
    </nav>
  )
}
