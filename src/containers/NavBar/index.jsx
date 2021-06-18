import React, { useState } from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import PaketmanLogo from '../../assests/pics/PaketManWordmark@1X.png';
import "./index.css"; 

const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg"  className="navBarStyle" >
          <Container className='navBarMainCont'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Container id='navBarItems'> */}
          <Nav className="mr-auto">
            <Container className="navBarItemContainer">
              <Nav.Link >Main Page</Nav.Link>
              <Nav.Link >Features</Nav.Link>
              <Nav.Link >Join Us</Nav.Link>
              <Nav.Link >FAQ</Nav.Link>
              <Nav.Link >Contact Us</Nav.Link>
            </Container>
           </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className='logoContainer' href="#home">
            <Image 
            src={PaketmanLogo} 
            className="paketManLogo"
            alt="PaketMan Logo"/>
          </Navbar.Brand>
          </Container>
     </Navbar>
    );
};

export default NavBar;