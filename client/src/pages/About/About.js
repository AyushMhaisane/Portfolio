import React from 'react';
import './About.css';
import { motion } from 'framer-motion'; 
import { MdWork, MdSchool, MdLocationOn } from "react-icons/md";
import image from '../../assets/images/img.png';

// Framer Motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeInOut" } 
  }
};

const About = () => {
  return (
    <>
      <motion.div 
        className="about" 
        id='dark'
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
          About Me
        </h2>
        <hr className="about-hr" /> 

        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            
           
            <img src={image} alt="ABOUT PROFILE" className="about-profile-img" />
            
            <h4 className="image-caption-name">
              Ayush Mhaisane
            </h4>
          </div>
          
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            
            <p>
              As a passionate Third Year IT Engineering student, I excel at architecting and building end-to-end web applications—from robust backend APIs to pixel-perfect, user-centric UIs.
              <br/><br/>
              I thrive on transforming complex challenges into scalable, functional products by blending technical precision with creative problem-solving. Driven by a growth mindset, I am always seeking new opportunities to learn, collaborate, and innovate.
            </p>

            <div className="about-highlights">
              <div className="highlight-card">
                <MdWork className="highlight-icon" />
                <div className="highlight-text">
                  <h5>Role</h5>
                  <span>Full Stack Developer</span>
                </div>
              </div>
              <div className="highlight-card">
                <MdSchool className="highlight-icon" />
                <div className="highlight-text">
                  <h5>Status</h5>
                  <span>3rd Year IT Student</span>
                </div>
              </div>
              <div className="highlight-card">
                <MdLocationOn className="highlight-icon" />
                <div className="highlight-text">
                  <h5>Location</h5>
                  <span>Pune, India</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
