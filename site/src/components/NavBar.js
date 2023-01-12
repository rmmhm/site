import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";

import logo from "../assets/logo.png";

function NavBar() {
  const [expand, updateExpand] = useState(false);
  const [navsticky, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navsticky ? "sticky" : "navbar"}
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
              <HashLink
                smooth
                to="/site#home"
                onClick={() => updateExpand(false)}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Home
              </HashLink>
            </Nav.Item>
            <Nav.Item>
              <HashLink
                smooth
                to="/site#about"
                onClick={() => updateExpand(false)}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                About
              </HashLink>
            </Nav.Item>
            <Nav.Item>
              <HashLink
                smooth
                to="/site#projects"
                onClick={() => updateExpand(false)}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Projects
              </HashLink>
            </Nav.Item>
            <Nav.Item>
              <HashLink
                smooth
                to="/site#resume"
                onClick={() => updateExpand(false)}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Resume
              </HashLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
