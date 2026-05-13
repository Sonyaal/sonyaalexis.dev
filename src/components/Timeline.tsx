import React, { useState, useRef, useEffect } from "react";
import '../assets/styles/Timeline.scss';
import databricksLogo from '../assets/images/databricks.png';
import bloombergLogo from '../assets/images/bloomberg.png';
import lavalabLogo from '../assets/images/lavalab.png';
import makersLogo from '../assets/images/makers.png';
import emotivLogo from '../assets/images/emotiv.png';

type TimelineEntry = {
  date: string;
  role: string;
  company: string;
  location: string;
  type: string;
  href: string;
  logoInitial?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoColor: string;
  progression?: string;
  desc: string;
  bullets?: string[];
  tags: string[];
};

const entries: TimelineEntry[] = [
  {
    date: "May 2026",
    role: "Engineering Intern",
    company: "Databricks",
    location: "San Francisco",
    type: "Incoming",
    href: "https://www.databricks.com",
    logoSrc: databricksLogo,
    logoAlt: "Databricks logo",
    logoColor: "",
    desc: "",
    tags: [],
  },
  {
    date: "Jun – Aug 2025",
    role: "Software Engineer Intern",
    company: "Bloomberg LP",
    location: "New York, NY",
    type: "Internship",
    href: "https://www.bloomberg.com/",
    logoSrc: bloombergLogo,
    logoAlt: "Bloomberg logo",
    logoColor: "",
    desc: "Worked on financial platform infrastructure and AI-driven QA - using LLMs to identify anomalies and improve testing coverage.",
    tags: ["Python", "C++", "LLMs", "QA Automation"],
  },
  {
    date: "Jan 2025 – Present",
    role: "Technical Founder → Director of Industry & Sponsorship → President",
    company: "USC LavaLab",
    location: "Los Angeles, CA",
    type: "Leadership",
    href: "https://usclavalab.org/",
    logoSrc: lavalabLogo,
    logoAlt: "USC LavaLab logo",
    logoColor: "",
    desc: "USC's student-run startup incubator, selecting the top ~5% of applicants to build products over a 10-week sprint. ",
    tags: ["Startups", "Product", "Sponsorships", "Community"],
  },
  {
    date: "Aug 2023 – Present",
    role: "Software Developer",
    company: "USC Makers",
    location: "Los Angeles, CA",
    type: "Club",
    href: "https://viterbimakers.usc.edu/",
    logoSrc: makersLogo,
    logoAlt: "USC Makers logo",
    logoColor: "",
    desc: "",
    bullets: [
      "Built a walking robot using reinforcement learning and wireless-controlled animations (2025–26)",
      "Built a brain-controlled drone using electroencephalography (EEG) signals (2024–25)",
      "Built an autonomous foosball goalie system using computer vision (2023–24)",
    ],
    tags: ["RL", "BCI", "OpenCV"],
  },
  {
    date: "Jun – Aug 2024",
    role: "Software Engineer Intern",
    company: "Bloomberg LP",
    location: "New York, NY",
    type: "Internship",
    href: "https://www.bloomberg.com/",
    logoSrc: bloombergLogo,
    logoAlt: "Bloomberg logo",
    logoColor: "",
    desc: "Designed and developed automated CI/CD pipelines to detect regressions at scale across the Bloomberg Terminal.",
    tags: ["Javascript", "Jenkins", "GitHub Actions"],
  },
  {
    date: "Jun – Aug 2022",
    role: "Research Intern",
    company: "EMOTIV",
    location: "San Francisco, CA",
    type: "Internship",
    href: "https://www.emotiv.com/",
    logoSrc: emotivLogo,
    logoAlt: "EMOTIV logo",
    logoColor: "",
    desc: "Researched funding strategies and market positioning for EEG-based BCI systems.",
    tags: ["BCI", "EEG", "Research", "Market Analysis"],
  },
];

function AccordionEntry({ entry, index }: { entry: TimelineEntry; index: number }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const hasContent = !!(entry.desc || (entry.bullets && entry.bullets.length > 0));

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(bodyRef.current.scrollHeight);
    }
  }, []);

  return (
    <div className={`tl-row${open ? ' tl-row--open' : ''}`}>
      <button
        className="tl-trigger"
        onClick={() => hasContent && setOpen((p) => !p)}
        aria-expanded={hasContent ? open : undefined}
        style={{ cursor: hasContent ? 'pointer' : 'default' }}
      >
        <div className="tl-trigger-main">
          <div
            className={`tl-logo${entry.logoSrc ? ' tl-logo--image' : ''}`}
            style={{ backgroundColor: entry.logoSrc ? 'transparent' : entry.logoColor }}
            aria-hidden="true"
          >
            {entry.logoSrc ? (
              <img src={entry.logoSrc} alt={entry.logoAlt ?? `${entry.company} logo`} />
            ) : (
              entry.logoInitial
            )}
          </div>
          <div className="tl-main-text">
            <span className="tl-role">{entry.role}</span>
            <span className="tl-company">
              <a
                href={entry.href}
                target="_blank"
                rel="noreferrer"
                className="tl-company-link"
                onClick={(e) => e.stopPropagation()}
              >
                {entry.company}
              </a>
            </span>
            <span className="tl-location">{entry.location}</span>
            <div className="tl-tags">
              {entry.tags.map((tag) => (
                <span className="tl-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="tl-trigger-right">
          <span className="tl-date">{entry.date}</span>
          {hasContent && (
            <div className="tl-chevron" aria-hidden="true">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      </button>

      <div
        className="tl-body"
        style={{ maxHeight: open ? height : 0 }}
        aria-hidden={!open}
      >
        <div ref={bodyRef} className="tl-body-inner">
          {entry.progression && (
            <p className="tl-progression">{entry.progression}</p>
          )}
          {entry.bullets ? (
            <ul className="tl-bullets">
              {entry.bullets.map((b, i) => (
                <li key={i} className="tl-bullet">{b}</li>
              ))}
            </ul>
          ) : (
            <p className="tl-desc">{entry.desc}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div id="history" className="history-section">
      <div className="history-inner">
        <div className="history-header reveal">
          <h2>Experience</h2>
        </div>

        <div className="tl-list">
          {entries.map((entry, i) => (
            <AccordionEntry key={i} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
