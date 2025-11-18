import React, { useState } from "react"; 
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home"; 
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
// import Tada from "react-reveal/Tada"; // MODIFICATION: react-reveal hata diya
import './App.css'; 

// MODIFICATION: MobileNav component import kiya
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
      setToggle(!toggle);
  };
  
  const contentClass = toggle ? "content-wrapper content-shifted" : "content-wrapper";

  return (
    <div id="dark"> 
      <ToastContainer /> 
      
      {/* MODIFICATION: MobileNav component render kiya */}
      <MobileNav />

      <Layout toggle={toggle} handleToggle={handleToggle} />
      
      <div className={contentClass} style={{ paddingBottom: '100px' }}>
        <Home/> 
        <About/>
        <Education/>
        <Techstack/>
        <Projects/>
        <WorkExp/>
        <Contact/>
      </div>

      <div className="footer">
        {/* MODIFICATION: <Tada> wrapper hata diya */}
        <h4 className="col-md 5 text-center">Made with ❤️ <strong>Ayush Mhaisane</strong> &copy; 2025</h4>
      </div>
      
      <ScrollToTop 
        smooth 
        color='#393e46' 
        style={{
            backgroundColor: '#00ADB5', 
            borderRadius: '80px',
            bottom: 20,
            right: 20
        }}
      />
    </div>
  );
}

export default App;