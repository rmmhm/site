import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import IconButton from "@mui/material/IconButton";
import { GitHub } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer-container">
      <Container fluid>
        <Row style={{ textAlign: "center" }}>
          <Col>
            View source on
            <IconButton
              key={"Source"}
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
              href={"https://github.com/rmmhm/site"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              aria-label={"Source Code"}
            >
              <GitHub />
            </IconButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
