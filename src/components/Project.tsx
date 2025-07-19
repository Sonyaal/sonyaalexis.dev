import React from "react";
import '../assets/styles/Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faSoccerBall, faHeartbeat, faCubes } from '@fortawesome/free-solid-svg-icons';

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
                    <a href="https://www.buildstructure.net/" target="_blank" rel="noreferrer">
                        <div className="project-box">
                            <div className="project-icon">
                                <FontAwesomeIcon icon={faCubes} size="2x" />
                            </div>
                            <div className="project-details">
                                <h2>Structure</h2>
                                <p>An AI platform using vision-language models to analyze architectural drawings and flagzoning/code violations.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
