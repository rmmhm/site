import React from 'react';
import './Footer.css';
import Fab from '@mui/material/Fab'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter className='text-center footer' style={{backgroundColor: 'white'}}>
            <MDBContainer className='p-4 pb-0' style={{flexDirection: 'column'}}>
                <h1>Contact Me</h1>
                <br />
                <section className='mb-4'>
                    <a href="https://www.linkedin.com/in/rmmhm" target="_blank" rel="noopener noreferrer">
                        <Fab color='primary' variant='extended'>
                            <LinkedInIcon sx = {{ mr: 1}} />
                            LinkedIn
                        </Fab>
                    </a>
                    <a href="https://www.github.com/rmmhm" target="_blank" rel="noopener noreferrer">
                        <Fab color='primary' variant='extended'>
                            <GitHubIcon sx = {{ mr: 1}} />
                            GitHub
                        </Fab>
                    </a>
                </section>
                <p> 
                    View source on <></>
                    <a href="https://www.github.com/rmmhm/site" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>     
                </p>
            </MDBContainer>
        </MDBFooter>
    )
}

export default Footer;