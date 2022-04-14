import React from 'react';
import headShot from "../../assets/images/headShot.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: 200, height: 200 }} alt="cover" />  */}
      <div className="my-2">
        <p>
        <img src={headShot} className="my-2" style={{ width: "150px" }} alt="cover headshot" />
          Hi!  After filling many roles on my career path, I am currently building and fine-tuning my credentials for full-stack web development.  Through the Ohio State University College of Engineering, I successfully completed the OSU Coding Boot Camp in April 2022.  
        </p>
        <p>In this market-driven curriculum, I focused on many skills and acquired the knowlege to begin my new career path.  Which now leads me to my next adventure:  seeking and finding employment as a Junior Full-Stack Web Developer!</p>  
        
      </div>    
    </section>
  );
}

export default About;