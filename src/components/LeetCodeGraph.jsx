"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const DEFAULT_DATA = [
  { month: "Jan", easy: 15, medium: 10, hard: 2 },
  { month: "Feb", easy: 20, medium: 12, hard: 4 },
  { month: "Mar", easy: 30, medium: 15, hard: 5 },
  { month: "Apr", easy: 28, medium: 18, hard: 7 },
  { month: "May", easy: 35, medium: 22, hard: 9 },
  { month: "Jun", easy: 40, medium: 25, hard: 12 },
]

export default function LeetCodeGraph({ onEditClick }) {
  const [data, setData] = useState(DEFAULT_DATA)
  const [stats, setStats] = useState({ easy: "140", medium: "102", hard: "39", total: "381" })

  useEffect(() => {
    const saved = localStorage.getItem("leetcodeData")
    const savedStats = localStorage.getItem("leetcodeStats")

    if (saved) {
      setData(JSON.parse(saved))
    }

    if (savedStats) {
      const parsedStats = JSON.parse(savedStats)
      const totalProblems = (parsedStats.easy || 0) + (parsedStats.medium || 0) + (parsedStats.hard || 0)
      setStats({
        easy: parsedStats.easy.toString(),
        medium: parsedStats.medium.toString(),
        hard: parsedStats.hard.toString(),
        total: totalProblems.toString(),
      })
    }
  }, [])

  // Listen for storage changes (when updated in admin panel)
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem("leetcodeData")
      const savedStats = localStorage.getItem("leetcodeStats")
      if (saved) setData(JSON.parse(saved))
      if (savedStats) {
        const parsedStats = JSON.parse(savedStats)
        const totalProblems = (parsedStats.easy || 0) + (parsedStats.medium || 0) + (parsedStats.hard || 0)
        setStats({
          easy: parsedStats.easy.toString(),
          medium: parsedStats.medium.toString(),
          hard: parsedStats.hard.toString(),
          total: totalProblems.toString(),
        })
      }
    }

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("storageUpdated", handleStorageChange)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("storageUpdated", handleStorageChange)
    }
  }, [])

  const total =
    (Number.parseInt(stats.easy) || 0) + (Number.parseInt(stats.medium) || 0) + (Number.parseInt(stats.hard) || 0)

  return (
    <section className="min-h-screen py-20 px-4 border-t border-[var(--accent-secondary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex justify-between items-start"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">LeetCode Progress</h2>
            <p className="text-[var(--text-secondary)] text-base font-light max-w-2xl">
              Track my journey solving data structure and algorithm challenges.
            </p>
          </div>
          <button
            onClick={onEditClick}
            className="px-4 py-2 border border-[var(--accent-secondary)] text-xs uppercase tracking-widest hover:bg-[var(--bg-secondary)] transition"
          >
            Edit Data
          </button>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Total Problems", value: stats.total },
            { label: "Easy", value: stats.easy },
            { label: "Medium", value: stats.medium },
            { label: "Hard", value: stats.hard },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-[var(--accent-secondary)] pb-4"
            >
              <p className="text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-3xl font-light text-[var(--text-primary)]">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 border border-[var(--accent-secondary)]"
        >
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(203, 213, 225, 0.1)" />
              <XAxis dataKey="month" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--accent-secondary)",
                }}
                labelStyle={{ color: "var(--text-primary)" }}
              />
              <Legend wrapperStyle={{ color: "var(--text-secondary)" }} />
              <Bar dataKey="easy" fill="#4ade80" radius={[0, 0, 0, 0]} />
              <Bar dataKey="medium" fill="#facc15" radius={[0, 0, 0, 0]} />
              <Bar dataKey="hard" fill="#f87171" radius={[0, 0, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  )
}
