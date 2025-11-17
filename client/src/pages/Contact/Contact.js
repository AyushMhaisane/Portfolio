import React, { useState } from 'react';
import './Contact.css';
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"; 
import mail from '../../assets/images/mail.png'; 

// 'axios' aur 'toast' ko import karein
import axios from 'axios';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Isse App.js mein import karein

const Contact = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("PLease Provide all fields");
        return; // Function ko yahaan rokein
      }
      // '/api/v1/portfolio/sendEmail' endpoint par data POST karein
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      //validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setName(""); 
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong"); // User ko error dikhayein
    }
  };

  return (
    <>
      <div className="contact" id='contact'> 
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
          Contact Us
          <hr />
        </h2>
        <div className="card card0 border-0">
          <div className="row">
            {/* Image Column */}
            <div className="col-md-6 col-lg-6 col-xk-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img 
                    src={mail} 
                    alt="contact mail icon" 
                    className="contact-svg-image" 
                  />
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className=" col-lg-6 col-md-6">
              
              {/* <form> tag add karein aur onSubmit ko connect karein */}
              <form className="card2 d-flex card border-0 px-4 py-4" onSubmit={handleSubmit}>
                <h6>
                  Contact With 
                  <BsLinkedin
                    color="#0077B5" 
                    size={25}
                    className="ms-2 icon-link"
                    onClick={() => {
                      window.open("https://www.linkedin.com/in/ayush-mhaisane-858038304");
                    }}
                  />
                  <BsGithub
                    color="#EEEEEE" 
                    size={28}
                    className="ms-2 icon-link"
                    onClick={() => {
                      window.open("https://github.com/AyushMhaisane");
                    }}
                  />
                  <BsInstagram
                    color="#E1306C" 
                    size={28}
                    className="ms-2 icon-link"
                    onClick={() => {
                      window.open("https://www.instagram.com/ayush_mhaisane/");
                    }}
                  />
                </h6>
                
                {/* Form Inputs */}
                <div className="row px-3">
                  <input 
                    type="text" 
                    name='name' 
                    placeholder='Enter Your Name' 
                    className='mb-3' 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    required
                  />
                </div>
                <div className="row px-3">
                  <input 
                    type="email" 
                    name='email' 
                    placeholder='Enter Your EMail Address' 
                    className='mb-3' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="row px-3">
                  <textarea 
                    type="text" 
                    name='msg' 
                    placeholder='Write Your Message' 
                    className='mb-3' 
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    required
                  />
                </div>
                
                {/* Submit Button */}
                <div className="row px-3">
                  <button className='button' type='submit'>Send Message</button>
                </div>
              </form> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;