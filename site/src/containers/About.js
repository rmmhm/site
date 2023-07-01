import React, { useEffect } from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const aboutVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 1, x: -200, transition: { duration: 0.7 } },
};

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
          variants={aboutVariant}
          initial="hidden"
          animate={control}
        >
          <Row>
            <Col>
              <h1>Hello!</h1>
              <br />
              <p>
                I'm a CS student at Georgia Tech specializing in artifical
                intelligence and systems+architecture.
                <br />
                <br />
                I'm currently a software engineer intern at MarketAxess,
                on the Automation team. You can check them out <></>
                <a
                  href="https://www.marketaxess.com/trade/auto-execution"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here!
                </a>
                <br />
                <br />
                Other than all the tech stuff, I love video games, running,
                reading Wikipedia movie plot summaries (I know), and spending
                time with my s/o, friends, and family./
                <br />
                <br />
                <br />
                <a
                  href="https://www.op.gg/summoners/na/lyhea"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dont click me
                </a>
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
                <li>Svelte (Learning!)</li>
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
