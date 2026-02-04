import React, { useEffect, useState } from "react";
import "./Services.css"; // We'll add CSS separately

const Services = () => {
  const expertise = [
    {
      title: "HTML & CSS",
      desc: "Clean, responsive layouts using HTML, modern CSS, and Bootstrap.",
    },
    {
      title: "JavaScript & React",
      desc: "Interactive web applications with React, hooks, and state management.",
    },
    {
      title: "Frontend Optimization",
      desc: "Performance-focused development, smooth animations, and UX improvements.",
    },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("services");
      if (section.getBoundingClientRect().top < window.innerHeight - 100) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // check on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="services" className="py-5 text-center bg-dark">
      <h2 className="mb-4 text-info">My Expertise</h2>
      <div className={`services-grid ${visible ? "fade-in" : ""}`}>
        {expertise.map((item, index) => (
          <div key={index} className="card neon-card p-4 service-card">
            <h5>{item.title}</h5>
            <p className="text-secondary">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
