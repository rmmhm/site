import React from 'react';
import './Title.css'

import bg1 from "../assets/background.png";

function Title() {
    return (
        <div className = "title-container">
            <img className="d-block w-100 title-bg" src={bg1} alt="sky"></img>
            <div className = 'title-txt'>
                <div className = "name">
                    Ryan Ma
                </div>
            </div>
        </div>
    )
}

export default Title;