import React, { useState } from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import PaketmanLogo from "../../assests/pics/PaketManWordmark@1X.png";
import "./index.css";

const NavBar = () => {
  // const anchor = document.querySelector('#some-id')
  // anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })

  return (
    <Navbar sticky="top" collapseOnSelect expand="xl" className="navBarStyle">
      <Container className="navBarMainCont">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Container className="navBarItemContainer">
              <div>
                <p>Main Page</p>
              </div>
              <div>
                <p>Features</p>
              </div>
              <div>
                <p>Join Us</p>
              </div>
              <div>
                <p>FAQ</p>
              </div>
              <div>
                <p>Contact Us</p>
              </div>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Navbar.Brand className="logoContainer" href="#home">
        <Image
          src={PaketmanLogo}
          className="paketManLogo"
          alt="PaketMan Logo"
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
