import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span className="footer-name">Sonya Alexis</span>
        <div className="footer-links">
          <a
            href="https://github.com/Sonyaal"
            target="_blank"
            rel="noreferrer"
            className="footer-icon-link"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/sonya-alexis/"
            target="_blank"
            rel="noreferrer"
            className="footer-icon-link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://x.com/sonyaalexisss"
            target="_blank"
            rel="noreferrer"
            className="footer-icon-link"
            aria-label="X"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="mailto:salexis@usc.edu"
            className="footer-icon-link"
            aria-label="Email"
          >
            <MailOutlineIcon />
          </a>
        </div>
        <span className="footer-made">Made with <span className="footer-heart">♥</span> in SoCal</span>
      </div>
    </footer>
  );
}

export default Footer;
