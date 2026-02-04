import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const MyNavbar = () => (
  <Navbar expand="lg" variant="dark" className="px-5 py-3">
    <Navbar.Brand href="#">Portfolio.</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
        <Nav.Link href="#about" className="text-white">About</Nav.Link>
        <Nav.Link href="#services" className="text-white">Services</Nav.Link>
        <Nav.Link href="#projects" className="text-white">Portfolio</Nav.Link>
        <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;
