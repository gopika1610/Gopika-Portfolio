import "./Skill.css";
function Skill(){
    return(
<section className="skills-section" id="skills">
  <div className="skills-container">
    <h2>
      My <span>Skills</span>
    </h2>
    <p className="skills-sub">
      Technologies I use to build clean, responsive and scalable web applications.
    </p>

    <div className="skills-grid">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>React</span>
      <span>Bootstrap</span>
      <span>Node.js</span>
      <span>Express.js</span>
      <span>MongoDB</span>
         <span>My SQL</span>
      <span>Git & GitHub</span>
    </div>  
  </div>
</section>
    )
}
export default Skill;