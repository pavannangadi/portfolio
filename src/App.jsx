"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import AdminLogin from "./components/AdminLogin"
import AdminDashboard from "./components/AdminDashboard"

function App() {
  const [isDark, setIsDark] = useState(true)
  const [isAdminPage, setIsAdminPage] = useState(false)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true"
    setIsAdminLoggedIn(isLoggedIn)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    if (isDark) {
      html.classList.add("dark")
      html.classList.remove("light")
    } else {
      html.classList.remove("dark")
      html.classList.add("light")
    }
  }, [isDark])

  const handleAdminLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    setIsAdminLoggedIn(false)
    setIsAdminPage(false)
  }

  // Admin Login Page
  if (isAdminPage && !isAdminLoggedIn) {
    return <AdminLogin onLoginSuccess={() => setIsAdminLoggedIn(true)} isDark={isDark} />
  }

  // Admin Dashboard Page
  if (isAdminLoggedIn) {
    return <AdminDashboard onLogout={handleAdminLogout} isDark={isDark} />
  }

  // Main Portfolio Page
  return (
    <div className="relative">
      <Navbar isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} onAdminClick={() => setIsAdminPage(true)} />

      <ScrollToTop />

      <main className="relative overflow-hidden pt-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
