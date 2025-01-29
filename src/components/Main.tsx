import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Main.scss';
import headshot from '../assets/images/headshot.png';

function Main() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const descriptions = [
    "A computer engineer.",
    "A passionate problem solver.",
    "A USC Trojan.",
    "A curious thinker."
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentText = descriptions[currentIndex];

      if (!isDeleting && !isPaused) {
        // Typing forward
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          // Pause briefly before deleting
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 1000); // 1 second pause
          setIsDeleting(true);
        }
      } else if (isDeleting && !isPaused) {
        // Deleting backward
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 2) {
          // Pause briefly before typing the next sentence
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % descriptions.length); // Move to the next sentence
          }, 1); // minimal pause
        }
      }
    };

    const delay = isPaused ? 100 : isDeleting ? 50 : 80; // Adjust speeds for each phase
    const timeout = setTimeout(handleTyping, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, isPaused, descriptions]);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Sonyaal" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/sonya-alexis/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="mailto:salexis@usc.edu"><MailIcon /></a>
          </div>
          <h1>Sonya Alexis</h1>
          <p>{displayText}</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/Sonyaal" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/sonya-alexis/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="mailto:salexis@usc.edu"><MailIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
