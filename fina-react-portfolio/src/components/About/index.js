import React from 'react';
import coverImage from "../../assets/cover/gardenOrigin.jpg";

function About() {
  
  return (
    <section className="my-5">
      <h1 id="about">Spring is Here!</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>What to do.. what to do...
        </p>
      </div>
    </section>
  );
}

export default About;