import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./NavBar.css";

import logo from "../assets/logo.png";

function NavBar() {
  const [expand, updateExpand] = useState(false);
  const [blur, updateBlur] = useState(false);

  function showNavbar() {
    if (window.scrollY >= 40) {
      updateBlur(true);
    } else {
      updateBlur(false);
    }
  }

  window.addEventListener("scroll", showNavbar);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={blur ? "sticky" : "navbar"}
    >
      <Container style={{ flexDirection: "row" }}>
        <Navbar.Brand href="/site" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpand(expand ? false : "expanded");
          }}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#home"
                onClick={() => updateExpand(false)}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#about"
                onClick={() => updateExpand(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#projects"
                onClick={() => updateExpand(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#resume"
                onClick={() => updateExpand(false)}
              >
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
