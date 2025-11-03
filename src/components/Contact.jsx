"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emailjs.init("MpAtfjrOb9_jauI8M")
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const templateParams = {
        from_name: formData.name,
        user_email: formData.email,
        subject: "New Contact Form Submission",
        message: formData.message,
        to_email: "22btrcn198@jainuniversity.ac.in", // Replace with your actual email address
      }

      await emailjs.send("service_9vsgkz9", "template_h0d5cks", templateParams)

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setLoading(false)
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      console.error("Failed to send email:", err)
      setError("Failed to send message. Please try again.")
      setLoading(false)
    }
  }

  const socialLinks = [
    { icon: "🐙", label: "GitHub", url: "https://github.com/pavannangadi" },
    { icon: "💼", label: "LinkedIn", url: "https://www.linkedin.com/in/pampanna-angadi-123640253/" },
    { icon: "✉️", label: "Email", url: "mailto:22btrcn198@jainuniversity.ac.in" },
    { icon: "𝕏", label: "Twitter", url: "https://x.com/angadi_pavann" },
  ]

  return (
    <section className="min-h-screen py-20 px-4 border-t border-[var(--accent-secondary)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">Get In Touch</h2>
          <p className="text-[var(--text-secondary)] text-base font-light max-w-2xl">
            Have a project in mind? I'd love to hear about it. Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[var(--text-primary)] text-sm uppercase tracking-widest mb-3 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-[var(--accent-secondary)] bg-transparent focus:border-[var(--text-primary)] focus:outline-none text-[var(--text-primary)] transition-colors placeholder-[var(--text-secondary)]"
                  placeholder="Your name"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-[var(--text-primary)] text-sm uppercase tracking-widest mb-3 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-[var(--accent-secondary)] bg-transparent focus:border-[var(--text-primary)] focus:outline-none text-[var(--text-primary)] transition-colors placeholder-[var(--text-secondary)]"
                  placeholder="Your email"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-[var(--text-primary)] text-sm uppercase tracking-widest mb-3 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-[var(--accent-secondary)] bg-transparent focus:border-[var(--text-primary)] focus:outline-none text-[var(--text-primary)] transition-colors resize-none placeholder-[var(--text-secondary)]"
                  placeholder="Your message"
                  rows="5"
                  required
                  disabled={loading}
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <motion.button
                type="submit"
                className="w-full px-8 py-3 border border-[var(--text-primary)] text-[var(--text-primary)] font-medium text-sm uppercase tracking-widest hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >
                {loading ? "Sending..." : submitted ? "✓ Sent" : "Send"}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-start"
          >
            <div>
              <h3 className="text-lg font-medium text-[var(--text-primary)] mb-4">Connect</h3>
              <p className="text-[var(--text-secondary)] font-light mb-8 leading-relaxed">
                Follow me on social media or reach out directly. I'm always interested in discussing new opportunities
                and interesting projects.
              </p>
              <div className="flex gap-4 mb-8">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    className="p-3 border border-[var(--accent-secondary)] text-lg hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="border-t border-[var(--accent-secondary)] pt-8">
              <p className="text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">Location</p>
              <p className="text-[var(--text-primary)] font-light">Banglore, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
