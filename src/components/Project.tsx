import React from "react";
import '../assets/styles/Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faSoccerBall, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Technical Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/uscmakers/BabyRobokeeper" target="_blank" rel="noreferrer">
                        <div className="project-box">
                            <div className="project-icon">
                                <FontAwesomeIcon icon={faSoccerBall} size="2x" />
                            </div>
                            <div className="project-details">
                                <h2>(Baby) Robokeeper</h2>
                                <p>Designed and built a “Robokeeper” to block shots in a foosball table in real time, utilizing CV.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="project">
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7234428898703278080/" target="_blank" rel="noreferrer">
                        <div className="project-box">
                            <div className="project-icon">
                                <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                            </div>
                            <div className="project-details">
                                <h2>Visual Regression Testing</h2>
                                <p>Designed a Visual Regression Testing Library for Bloomberg Terminal widgets in the CI pipeline during PRs.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="project">
                    <a href="https://drive.google.com/file/d/1g_TSxvrwkMKgz2SCPKAuUY68HhRu5xX-/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div className="project-box">
                            <div className="project-icon">
                                <FontAwesomeIcon icon={faHeartbeat} size="2x" />
                            </div>
                            <div className="project-details">
                                <h2>Graphene-Based Pressure Sensor</h2>
                                <p>Utilized a two-dimensional, carbon-based nanomaterial to display the onset of SIDS.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
