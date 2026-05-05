import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faDocker, faRaspberryPi } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Expertise.scss';

const cards = [
  {
    icon: faPython,
    title: "Software Development",
    desc: "I work across languages from Python to C++ for backend development, and build modern frontends with React and TypeScript.",
    label: "Tech stack",
    tags: ["Python", "TypeScript", "React", "JavaScript", "Flask", "SQL", "Data Structures", "OOP"],
  },
  {
    icon: faDocker,
    title: "DevOps & Automation",
    desc: "Experienced designing CI/CD pipelines and automated deployment workflows using containerization and monitoring tooling.",
    label: "Tech stack",
    tags: ["GitHub Actions", "Jenkins", "Docker", "Grafana", "Linux", "Pandas", "Git"],
  },
  {
    icon: faRaspberryPi,
    title: "Embedded Systems",
    desc: "Hands-on experience with Raspberry Pi, Arduino, and IoT hardware platforms to design and implement integrated solutions.",
    label: "Tech stack",
    tags: ["Raspberry Pi", "Arduino", "IoT", "Microcontrollers", "Digital Circuits", "Motors"],
  },
];

function Expertise() {
  return (
    <div id="expertise" className="expertise-section">
      <div className="expertise-header reveal">
        <span className="section-label">Expertise</span>
        <h2>What I work with</h2>
      </div>

      <div className="expertise-grid">
        {cards.map((card, i) => (
          <div className={`expertise-card reveal reveal-d${i + 1}`} key={card.title}>
            <div className="card-icon">
              <FontAwesomeIcon icon={card.icon} />
            </div>
            <h3>{card.title}</h3>
            <p className="card-desc">{card.desc}</p>
            <span className="tag-label">{card.label}</span>
            <div className="tag-row">
              {card.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
