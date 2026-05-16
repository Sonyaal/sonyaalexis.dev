import React, { useEffect, useRef } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Main.scss';
import headshot from '../assets/images/headshot.png';

function Main() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / width;
      const y = (e.clientY - top - height / 2) / height;
      imageRef.current.style.transform = `translate(${x * 14}px, ${y * 10}px)`;
    };

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = 'translate(0, 0)';
      }
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="container">
      <div className="hero" ref={heroRef}>
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-name">
              sonya<br />
              <span className="hero-name-last">alexis</span><span className="hero-cursor" aria-hidden="true">_</span>
            </h1>
            <p className="hero-blurb">
              Hi! I am currerntly studying Computer Engineering and Computer Science at the University of Southern California where I am building intelligent systems centered around human experience.
            </p>
            <p className="hero-blurb hero-blurb--secondary">
              This summer, I’ll be working on LLM-powered testing at Databricks. Previously, I've worked on  financial platforms and AI-driven validation systems at Bloomberg.            
            </p>
            <div className="hero-divider" />
            <div className="hero-links">
              <a
                href="https://github.com/Sonyaal"
                target="_blank"
                rel="noreferrer"
                className="hero-link"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/sonya-alexis/"
                target="_blank"
                rel="noreferrer"
                className="hero-link"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com/sonyaalexisss"
                target="_blank"
                rel="noreferrer"
                className="hero-link"
                aria-label="X"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="mailto:salexis@usc.edu" className="hero-link" aria-label="Email">
                <MailOutlineIcon />
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-img-frame" ref={imageRef}>
              <img src={headshot} alt="Sonya Alexis" />
            </div>

          </div>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <span className="scroll-line" />
          <span className="scroll-label">Scroll</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
