import React from "react";
import "./ProjectCard.css";
import Card from "react-bootstrap/Card";
import GitHubIcon from "@mui/icons-material/GitHub";
import Fab from "@mui/material/Fab";

import phol from "../assets/placeholder.jpg";

function ProjectCard(props) {
  return (
    <Card className="proj-card">
      <Card.Img variant="top" src={phol} alt="card-img" />
      <Card.Body className="text-center">
        <Card.Title>test title</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          test text text text
        </Card.Text>
        <a
          href="https://www.github.com/rmmhm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fab color="primary" size="medium">
            <GitHubIcon />
          </Fab>
        </a>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
