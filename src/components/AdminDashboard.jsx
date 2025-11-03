"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function AdminDashboard({ onLogout, isDark }) {
  const [activeTab, setActiveTab] = useState("about")
  const [aboutData, setAboutData] = useState({ name: "Pavan", title: "CS Student & Developer", bio: "" })
  const [skills, setSkills] = useState({ languages: "", tools: "", web3: "" })
  const [projects, setProjects] = useState([])
  const [newProject, setNewProject] = useState({ title: "", description: "", tech: "", link: "" })

  useEffect(() => {
    const saved = localStorage.getItem("portfolioAbout")
    if (saved) setAboutData(JSON.parse(saved))

    const savedSkills = localStorage.getItem("portfolioSkills")
    if (savedSkills) setSkills(JSON.parse(savedSkills))

    const savedProjects = localStorage.getItem("portfolioProjects")
    if (savedProjects) setProjects(JSON.parse(savedProjects))
  }, [])

  const saveAbout = () => {
    localStorage.setItem("portfolioAbout", JSON.stringify(aboutData))
    alert("About information saved!")
  }

  const saveSkills = () => {
    localStorage.setItem("portfolioSkills", JSON.stringify(skills))
    alert("Skills saved!")
  }

  const addProject = () => {
    if (newProject.title && newProject.description) {
      const updated = [...projects, { ...newProject, id: Date.now() }]
      setProjects(updated)
      localStorage.setItem("portfolioProjects", JSON.stringify(updated))
      setNewProject({ title: "", description: "", tech: "", link: "" })
      alert("Project added!")
    }
  }

  const deleteProject = (id) => {
    if (confirm("Are you sure you want to delete this project?")) {
      const updated = projects.filter((p) => p.id !== id)
      setProjects(updated)
      localStorage.setItem("portfolioProjects", JSON.stringify(updated))
      alert("Project deleted successfully!")
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="border-b border-[var(--accent-secondary)] sticky top-0 bg-[var(--bg-primary)] z-40">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-light">Admin Dashboard</h1>
          <button
            onClick={onLogout}
            className="border border-[var(--accent-secondary)] px-4 py-2 hover:bg-[var(--bg-secondary)] transition text-xs uppercase tracking-widest"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-6 mb-12 border-b border-[var(--accent-secondary)] pb-4 overflow-x-auto">
          {["about", "skills", "projects"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 border-b-2 transition capitalize text-xs uppercase tracking-widest ${
                activeTab === tab ? "border-[var(--text-primary)]" : "border-transparent text-[var(--text-secondary)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* About Section */}
        {activeTab === "about" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
            <h2 className="text-xl font-light mb-6">About Section</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Name</label>
                <input
                  type="text"
                  value={aboutData.name}
                  onChange={(e) => setAboutData({ ...aboutData, name: e.target.value })}
                  className="w-full border border-[var(--accent-secondary)] p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Title</label>
                <input
                  type="text"
                  value={aboutData.title}
                  onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })}
                  className="w-full border border-[var(--accent-secondary)] p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Bio</label>
                <textarea
                  value={aboutData.bio}
                  onChange={(e) => setAboutData({ ...aboutData, bio: e.target.value })}
                  rows="4"
                  className="w-full border border-[var(--accent-secondary)] p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                />
              </div>
              <button
                onClick={saveAbout}
                className="w-full border border-[var(--accent-secondary)] p-3 hover:bg-[var(--bg-secondary)] transition font-light uppercase text-xs tracking-widest mt-6"
              >
                Save About
              </button>
            </div>
          </motion.div>
        )}

        {/* Skills Section */}
        {activeTab === "skills" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
            <h2 className="text-xl font-light mb-6">Skills</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Languages (comma-separated)</label>
                <textarea
                  value={skills.languages}
                  onChange={(e) => setSkills({ ...skills, languages: e.target.value })}
                  rows="3"
                  className="w-full border border-[var(--accent-secondary)] p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                  placeholder="JavaScript, TypeScript, Python, ..."
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Tools & Frameworks</label>
                <textarea
                  value={skills.tools}
                  onChange={(e) => setSkills({ ...skills, tools: e.target.value })}
                  rows="3"
                  className="w-full border border-[var(--accent-secondary)] p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                  placeholder="React, Next.js, Tailwind, ..."
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Web3 & Blockchain</label>
                <textarea
                  value={skills.web3}
                  onChange={(e) => setSkills({ ...skills, web3: e.target.value })}
                  rows="3"
                  className="w-full border border-[var(--accent-secondary)] p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                  placeholder="Solidity, Ethereum, Smart Contracts, ..."
                />
              </div>
              <button
                onClick={saveSkills}
                className="w-full border border-[var(--accent-secondary)] p-3 hover:bg-[var(--bg-secondary)] transition font-light uppercase text-xs tracking-widest mt-6"
              >
                Save Skills
              </button>
            </div>
          </motion.div>
        )}

        {/* Projects Section */}
        {activeTab === "projects" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
            <h2 className="text-xl font-light mb-6">Projects</h2>

            {/* Add New Project */}
            <div className="border border-[var(--accent-secondary)] p-6 mb-8">
              <h3 className="text-lg font-light mb-4">Add New Project</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full border border-[var(--accent-secondary)] p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                />
                <textarea
                  placeholder="Description"
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  rows="3"
                  className="w-full border border-[var(--accent-secondary)] p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                />
                <input
                  type="text"
                  placeholder="Tech Stack (comma-separated)"
                  value={newProject.tech}
                  onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
                  className="w-full border border-[var(--accent-secondary)] p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                />
                <input
                  type="url"
                  placeholder="Project Link"
                  value={newProject.link}
                  onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                  className="w-full border border-[var(--accent-secondary)] p-3 bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                />
                <button
                  onClick={addProject}
                  className="w-full border border-[var(--accent-secondary)] p-3 hover:bg-[var(--bg-secondary)] transition font-light uppercase text-xs tracking-widest"
                >
                  Add Project
                </button>
              </div>
            </div>

            {/* Existing Projects */}
            <div className="space-y-4">
              <h3 className="text-lg font-light mb-4">Existing Projects ({projects.length})</h3>
              {projects.length === 0 ? (
                <p className="text-[var(--text-secondary)]">No projects added yet.</p>
              ) : (
                projects.map((project) => (
                  <div key={project.id} className="border border-[var(--accent-secondary)] p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-light">{project.title}</h4>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="text-red-500 hover:text-red-700 transition text-xs uppercase"
                      >
                        Delete
                      </button>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm mb-2">{project.description}</p>
                    <p className="text-xs text-[var(--text-secondary)] uppercase tracking-widest">{project.tech}</p>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
