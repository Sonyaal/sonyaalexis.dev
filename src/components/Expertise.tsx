import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faDocker, faRaspberryPi } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Object-Oriented Programming",
    "Data Structures",
    "React",
    "TypeScript",
    "JavaScript",
    "Flask",
    "Python",
    "SQL",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Jenkins",
    "Docker",
    "Grafana",
    "Linux",
    "Pandas",
    "Python",
];

const labelsThird = [
    "Raspberry Pi",
    "Arduino",
    "Motors",
    "IoT",
    "Microcontrollers",
    "Digital Circuits"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            {/* <h1>Expertise</h1> */}
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Software Development</h3>
                    <p>I work with a diverse languages from Python to C++ for backend development. I also utilize modern technologies such as React and Next.js for frontend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Experienced in designing and implementing CI/CD pipelines and automated deployment processes. Additionally, leveraged containerization technologies and monitoring tools to optimize application performance. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRaspberryPi} size="3x"/>
                    <h3>Embedded Systems</h3>
                    <p>I have experience with embedded systems development, working hands-on with Raspberry Pi, Arduino, and other hardware platforms to design and implement integrated solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;