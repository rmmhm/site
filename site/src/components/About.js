import React from 'react'
import './About.css'
import Slide from 'react-reveal/Slide';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bg2 from "../assets/background.png"

function About() {
    return (
        <div className='about-container'>
            <img className='d-block w-100 about-bg' src={bg2} alt='blue' />
            <div className='about-txt-container'>
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                Who am I?
                            </h1>
                            <p className='about-txt'>
                                I am a 2nd-year CS student at Georgia Tech, specializing in artificial intelligence and systems+architecture
                                <br />
                                <br />
                                I have experience in Java and Javascript, and in modern frameworks like React and Node
                                <br />
                                <br />
                                I'm always looking to learn new technologies and work on cool stuff!
                            </p>
                        </Col>
                        <Col>
                            Dog Image
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default About;