import React from 'react';
import './About.css';
import { MdWork, MdSchool, MdLocationOn } from "react-icons/md";
import image from '../../assets/images/img.png';
// import Jump from "react-reveal/Jump"; // MODIFICATION: Hata diya
// import Fade from "react-reveal/Fade"; // MODIFICATION: Hata diya

const About = () => {
  return (
    <>
      {/* MODIFICATION: <Jump> wrapper hata diya */}
      <div className="about" id='dark'>
        
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
          About Me
        </h2>
        <hr className="about-hr" /> 

        <div className="row">
          {/* MODIFICATION: <Fade> wrapper hata diya */}
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={image} alt="ABOUT PROFILE" height="450" />
            <h4 className="image-caption-name">
              Ayush Mhaisane
            </h4>
          </div>
          
          {/* MODIFICATION: <Fade> wrapper hata diya */}
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            
            <p>
              As a passionate Third Year IT Engineering student, I excel at architecting and building end-to-end web applications**—from robust backend APIs to pixel-perfect, user-centric UIs.
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
      </div>
    </>
  );
};

export default About;