import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Sonyaal" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/sonya-alexis/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href="mailto:salexis@usc.edu">
          <MailIcon />
        </a>
      </div>
      <div className="view-source">
        <a href="https://github.com/Sonyaal/sonya.alexis" target="_blank" rel="noreferrer">
          View Source on GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
