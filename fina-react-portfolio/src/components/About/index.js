import React from 'react';
import coverImage from "../../assets/cover/gardenOrigin.jpg";

function About() {
  
  return (
    <section className="my-5">
      <h1 id="about">About Tammy Fina</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>As a former programmer, and a math/computer science teacher, I am looking forward
to beginning a new career in full-stack development.  A soon to be graduate of the Ohio State University Full-Stack bootcamp, I am looking for opportunities remotely or in the Columbus, Ohio area.       </p>
      </div>
    </section>
  );
}

export default About;