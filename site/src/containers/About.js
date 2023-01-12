import React, { useEffect } from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const aboutLeftVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1, x: -200, transition: { duration: 0.75 } },
};

const aboutRightVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1, x: 200, transition: { duration: 0.75 } },
};
const isMobile = window.innerWidth < 768;

function About() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div id="about" className="about-container">
      <Container className="about-content">
        <motion.div
          ref={ref}
          variants={aboutLeftVariant}
          initial="hidden"
          animate={control}
        >
          <Row>
            <Col>
              <h1>Hello!</h1>
              <p>
                I'm a CS student at Georgia Tech specializing in artifical
                intelligence and systems+architecture.
                <br />
                <br />
                I'm currently a software engineer intern at Unfound, a startup
                based in Northwestern University. You can check them out <></>
                <a
                  href="https://unfound.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here!
                </a>
                <br />
                <br />
                I'm always looking to learn new technologies and to work on cool
                stuff!
              </p>
            </Col>
            <Col md={2}>
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
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}

export default About;
