"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function AdminPanel({ onClose, isDark }) {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [leetcodeData, setLeetcodeData] = useState([])
  const [stats, setStats] = useState({ easy: 0, medium: 0, hard: 0 })
  const [activeTab, setActiveTab] = useState("leetcode")

  const ADMIN_PASSWORD = "pavan2024"

  useEffect(() => {
    const saved = localStorage.getItem("leetcodeData")
    const savedStats = localStorage.getItem("leetcodeStats")
    if (saved) setLeetcodeData(JSON.parse(saved))
    if (savedStats) setStats(JSON.parse(savedStats))
  }, [])

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setPassword("")
    } else {
      alert("Incorrect password")
    }
  }

  const updateLeetcodeMonth = (index, difficulty, value) => {
    const updated = [...leetcodeData]
    updated[index] = { ...updated[index], [difficulty]: Number.parseInt(value) || 0 }
    setLeetcodeData(updated)
    localStorage.setItem("leetcodeData", JSON.stringify(updated))
  }

  const updateStats = (difficulty, value) => {
    const updated = { ...stats, [difficulty]: Number.parseInt(value) || 0 }
    setStats(updated)
    localStorage.setItem("leetcodeStats", JSON.stringify(updated))
  }

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      >
        <div className="bg-[var(--bg-primary)] border border-[var(--accent-secondary)] p-8 w-96 rounded">
          <h2 className="text-2xl font-light mb-6">Admin Access</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            className="w-full border border-[var(--accent-secondary)] p-3 mb-4 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
          />
          <div className="flex gap-4">
            <button
              onClick={handleLogin}
              className="flex-1 border border-[var(--accent-secondary)] p-2 hover:bg-[var(--bg-secondary)] transition"
            >
              Login
            </button>
            <button
              onClick={onClose}
              className="flex-1 border border-[var(--accent-secondary)] p-2 hover:bg-[var(--bg-secondary)] transition"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <div className="bg-[var(--bg-primary)] border border-[var(--accent-secondary)] rounded w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[var(--bg-primary)] border-b border-[var(--accent-secondary)] p-6 flex justify-between items-center">
          <h2 className="text-2xl font-light">Admin Panel</h2>
          <button onClick={onClose} className="text-2xl hover:opacity-50 transition">
            ✕
          </button>
        </div>

        <div className="p-6">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8 border-b border-[var(--accent-secondary)] pb-4">
            <button
              onClick={() => setActiveTab("leetcode")}
              className={`uppercase text-xs tracking-widest pb-2 border-b-2 transition ${
                activeTab === "leetcode"
                  ? "border-[var(--text-primary)]"
                  : "border-transparent text-[var(--text-secondary)]"
              }`}
            >
              LeetCode Data
            </button>
            <button
              onClick={() => setActiveTab("stats")}
              className={`uppercase text-xs tracking-widest pb-2 border-b-2 transition ${
                activeTab === "stats"
                  ? "border-[var(--text-primary)]"
                  : "border-transparent text-[var(--text-secondary)]"
              }`}
            >
              Total Stats
            </button>
          </div>

          {/* LeetCode Monthly Data */}
          {activeTab === "leetcode" && (
            <div>
              <h3 className="text-xl font-light mb-4">Monthly Progress</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {leetcodeData.map((month, index) => (
                  <div key={index} className="border border-[var(--accent-secondary)] p-4">
                    <p className="text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-3">{month.month}</p>
                    <div className="grid grid-cols-3 gap-3">
                      {["easy", "medium", "hard"].map((difficulty) => (
                        <div key={difficulty}>
                          <label className="block text-xs uppercase tracking-widest mb-2 capitalize">
                            {difficulty}
                          </label>
                          <input
                            type="number"
                            value={month[difficulty] || 0}
                            onChange={(e) => updateLeetcodeMonth(index, difficulty, e.target.value)}
                            className="w-full border border-[var(--accent-secondary)] p-2 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Total Stats */}
          {activeTab === "stats" && (
            <div>
              <h3 className="text-xl font-light mb-4">Total Problems Solved</h3>
              <div className="grid grid-cols-3 gap-4">
                {["easy", "medium", "hard"].map((difficulty) => (
                  <div key={difficulty} className="border border-[var(--accent-secondary)] p-4">
                    <label className="block text-xs uppercase tracking-widest mb-3 capitalize text-[var(--text-secondary)]">
                      {difficulty}
                    </label>
                    <input
                      type="number"
                      value={stats[difficulty] || 0}
                      onChange={(e) => updateStats(difficulty, e.target.value)}
                      className="w-full border border-[var(--accent-secondary)] p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)] text-lg font-light"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="text-xs text-[var(--text-secondary)] mt-6">
            Changes are automatically saved to your browser's local storage.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
