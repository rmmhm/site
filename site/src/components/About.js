import React from 'react'
import './About.css'
import Slide from 'react-reveal/Slide';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';

import bg2 from "../assets/background.png"

function About() {
    return (
        <div className="about-container">
            <img className="d-block w-100 about-bg" src = {bg2} alt="blue"/>
            <Slide left duration={2000}>
                <div className="about-txt">
                    <Container>
                        <Row>
                            <div className='about-desc'>
                                <h1 className="heading">
                                    About Me
                                </h1>
                                <p>
                                    Lorem Lorem Lorem Lorem
                                    <br />
                                    Lorem Lorem Lorem Lorem
                                    <br />
                                    Lorem Lorem lorem
                                </p>
                            </div>
                        </Row>
                    </Container>
                </div>
            </Slide>
        </div>
    );
}

export default About;