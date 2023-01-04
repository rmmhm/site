import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div className="app__about app__flex">
      <Container className="about-cont">
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
