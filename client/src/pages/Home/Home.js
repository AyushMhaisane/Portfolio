import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import "./Home.css";
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

const Home = () => {
  return (
    <motion.div 
      className="home-container" 
      id="home"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="home-content">
        
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
        
        <div className="home-buttons">
          <a
            className="btn btn-hire"
            href="https://api.whatsapp.com/send?phone=7218558993"
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
    </motion.div>
  );
};

export default Home;