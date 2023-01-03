import React from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  return (
    <div className="proj-cont">
      <Container className="proj-card-cont">
        <Container>
          <h1>My recent work</h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="proj-card">
              <ProjectCard />
            </Col>
            <Col md={4} className="proj-card">
              <ProjectCard />
            </Col>
            <Col md={4} className="proj-card">
              <ProjectCard />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;
