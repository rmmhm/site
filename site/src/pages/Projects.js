import React from 'react';
import "./Projects.css";
import ProjectCard from '../components/ProjectCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import bg from "../assets/background.jpg"
import { Parallax } from 'react-parallax';

function Projects() {
    return (
        <div className='proj-cont'>
            <img src={bg} className='d-block w-100 projects-bg' alt='blue' />
            <div className='proj-card-cont'>
                <Container>  
                    <h1>My recent work</h1>
                    <br />
                    <Row>
                        <Col>
                            <ProjectCard />
                        </Col>
                        <Col>
                            <ProjectCard />
                        </Col>
                        <Col>
                            <ProjectCard />
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <ProjectCard />
                        </Col>
                        <Col>
                            <ProjectCard />
                        </Col>
                    </Row> */}
                </Container>
            </div>
        </div>
    );
}

export default Projects;