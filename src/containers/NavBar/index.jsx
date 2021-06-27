import React from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import PaketmanLogo from "../../assests/pics/PaketManWordmark@1X.png";
import "./index.css";

const NavBar = () => {
  const navsData = [
    {
      navTitle: "Features",
      navId: "features",
    },
    {
      navTitle: "Join Us",
      navId: "joinUs",
    },
    {
      navTitle: "FAQ",
      navId: "faq",
    },
    {
      navTitle: "Contact Us",
      navId: "contactUs",
    },
  ];

  const NavItemsCell = ({ navTitle, navId }) => {
    return (
      <div>
        <Link to={navId} spy={true} smooth={true}>
          <p>{navTitle}</p>
        </Link>
      </div>
    );
  };

  return (
    <Navbar collapseOnSelect expand="xl" className="navBarStyle">
      <Container className="navBarMainCont">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Container className="navBarItemContainer">
              <div>
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                  <p>Main Page</p>
                </Link>
              </div>
              {navsData.map((data, index) => (
                <NavItemsCell
                  navId={data.navId}
                  navTitle={data.navTitle}
                  key={index}
                />
              ))}
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
