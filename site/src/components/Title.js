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
                <p>
                    <a style={{textAlign: 'center'}} href='mailto:ryanma22303@gmail.com' target='_blank'>
                        ryanma22303@gmail.com
                    </a>   
                </p>

            </div>
        </div>
    )
}

export default Title;