import React from 'react';
import "./Projects.css";
// import Fade from "react-reveal/Fade"; // MODIFICATION: Hata diya
import portfolioImage from "../../assets/images/portfolio.png"; 
import project2Image from "../../assets/images/project2.png";
import project3Image from "../../assets/images/project3.png";

// Define project data to simplify rendering and update placeholder text
const projectData = [
    {
        title: "Portfolio Site",
        stack: ["React", "Node", "Express"],
        badge: "MERN Stack",
        link: "https://github.com/AyushMhaisane/portfolio-repo-link",
        image: portfolioImage 
    },
    {
        title: "Scheduler APP",
        stack: ["Node", "Express", "NeonDB","Clerk"],
        badge: "Full Stack",
        link: "https://github.com/AyushMhaisane/ecommerce-api",
        image: project2Image 
    },
    {
        title: "LeetMetric",
        stack: ["HTML", "CSS", "JavaScript"],
        badge: "Mobile/Web App",
        link: "https://github.com/AyushMhaisane/mobile-tracker-app",
        image: project3Image
    }
];

const Projects = () => {
    return (
        <>
            <div className='container project' id='projects'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                    Recent Projects
                    <hr />
                </h2>

                <p className='col-12 pb-3 text-center project-summary'>
                    Here are a few of my recent projects demonstrating my skills in full-stack, mobile, and web development. Each project blends technical requirements with user-centric design principles.
                </p>

                <div className="row" id="ads" >
                    {/* MODIFICATION: <Fade> wrapper hata diya */}
                    {projectData.map((project, index) => (
                        <div className='col-md-4' key={index}>
                            <div className='card rounded'>
                                <div className="card-image">
                                    <span className="card-notify-badge">{project.badge}</span>
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        onError={(e) => {
                                            e.target.onerror = null; 
                                            e.target.src = "https://placehold.co/600x400/393e46/eeeeee?text=Project+Image";
                                        }}
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    {project.stack.map((tech, i) => (
                                        <span className="card-details-badge" key={i}>{tech}</span>
                                    ))}
                                </div>
                                <div className='card-body'>
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase text-center ">{project.title}</h5>
                                    </div>
                                    <a className='ad-btn' href={project.link} target="_blank" rel="noopener noreferrer">View Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;