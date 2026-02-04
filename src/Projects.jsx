

import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio built with React, HTML, CSS, and Bootstrap.",
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "E-commerce frontend built with React, including cart functionality and interactive UI.",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A productivity web app with drag & drop and timer features.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
