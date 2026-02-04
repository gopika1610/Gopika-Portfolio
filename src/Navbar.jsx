function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">Gopika</a>
        <div>
          <a className="nav-link d-inline text-white" href="#about">About</a>
          <a className="nav-link d-inline text-white ms-3" href="#lab">Lab</a>
          <a className="nav-link d-inline text-white ms-3" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
