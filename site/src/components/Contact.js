import React from 'react';
import './Contact.css';
import Fab from '@mui/material/Fab'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';

function Contact() {
    return (
        <MDBFooter className='bg-light text-center'>
            <MDBContainer className='p-4 pb-0'>
                <h1>Contact Me</h1>
                <section className='mb-4'>
                    <a href="https://www.linkedin.com/in/rmmhm" target="_blank" rel="noopener noreferrer">
                        <Fab color="primary" variant='extended'>
                            <LinkedInIcon sx = {{ mr: 1}} />
                            LinkedIn
                        </Fab>
                    </a>
                    <a href="https://www.github.com/rmmhm" target="_blank" rel="noopener noreferrer">
                        <Fab color="primary" variant='extended'>
                            <GitHubIcon sx = {{ mr: 1}} />
                            GitHub
                        </Fab>
                    </a>
                </section>
                <p> 
                    View source on 
                    <a href="https://www.github.com/rmmhm/site" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>     
                </p>
            </MDBContainer>
        </MDBFooter>
    )
}

export default Contact;