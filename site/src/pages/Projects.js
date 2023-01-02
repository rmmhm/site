import React from 'react';
import "./Projects.css";
import Slide from 'react-reveal/Slide';
import Card from '@mui/material/Card';

import bg3 from "../assets/background.png"

function Experience() {
    return (
        <div className='pro-container'>
            <img className="d-block w-100 pro-bg" src={bg3} alt="aqua" />
            <Slide right duration={2000}>
                <div className='pro-text'>
                    <Card>
                        <h1 className='heading'>
                            Experience
                        </h1>
                        <p>
                            test1
                            test2
                            test3
                        </p>
                    </Card>
                </div>
            </Slide>
        </div>
    );
}

export default Experience;