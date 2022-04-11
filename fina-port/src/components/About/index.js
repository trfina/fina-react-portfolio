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
          Hi!  Having experience with many adventures in a variety of realms, I am currently building and fine-tuning my credentials for full-stack web development.</p>
          
          <p>As a former main-frame programmer, I have a foundation in computer languages and job control.  My experience as a network administrator and computer science teacher provided me the oportunity to deliver a positive user experience to students and staff as they applied changing technology to their daily activities.</p>
          
          <p>Through the Ohio State University Colleg of Enginerring, I successfully completed the OSU Coding Boot Camp... </p>

          <p>Which now leads me to my next adventure:  seeking and finding employment as  Junior Full-Stack Web Developer.</p>
      </div>    
    </section>
  );
}

export default About;