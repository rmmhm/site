import React from "react";
import Card from "react-bootstrap/Card";
import IconButton from "@mui/material/IconButton";
import { GitHub } from "@mui/icons-material";
import "./ProjectCard.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

function ProjectCard(props) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(x, [0, 1], [-8, 8], {
    clamp: true,
  });
  const rotateY = useTransform(y, [0, 1], [8, -8], {
    clamp: true,
  });
  const transformPerspective = 1500;

  function onMove(e) {
    const bounds = e.currentTarget.getBoundingClientRect();
    const xVal = (e.clientX - bounds.x) / e.currentTarget.clientWidth;
    const yVal = (e.clientY - bounds.y) / e.currentTarget.clientHeight;
    x.set(xVal, true);
    y.set(yVal, true);
  }

  return (
    <motion.div
      onPointerMove={onMove}
      style={{ transformPerspective, rotateX, rotateY }}
    >
      <Card
        id="project-card"
        style={{ backgroundColor: "#0d1821" }}
        className="project-card-view"
      >
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
    </motion.div>
  );
}

export default ProjectCard;
