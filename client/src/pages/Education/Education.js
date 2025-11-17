import React from "react";
import { MdSchool } from "react-icons/md";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
    // Define the style constants for consistency and easy reading
    const darkBackground = "#393e46"; // Secondary Dark BG
    const lightText = "#EEEEEE";     // Light Text Color
    const accentColor = "#00ADB5";   // Bright Cyan Accent

    return (
        // IMPORTANT: Apply id='dark' to the container for CSS matching
        <div className="education" id="education"> 
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                Education Details
            </h2>
            <hr />
            <VerticalTimeline>
                {/* B.E. IT - Ongoing */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // Element Content Style (Card Background and Text)
                    contentStyle={{ 
                        background: darkBackground, 
                        color: lightText, 
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" // Add subtle shadow
                    }}
                    // Arrow must match the content background
                    contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }} 
                    date="2025 - Present" 
                    // Icon Style (Icon Circle Background)
                    iconStyle={{ background: accentColor, color: lightText }} 
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                        B.E. in Information Technology
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        D.Y. Patil College of Engineering, Akurdi
                    </h4>
                    <p>Currently Pursuing</p>
                    <p><strong>2nd Year SGPA:</strong> 9.25</p>
                    <a
                        href="https://www.dypcoeakurdi.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ad-btn"
                    >
                        Visit College
                    </a>
                </VerticalTimelineElement>

                {/* Diploma */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // Element Content Style (Card Background and Text)
                    contentStyle={{ 
                        background: darkBackground, 
                        color: lightText,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" // Add subtle shadow
                    }}
                    // Arrow must match the content background
                    contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }}
                    date="2021 - 2024"
                    // Icon Style (Icon Circle Background)
                    iconStyle={{ background: accentColor, color: lightText }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Diploma in Information Technology
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Government Polytechnic, Amravati
                    </h4>
                    <p><strong>Percentage:</strong> 92.89%</p>
                    <a
                        href="https://www.gpamravati.ac.in/gpamravati_new/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ad-btn"
                    >
                        Visit College Website
                    </a>
                </VerticalTimelineElement>

                {/* 10th Grade Details */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ 
                        background: darkBackground, 
                        color: lightText,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" 
                    }}
                    contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }}
                    date="2021"
                    iconStyle={{ background: accentColor, color: lightText }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                        SSC (10th Grade)
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Aski Kids Public School, Akot
                    </h4>
                    <p><strong>Board:</strong> SSC Board Maharashtra</p>
                    <p><strong>Percentage:</strong> 94.40%</p>
                    
                    {/* MODIFICATION: Button with your school link added */}
                    <a
                        href="https://www.aski.edu.in/index_school.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ad-btn"
                    >
                        Visit School
                    </a>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
};

export default Education;