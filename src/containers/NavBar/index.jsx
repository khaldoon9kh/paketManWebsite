import React, { useState } from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import PaketmanLogo from '../../assests/pics/PaketManWordmark@1X.png';
import "./index.css"; 

const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" sticky="top" className="navBarStyle" >
          <Container className="navBarContainer">
          <Navbar.Brand href="#home">
            <Image 
            src={PaketmanLogo} 
            className="paketManLogo"
            alt="PaketMan Logo"/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Container id='navBarItems'> */}
          <Nav className="mr-auto">
      <Nav.Link >
        Features
        </Nav.Link>
      <Nav.Link >Join Us</Nav.Link>
      <Nav.Link >FAQ</Nav.Link>
      <Nav.Link >Contact Us</Nav.Link>
    </Nav>
    {/* </Container> */}
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavBar;