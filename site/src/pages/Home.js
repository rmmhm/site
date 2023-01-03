import React, { useEffect } from "react";
import "./Home.css";
import Title from "../components/Title";
import About from "../components/About";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import phol from "../assets/placeholder.jpg";

function Home() {
  useEffect(() => {
    document.title = "Ryan Ma";
  }, []);

  return (
    <div className="home-cont">
      <Container className="home-title-cont">
        <Container>
          <Row>
            <Col className="m-auto">
              <img src={phol} className="d-block mx-auto home-logo" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Ryan Ma</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <a
                  style={{ textAlign: "center" }}
                  href="mailto:ryanma22303@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ryanma22303@gmail.com
                </a>
              </p>
            </Col>
          </Row>
        </Container>
        <About />
      </Container>
    </div>
  );
}

export default Home;
