import { useState, useEffect } from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar expand="lg" data-bs-theme="dark" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-3">
            Ghaffar Hadista.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                Home
              </NavLink>
              <NavLink to="/web" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                Website
              </NavLink>
              <NavLink to="/design" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                Design
              </NavLink>
            </Nav>
            <div className="text-center">
              <a className="btn btn-cont btn-outline-info m-3" href="#footer">
                Contact
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
