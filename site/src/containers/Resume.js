import React, { useState, useEffect } from "react";
import "./Resume.css";
import { Container, Row, Button } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/2023resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [width, setWidth] = useState(1000);
  function handleResize() {
    if (window.innerWidth <= 768) {
      setWidth(750);
    } else {
      setWidth(1000);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  function onButtonClick() {
    fetch("../assets/2023resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "2023resume.pdf";
        alink.click();
      });
    });
  }

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
            onClick={onButtonClick}
          >
            Download Resume
          </Button>
        </Row>
        <br />
        <Row className="resume-content">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 768 ? 1.7 : 1.2} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
