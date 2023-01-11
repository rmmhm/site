import React from "react";
import "./Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

import phol from "../assets/placeholder.jpg";

const projs = [
  {
    title: "Projecct One",
    desc: "This is the description for Project One, with some more text to see how the formatting would look with a longer description",
    imgPath: phol,
    projUrl: "https://github.com/rmmhm",
  },
  {
    title: "Project Two",
    desc: "This is the description for Project Two, with some more text to see how the formatting would look with a longer description",
    imgPath: phol,
    projUrl: "https://github.com/rmmhm",
  },
  {
    title: "Project Three",
    desc: "This is the description for Project Three, with some more text to see how the formatting would look with a longer description",
    imgPath: phol,
    projUrl: "https://github.com/rmmhm",
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
