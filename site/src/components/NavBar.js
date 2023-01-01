import React, {useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    const [expand, updateExpand] = useState(false);
    const [blur, updateBlur] = useState(false);

    function showNavbar() {
        if (window.scrollY >= 20) {
            updateBlur(true);
        }
        else {
            updateBlur(false);
        }
    }

    window.addEventListener('scroll', showNavbar)

    return (
        <Navbar
            expanded={expand}
            fixed='top'
            expand='md'
            className={blur ? "sticky" : "navbar"}
        >
            <Container style={{flexDirection: 'row'}}>
                <Navbar.Brand href='/site' className='d-flex'>
                    RM
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls='responsive-navbar-nav'
                    onClick={() => {
                        updateExpand(expand ? false : "expanded")
                    }}
                >
                    <span />
                    <span />
                    <span />
                </Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto' defaultActiveKey='#home'>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/site' onClick={() => updateExpand(false)}>
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/site/about' onClick={() => updateExpand(false)}>
                                About
                            </Nav.Link>
                        </Nav.Item>
                         <Nav.Item>
                            <Nav.Link as={Link} to='/site/projects' onClick={() => updateExpand(false)}>
                                Projects
                            </Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                            <Nav.Link as={Link} to='/site/resume' onClick={() => updateExpand(false)}>
                                Resume
                            </Nav.Link>
                         </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;