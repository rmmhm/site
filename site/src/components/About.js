import React from "react";
import "./About.css";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import phold from "../assets/placeholder.jpg";

function About() {
  return (
    <div className="about-cont">
      <Slide left duration={1750}>
        <Container fluid className="about-txt-cont">
          <Row>
            <Col className="about-txt">
              <h1>Who am I?</h1>
              <br />
              <p className="about-p">
                I am a 2nd-year CS student at Georgia Tech, specializing in
                artificial intelligence and systems+architecture
                <br />
                <br />
                I have experience in Java and Javascript, and in modern
                frameworks like React and Node
                <br />
                <br />
                I'm always looking to learn new technologies and work on cool
                stuff!
              </p>
            </Col>
            <Col className="dog-img">
              <img src={phold} className="img-fluid" alt="dog" />
            </Col>
          </Row>
        </Container>
      </Slide>
    </div>
  );
}

export default About;
