import React from 'react';
import "./Experience.css";
import Slide from 'react-reveal/Slide';
import Card from '@mui/material/Card';

import bg3 from "../assets/background.png"

function Experience() {
    return (
        <div className='exp-container'>
            <img className="d-block w-100 exp-bg" src={bg3} alt="aqua" />
            <Slide right duration={2000}>
                <div className='exp-text'>
                    <h1 className='heading'>
                        Experience
                    </h1>
                    <p>
                        test1
                        test2
                        test3
                    </p>
                </div>
            </Slide>
        </div>
    );
}

export default Experience;