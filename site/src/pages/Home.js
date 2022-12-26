import React, { useEffect } from 'react';
import './Home.css';
import Title from "../components/Title";
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import { Parallax } from 'react-parallax';

function Home() {
    useEffect(() => {
        document.title = "Ryan Ma";
    }, []);

    return (
        <div>
            <Title />
            <Parallax
             blur={{ min: -30, max: 30}}
             strength={-200}
             >   
                <div>
                    <About />
                </div>
                <div>
                    <Experience />
                </div>
                <div>
                    <Contact />
                </div>
             </Parallax>
        </div>
    )
}

export default Home;