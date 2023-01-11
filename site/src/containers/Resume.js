import React, { useState, useEffect } from "react";
import "./Resume.css";
import { Container, Row, Button } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/2023resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [width, setWidth] = useState(1000);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume-container">
      <Container>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Button
            variant="light"
            size="lg"
            style={{ maxWidth: "300px" }}
            href={pdf}
            target="_blank"
          >
            Download Resume
          </Button>
        </Row>
        <br />
        <Row className="resume-content">
          <Document file={pdf} className="d-flex justify-content-center resume">
            <Page pageNumber={1} scale={width > 768 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
