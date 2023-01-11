import React, { useEffect } from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import IconButton from "@mui/material/IconButton";
import { GitHub, LinkedIn } from "@mui/icons-material";

const icons = [
  {
    icon: <GitHub />,
    key: "GitHub",
    url: "https://github.com/rmmhm",
  },
  {
    icon: <LinkedIn />,
    key: "LinkedIn",
    url: "https://www.linkedin.com/in/rmmhm/",
  },
];

let headerVariant = {};
const isMobile = window.innerWidth < 768;
if (!isMobile) {
  headerVariant = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.75 } },
    hidden: { opacity: 0, scale: 1, y: 50, transition: { duration: 0.75 } },
  };
}

function Header() {
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
    <div id="home" className="header-container">
      <Container fluid>
        <Row>
          <motion.div
            ref={ref}
            variants={headerVariant}
            initial="hidden"
            animate={control}
          >
            <h1>Ryan Ma</h1>
          </motion.div>
        </Row>
        <Row>
          <motion.div
            ref={ref}
            variants={headerVariant}
            initial="hidden"
            animate={control}
          >
            <h2>CS @ Georgia Tech | Full Stack Dev</h2>
          </motion.div>
        </Row>
        <Row>
          <Col className="header-icons">
            <motion.div
              ref={ref}
              variants={headerVariant}
              initial="hidden"
              animate={control}
            >
              {icons.map(({ url, key, icon }) => (
                <IconButton
                  key={key}
                  sx={{
                    color: "rgba(255, 255, 255, 0.6)",
                    margin: "1rem",
                    ":hover": {
                      color: "white",
                    },
                    "@media (max-width: 500px)": {
                      margin: "0.5rem",
                    },
                  }}
                  href={url}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  aria-label={key + "Profile"}
                >
                  {icon}
                </IconButton>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
