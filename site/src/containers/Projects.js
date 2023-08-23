import React from "react";
import "./Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

import temp from "../assets/placeholder.jpg";
import pulse from "../assets/movie.jpg";
import jeop from "../assets/jeopardy.webp";

const projs = [
  {
    title: "Museview",
    desc: "A Letterboxd-inspired site for rating music, very WIP! Learning Svelte along the way.",
    imgPath: temp,
    projUrl: "https://github.com/rmmhm/museview"
  },
  {
    title: "Pulse+",
    desc: "A movie and restaurant/recipe recommender, utilizing the NYT movie, Yelp, and Edamam APIs respectively. Completed as a group project in one week.",
    imgPath: pulse,
    projUrl: "https://github.com/pak-plau/PulsePlus_v2",
  },
  {
    title: "Jeopardy Game",
    desc: "2-player web Jeopardy game using the Open Trivia DB API. Completed as a group project in one month. ",
    imgPath: jeop,
    projUrl: "https://github.com/rmmhm",
  },
  // {
  //   title: "Bill Splitter",
  //   desc: "Bill splitting application for outtings with friends, coworkers, etc. Usable in any US state! In progress <3",
  //   imgPath: phol,
  //   projUrl: "https://github.com/rmmhm",
  // },
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
