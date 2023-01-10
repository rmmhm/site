import React from "react";
import "./Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="proj-container">
      <Container className="proj-content">
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="proj-card">
            <ProjectCard
              title="Project Yes"
              desc="This is the description for Project Yes"
            />
          </Col>
          <Col md={4} className="proj-card">
            <ProjectCard
              title="Project No"
              desc="This is the description for Project No"
            />
          </Col>
          <Col md={4} className="proj-card">
            <ProjectCard
              title="Project Maybe"
              desc="This is the description for Project Maybe"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
