import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div className="about-container">
      <Container className="about-content">
        <Row>
          <Col>
            <h1>About Text</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
