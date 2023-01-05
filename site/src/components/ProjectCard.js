import React from "react";
import Card from "react-bootstrap/Card";
import IconButton from "@mui/material/IconButton";
import { GitHub } from "@mui/icons-material";
import "./ProjectCard.css";

import phol from "../assets/placeholder.jpg";

function ProjectCard(props) {
  return (
    <Card style={{ backgroundColor: "#0d1821" }} className="project-card-view">
      <Card.Img variant="top" src={phol} alts="card-img" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          This is where I will describe the project
        </Card.Text>
        <IconButton
          key={"proj"}
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
          href={"https://github.com/rmmhm"}
          target={"_blank"}
          rel={"noopener noreferrer"}
          aria-label={"Proj Profile"}
        >
          <GitHub />
        </IconButton>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
