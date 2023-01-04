import React from "react";
import "./Projects.css";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <div className="proj-container">
      <Container className="proj-content">
        <Row>
          <Col>
            <h1>Proj text</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
