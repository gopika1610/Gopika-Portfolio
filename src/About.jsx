import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-card">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
         I am a frontend developer. I build web interfaces using React, HTML, CSS, JavaScript, and Bootstrap.
        </p>
        <p className="about-text">
           I am currently learning backend technologies: Node.js, Express, and MongoDB to become a full MERN stack developer.
          
        </p>
      </div>
    </section>
  );
}

export default About;
