import React from 'react';
import linkedinlogo from "../images/LinkedinLogo.png";
import mailicon from "../images/MailIcon.png"
const Contact = () => {
  return (
    <section id="contact">
      <h1><span>Contact</span></h1>
      <p className="text-center text-base md:text-2xl">
        Feel free to contact me for work or if you have any questions!
      </p>
      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/bao-nguyen-2ba512195"
        target="_blank" rel="noreferrer">
          <img src={linkedinlogo} alt="Linkedin Logo"/>
        </a>
        <a href="mailto:bttn@uw.edu"
        target="_blank" rel="noreferrer">
          <img src={mailicon} alt="Mail Icon"/>
        </a>
      </div>
    </section>
  );
}

export default Contact;
