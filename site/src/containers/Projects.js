import React from "react";
import "./Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="proj-container">
      <Container className="proj-content">
        <Row>
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
    </div>
  );
}

export default Projects;
