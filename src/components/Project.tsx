import React from "react";
import project1 from '../assets/images/project1.png';
import mock09 from '../assets/images/mock09.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Technical Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/uscmakers/BabyRobokeeper" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/uscmakers/BabyRobokeeper" target="_blank" rel="noreferrer"><h2>(Baby) Robokeeper</h2></a>
                <p>Designed and built a “Robokeeper” to block shots in a foosball table in real time, utilizing CV. Specialized in Embedded
                Systems.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;