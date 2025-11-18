import React from "react";
import "./WorkExp.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { SiReact } from "react-icons/si";
import { motion } from 'framer-motion'; // Framer Motion import

// Framer Motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeInOut" } 
  }
};

const WorkExp = () => {
    // Define the style constants for consistency
    const darkBackground = "#393e46"; // Secondary Dark BG (Card)
    const accentColor = "#00ADB5";   // Bright Cyan Accent
    const lightText = "#EEEEEE";     // Light Text Color
    
    return (
        <>
            <motion.div 
              className="work-exp-container" 
              id="work"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            > 
                <div className="container">
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                        Work Experience
                    </h2>
                    <hr />
                    <VerticalTimeline lineColor={accentColor}> 

                        {/* Internship at Compilers Technologies */}
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ 
                                background: darkBackground, 
                                color: lightText,
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                                borderRadius: "8px"
                            }}
                            contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }}
                            date="19th June 2023 – 31st July 2023"
                            iconStyle={{ background: accentColor, color: lightText }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Advanced Java Intern
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Compilers Technologies, Amravati
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                                Successfully completed a 6-week internship program focused on Advanced Java including 
                                Swing, JDBC, HTML, CSS, Servlets, and JSP. Demonstrated punctuality, curiosity, and dedication 
                                throughout the program.
                            </p>

                        </VerticalTimelineElement>

                        {/* Seeking Internship Entry (React/Full Stack focus) */}
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ 
                                background: darkBackground, 
                                color: lightText,
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                                borderRadius: "8px"
                            }}
                            contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }}
                            date="2024 - Present"
                            iconStyle={{ background: darkBackground, color: accentColor }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Seeking Internship Opportunities
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Open to Frontend / Full Stack Roles
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                                Currently exploring internship opportunities where I can contribute and grow.
                                Skills include React, Node.js, Firebase, Tailwind CSS, and UI/UX development.
                            </p>
                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </div>
            </motion.div>
        </>
    );
};

export default WorkExp;