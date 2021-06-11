import React, { useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import PaketmanLogo from '../../assests/pics/PaketManWordmark@1X.png';
import "./index.css"; 

const NavBar = () => {
    return(
        <Navbar expand="lg" sticky="top" className="navBarStyle">
  <Navbar.Brand href="#home">
      <Image 
      src={PaketmanLogo} 
      className="paketManLogo"
      alt="PaketMan Logo"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" id='navBarItems'>
      <Nav.Link >Features</Nav.Link>
      <Nav.Link >Join Us</Nav.Link>
      <Nav.Link >FAQ</Nav.Link>
      <Nav.Link >Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default NavBar;