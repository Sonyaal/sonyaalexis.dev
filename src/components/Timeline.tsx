import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBrain, faRocket,  faCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History and Involvements</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2025 - Aug 2025"
            iconStyle={{ background: '#000000', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuilding} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern at Bloomberg LP</h3>
            <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
            <p>
              Fixed Income Trading Market Makers Platform
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2025 - Present"
            iconStyle={{ background: '#000000', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">USC Lava Lab</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
              Co-founded Structure, an AI tool using VLMs to analyze architectural drawings and flag zoning/code violations
            </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2023 - Present"
            iconStyle={{ background: '#000000', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faRocket} />}
          >
            <h3 className="vertical-timeline-element-title">USC Makers</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
              Developer; Past projects include an EEG Controlled Drone and Autonomous Goal Keeper
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2024 - Aug 2024"
            iconStyle={{ background: '#000000', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuilding} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern at Bloomberg LP</h3>
            <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
            <p>
              Continuous Integration, Regression Testing 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2022 - Aug 2022"
            iconStyle={{ background: '#000000', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBrain} />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern at EMOTIV</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Analyzed funding sources and launched initiatives to broaden the EPOC X application scope.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;