import React from "react";
import Card from "react-bootstrap/Card";
import IconButton from "@mui/material/IconButton";
import { GitHub } from "@mui/icons-material";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <Card style={{ backgroundColor: "#0d1821" }} className="project-card-view">
      <Card.Img variant="top" src={props.img} alts="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>{props.desc}</Card.Text>
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
          href={props.url}
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
