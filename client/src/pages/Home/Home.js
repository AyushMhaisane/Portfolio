import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
// MODIFICATION: CSS import ko theek kiya (About.css se Home.css)
import "./Home.css"; 
// import Fade from "react-reveal/Fade"; // Removed

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-content">
        
        {/* <Fade right> wrapper removed */}
        <h2>Hi 👋 I'm a</h2>
        <h1>
          <Typewriter
            options={{
              strings: [
                "FullStack Developer!",
                "Mern Stack Developer!",
                "React native developer!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        
        {/* <Fade bottom> wrapper removed */}
        <div className="home-buttons">
          <a
            className="btn btn-hire"
            href="https://api.whatsapp.com/send?phone=1234567890"
            rel="noreferrer"
            target="_blank"
          >
            Hire Me
          </a>
          <a className="btn btn-cv" href={Resume} download="Ayush_Resume.pdf">
            My Resume
          </a>
        </div>

      </div>
    </div>
  );
};

export default Home;