import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-text reveal">
          <span className="section-label">Contact</span>
          <h2>Let's connect.</h2>
          <div className="contact-links">
            <a
              href="https://github.com/Sonyaal"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/sonya-alexis/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://x.com/sonyaalexisss"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              aria-label="X"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="mailto:salexis@usc.edu"  className="contact-link" aria-label="Email">
              <MailOutlineIcon />
            </a>
          </div>
        </div>

        <div className="contact-cta reveal reveal-d2">
          <span className="cta-label"></span>
          <a href="mailto:salexis@usc.edu" className="cta-email">
            salexis@usc.edu
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
