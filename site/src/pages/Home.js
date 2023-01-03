import React from "react";
import "./Home.css";
import Title from "../components/Title";
import About from "../components/About";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import phol from "../assets/placeholder.jpg";

function Home() {
  return (
    <section>
      <Container fluid className="home-cont">
        <Container className="home-title">
          <Row>
            <Col>
              <img src={phol} className="d-block mx-auto home-logo" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Ryan Ma</h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;
