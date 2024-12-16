import React, { useState, useEffect } from "react";
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
  // const [rating, setRating] = useState(0);

  // async function getRating() {
  //   const data = await fetch(
  //     "https://codeforces.com/api/user.info?handles=lyhea"
  //   );
  //   const res = await data.json();
  //   console.log(res);
  //   if (res.status === "OK") {
  //     setRating(res.result[0].rating);
  //   }
  // }

  useEffect(() => {
    // getRating();
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
              <br />
              <h1>Hello!</h1>
              <br />
              <p>
                I'm a MS CS student at Georgia Tech specializing in interactive
                intelligence.
                <br />
                I was previously a BS CS student at Georgia Tech specializing in
                artificial intelligence and systems+architecture
                <br />
                <br />
                former SWE intern at <></>
                <a
                  href="https://flatiron.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flatiron Health
                </a>
                !{/* <br /> */}
                {/* <br />
                I'm currently getting into competitive programming and ICPC.
                <br />
                currently at{" "}
                <a
                  href="https://codeforces.com/profile/lyhea"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: "bold" }}
                >
                  {rating}
                </a>{" "}
                rating */}
                <br />
                <br />
                Other than all the tech and work stuff, I love video games,
                running, reading Wikipedia movie plot summaries (I know), and
                spending time with my s/o, friends, and family.
                <br />
                <br />
                I also am a Challenger mid + adc and play for the Georgia Tech
                Competitive League of Legends team, which mainly competes in
                Riot Games' CLOL as well as amateur leagues and tournaments.
                <br />
                <a
                  href="https://www.op.gg/summoners/na/lyhea"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  opgg
                </a>
              </p>
            </Col>
            <Col md={2}>
              <br />
              <h2>
                <b>Languages</b>
              </h2>
              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>C++</li>
                <li>C#</li>
                <li>C</li>
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
