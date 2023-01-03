import React from "react";
import "./Title.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import phold from "../assets/placeholder.jpg";

function Title() {
  return (
    <div className="title-container">
      <img src={phold} className="title-logo" />
      <h1>Ryan Ma</h1>
      <p>
        <a
          style={{ textAlign: "center" }}
          href="mailto:ryanma22303@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ryanma22303@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Title;
