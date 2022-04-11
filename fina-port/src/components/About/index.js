import React from 'react';
// import coverImage from "../../assets/images/cover-image.jpg";
import headShot from "../../assets/images/headShot.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />  */}
      <img src={headShot} className="my-2" style={{ width: "100px" }} alt="cover" />   
      <div className="my-2">
        <p>
          Hi!  After filling many roles in my career path, I am currently building and fine-tuning my credentials for full-stack web development.  Through the Ohio State University College of Engineering, I successfully completed the OSU Coding Boot Camp.  In this market-driven curriculum, I focused on many skills such as: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, Progressive Web Apps, Database Theory, MongoDB, MySQL, Git, Python, Java, C#, PHP, and more.</p>

          
          <p>As a former main-frame programmer, I have a foundation in computer languages and job control.  My experience as a network administrator and computer science teacher provided me the oportunity to deliver a positive user experience to students and staff as they applied changing technology to their daily activities.</p>
          

          <p>Which now leads me to my next adventure:  seeking and finding employment as  Junior Full-Stack Web Developer!</p>
      </div>    
    </section>
  );
}

export default About;