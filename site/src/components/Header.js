import React from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

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

function Header() {
  return (
    <div className="app__header app__flex">
      <Container className="header-cont">
        <Row>
          <Fade bottom>
            <h1>Ryan Ma</h1>
          </Fade>
        </Row>
        <Row>
          <Fade bottom>
            <h2>CS @ Georgia Tech | Full Stack Dev</h2>
          </Fade>
        </Row>
        <Row>
          <Col className="header-icons">
            <Fade bottom>
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
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
