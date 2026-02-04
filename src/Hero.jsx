import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div
      className="hero-container text-white"
      style={{
        backgroundImage: "url('/computer2.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* NAVBAR */}
      <nav className="navbar px-5 pt-4">
        <div className="logo-name">GOPIKA S</div>
        <div className="nav-links">
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink> 
         
         <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>
  Skills
</NavLink>

          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="hero-content px-5">
        <div className="glass-card">
          <h1>
            Hii—I'm <span>Gopika S</span>
          </h1>
          <p>
            I build clean, responsive web apps using HTML, CSS, JavaScript,
            React, and Bootstrap.
          </p>
          <button className="role-btn">Software Developer</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
