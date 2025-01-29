import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
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
            date="Aug 2023 - Present"
            iconStyle={{ background: '#000000', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faRocket} />}
          >
            <h3 className="vertical-timeline-element-title">USC Makers</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
              Developer, Currently designing an EEG controlled drone
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
              Frontend Development, Continuous Integration, User Experience
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
              Compiled research for an IFU (patient and clinical) for the EPOC X Device, a 14 Channel Wireless EEG Headset
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;