import React, { useRef, useState, useCallback, useEffect } from "react";
import '../assets/styles/Project.scss';
import structureImg from '../assets/images/structure.png';
import directoryImg from '../assets/images/directory.png';
import haulImg from '../assets/images/haul.png';
import robotImg from '../assets/images/robot.png';
import eegImg from '../assets/images/eeg.png';
import nanosenseImg from '../assets/images/NanoSense.png';

const STRUCTURE_INDEX = 2;

const projects = [
  {
    href: "https://github.com/uscmakers/BCD",
    title: "EEG Controlled Drone",
    num: "01",
    category: "BCI · Embedded",
    traction: "USC Makers",
    desc: "Real-time EEG drone control using an LSTM trained on 8 neural power bands and cognitive metrics to classify 6 directional movements from live brainwave activity.",
    accent: "#0F62FE",
    image: eegImg,
  },
  {
    href: "https://github.com/Sonyaal/Robot-Animations",
    title: "RL Walking Robot",
    num: "02",
    category: "Robotics · RL",
    traction: "USC Makers",
    desc: "Walking robot trained with reinforcement learning, featuring real-time Botango servo animations and a browser-based remote control interface.",
    accent: "#2563EB",
    image: robotImg,
  },
  {
    href: "https://www.buildstructure.net/",
    title: "Structure",
    num: "03",
    category: "AI · Architecture",
    traction: "VC-backed · Demo Day winner",
    desc: "Co-founded an AI platform that catches zoning violations and code issues before permit submission using LLM/VLM document analysis.",
    accent: "#8B5CF6",
    image: structureImg,
  },
  {
    href: "",
    title: "Haul",
    num: "04",
    category: "",
    traction: "",
    desc: "Browser-based tool that observes user behavior while shopping or searching and surfaces relevant tutorial/demo videos in real time.",
    accent: "#059669",
    image: haulImg,
    badge: "Coming soon on Chrome Web Store",
  },
  {
    href: "https://drive.google.com/file/d/1T0C6_GX38b6gIT0Oa1hwwFksLoW-gFxh/view?usp=sharing",
    title: "Monitoring Wearable",
    num: "05",
    category: "Hardware · Research",
    traction: "University Research · USC",
    desc: "Research-backed wearable built with carbon-based nanomaterials that monitors breathing patterns and detects onset of SIDS, paired with a companion app for real-time alerts.",
    accent: "#0891b2",
    image: nanosenseImg,
  },
  {
    href: "https://usclavalab.org/startup-directory",
    title: "LavaLab Startup Directory",
    num: "06",
    category: "Full-stack · Automation",
    traction: "",
    desc: "Built the USC LavaLab startup directory and an automated content pipeline that parses Google Form submissions, updates site data, and deploys new startups directly to GitHub.",
    accent: "#990000",
    image: directoryImg,
  },
];

function Project() {
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const hasDragged = useRef(false);

  const updateOpacity = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const railRect = rail.getBoundingClientRect();

    cardRefs.current.forEach((card) => {
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const cutLeft = Math.max(0, railRect.left - cardRect.left);
      const cutRight = Math.max(0, cardRect.right - railRect.right);
      const cutFraction = (cutLeft + cutRight) / cardRect.width;
      card.style.opacity = cutFraction > 0 ? String(Math.max(0.35, 1 - cutFraction)) : '1';
    });
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    const centerCard = cardRefs.current[STRUCTURE_INDEX];
    if (!rail || !centerCard) return;

    // Double rAF ensures layout is fully computed before measuring
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const railRect = rail.getBoundingClientRect();
        const cardRect = centerCard.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const railCenterX = railRect.left + railRect.width / 2;
        rail.scrollLeft += cardCenterX - railCenterX;
        updateOpacity();
      });
    });

    rail.addEventListener('scroll', updateOpacity, { passive: true });
    return () => rail.removeEventListener('scroll', updateOpacity);
  }, [updateOpacity]);

  const scroll = (dir: 'left' | 'right') => {
    if (!railRef.current) return;
    railRef.current.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' });
  };

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!railRef.current) return;
    setIsDragging(true);
    hasDragged.current = false;
    dragStart.current = { x: e.pageX, scrollLeft: railRef.current.scrollLeft };
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !railRef.current) return;
    const dx = e.pageX - dragStart.current.x;
    if (Math.abs(dx) > 4) hasDragged.current = true;
    railRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  }, [isDragging]);

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  return (
    <div id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="reveal">Projects</h2>
      </div>

      <div
        className={`projects-rail${isDragging ? ' projects-rail--dragging' : ''}`}
        ref={railRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {projects.map((p, i) => (
          <div
            className="proj-card"
            key={p.title}
            ref={(el) => { cardRefs.current[i] = el; }}
            style={{ '--card-accent': p.accent } as React.CSSProperties}
          >
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => hasDragged.current && e.preventDefault()}
              >
                <div className="proj-card-header">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="proj-card-img" />
                  ) : (
                    <>
                      <span className="proj-num">{p.num}</span>
                      <span className="proj-category">{p.category}</span>
                      <span className="proj-traction">{p.traction}</span>
                    </>
                  )}
                </div>
                <div className="proj-card-body">
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.desc}</p>
                </div>
              </a>
            ) : (
              <div onClick={(e) => hasDragged.current && e.preventDefault()}>
                <div className="proj-card-header">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="proj-card-img" />
                  ) : (
                    <>
                      <span className="proj-num">{p.num}</span>
                      <span className="proj-category">{p.category}</span>
                      <span className="proj-traction">{p.traction}</span>
                    </>
                  )}
                </div>
                <div className="proj-card-body">
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.desc}</p>
                  {p.badge && (
                    <span className="proj-badge">
                      <span className="proj-badge-dot" aria-hidden="true" />
                      {p.badge}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="proj-rail-end" aria-hidden="true" />
      </div>

      <div className="projects-nav">
        <button className="proj-arrow-btn" onClick={() => scroll('left')} aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="proj-arrow-btn" onClick={() => scroll('right')} aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Project;
