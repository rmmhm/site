import React, { useState, useEffect } from "react";
import "./Resume.css";
import Container from "raect-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Document, Page } from "@react-pdf";
import pdf from "../assets/2023 resume.pdf";
const resumePath =
  "https://raw.githubusercontent.com/rmmhm/site/site/src/assets/2023_resume.pdf";

function Resume() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume-container">
      <Container className="resume-content">
        <h1>Resume</h1>
        <Row>
          <Document file={resumePath} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
