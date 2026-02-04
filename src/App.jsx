
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import About from "./About";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="hero" element={<Hero />} />          
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />  
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
