import React from "react";
import "./Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

import temp from "../assets/placeholder.jpg";

const projs = [
  {
    title: "TravelPal",
    desc: "An AI trip advertiser that recommends restaurants, attractions, etc. near input coordinates.",
    imgPath: temp,
    projUrl: "https://github.com/rmmhm/TravelPal",
  },
  {
    title: "GoalArena",
    desc: "A productivity app that allows users to plan out their tasks on a calendar, compete with friends to earn points from completing tasks, and read an AI daily digest.",
    imgPath: temp,
    projUrl: "https://github.com/rmmhm/GoalArena",
  },
];

function Projects() {
  return (
    <div id="projects" className="proj-container">
      <Container className="proj-content">
        <h1>Projects I've worked on</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projs.map(({ title, desc, imgPath, projUrl }) => (
            <Col md={4} className="proj-card">
              <ProjectCard
                title={title}
                desc={desc}
                img={imgPath}
                url={projUrl}
              ></ProjectCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
