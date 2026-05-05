import React from "react";
import '../assets/styles/Project.scss';

const projects = [
  {
    href: "https://www.buildstructure.net/",
    title: "Structure",
    category: "AI · Architecture",
    traction: "VC-backed · Demo Day winner",
    desc: "Co-founded an AI platform that helps architecture teams catch zoning violations and code issues before permit submission. Uses document parsing + LLM/VLM analysis to flag ADA non-compliance and zoning conflicts. Presented at LavaLab Demo Day and secured VC funding.",
    tags: ["Python", "VLMs", "React", "Flask", "Document Parsing"],
    accent: "#8B5CF6",
  },
  {
    href: "https://usclavalab.org/startup-directory",
    title: "LavaLab Startup Directory",
    category: "Full-stack · Automation",
    traction: "Shared with Jamie Siminoff (Ring)",
    desc: "Built the USC LavaLab startup directory (YC-directory-inspired) and an end-to-end pipeline that syncs Google Form submissions directly into the site. Handles parsing, validation, image processing, and Git-based deployment — new startups go live instantly with no manual edits.",
    tags: ["React", "Python", "GitHub Actions", "Automation"],
    accent: "#990000",
  },
  {
    href: "https://docs.google.com/presentation/d/14kFaDq6qv25uVkLSEc0RzL1EuW5kq1GY8PruHOVkzHc/edit",
    title: "RL Walking Robot",
    category: "Robotics · RL",
    traction: "USC Makers",
    desc: "Built a walking robot trained with reinforcement learning and integrated with Bottango servo-driven animation for expressive real-time movement. Browser-based remote control for live demonstration — full technical demo presented to USC faculty.",
    tags: ["Python", "RL", "Servo Control", "Raspberry Pi", "Bottango"],
    accent: "#2563EB",
  },
  {
    href: "https://drive.google.com/file/d/1mA0j4XZZjtEqoHbpjVu-k3cbO-IhJSD4/view",
    title: "EEG Drone Control",
    category: "BCI · Embedded",
    traction: "USC Makers",
    desc: "Built a system that uses EEG brain signals to control a drone in real time. Designed a signal processing pipeline to filter alpha, beta, and delta waves from raw EMOTIV headset output and convert them into drone control inputs.",
    tags: ["Python", "EEG", "Signal Processing", "BCI", "OpenCV"],
    accent: "#0F62FE",
  },
  {
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7234428898703278080/",
    title: "Visual Regression Testing",
    category: "DevOps · Bloomberg",
    traction: "Shipped to production",
    desc: "Designed and shipped a Visual Regression Testing library for Bloomberg Terminal widgets — automatically diffs UI screenshots on every pull request in CI to catch visual regressions before they hit production.",
    tags: ["Javascript", "Jenkins", "Docker", "Selenium", "GitHub Actions"],
    accent: "#1A1A1A",
  },
  {
    href: "#",
    title: "Agentic Learning Assistant",
    category: "AI Agents · EdTech",
    traction: "30+ active users",
    desc: "Browser-based tool that observes user behavior while shopping or searching and surfaces relevant tutorial and demo videos in real time. Deployed for iterative user feedback with 30+ active users testing the agent loop.",
    tags: ["Python", "Browser Extension", "LLMs", "Agents"],
    accent: "#059669",
  },
];

function Project() {
  return (
    <div id="projects" className="projects-section">
      <div className="projects-header reveal">
        <span className="section-label">Projects</span>
        <h2>Technical Work</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            className={`project-card reveal reveal-d${(i % 3) + 1}`}
            key={p.title}
            style={{ '--card-accent': p.accent } as React.CSSProperties}
          >
            <a href={p.href} target="_blank" rel="noreferrer">
              <div className="project-top">
                <span className="project-category">{p.category}</span>
                <span className="project-traction">{p.traction}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <span className="project-arrow">View project →</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
