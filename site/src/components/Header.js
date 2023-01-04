import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";

import IconButton from "@mui/material/IconButton";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";

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
    <div className="header-cont" id="home">
      <Container className="header-txt-cont">
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
