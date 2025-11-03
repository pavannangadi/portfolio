"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function AdminLogin({ onLoginSuccess, isDark }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const ADMIN_PASSWORD = "pavan2024"

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("adminLoggedIn", "true")
      onLoginSuccess()
    } else {
      setError("Incorrect password")
      setPassword("")
      setTimeout(() => setError(""), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-2">Admin Access</h1>
          <p className="text-[var(--text-secondary)] text-sm uppercase tracking-widest">Portfolio Management</p>
        </div>

        <div className="border border-[var(--accent-secondary)] p-8">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            className="w-full border border-[var(--accent-secondary)] p-3 mb-4 bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none transition"
            autoFocus
          />
          {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full border border-[var(--accent-secondary)] p-3 hover:bg-[var(--bg-secondary)] transition font-light uppercase text-xs tracking-widest"
          >
            Login
          </button>
        </div>

        <p className="text-center text-xs text-[var(--text-secondary)] mt-8 uppercase tracking-widest">Admin Portal</p>
      </motion.div>
    </div>
  )
}
