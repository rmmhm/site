import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div className="about-container">
      <Container className="about-content">
        <Row>
          <Col>
            <Fade left>
              <h1>Hello!</h1>
              <p>
                I'm a CS student at Georgia Tech specializing in artifical
                intelligence and systems+architecture.
                <br />
                <br />
                I'm always looking to learn new technologies and to work on cool
                stuff!
              </p>
            </Fade>
          </Col>
          <Col md={2}>
            <Fade right>
              <h2>
                <b>Languages</b>
              </h2>
              <ul>
                <li>Java</li>
                <li>Javascript</li>
                <li>Python</li>
              </ul>
              <h2>
                <b>Frameworks</b>
              </h2>
              <ul>
                <li>React</li>
                <li>Express</li>
                <li>Node</li>
              </ul>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
