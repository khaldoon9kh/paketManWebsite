import React from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import PaketmanLogo from "../../assests/pics/PaketManWordmark@1X.png";
import "./index.css";
import i18next from "i18next";

const NavBar = ({ handelLang }) => {
  const navsData = [
    {
      navTitle: `${i18next.t("navbar.features")}`,
      navId: "features",
    },
    {
      navTitle: `${i18next.t("navbar.join")}`,
      navId: "joinUs",
    },
    {
      navTitle: `${i18next.t("navbar.faq")}`,
      navId: "faq",
    },
    {
      navTitle: `${i18next.t("navbar.contact")}`,
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
  const handleChange = (lang) => {
    handelLang(lang.target.value);
    location.reload();
  };

  if (localStorage.getItem("language") === "ar") {
    document.body.style.direction = "rtl";
  } else {
    document.body.style.direction = "ltr";
  }

  return (
    <Navbar collapseOnSelect expand="xl" className="navBarStyle">
      <Container className="navBarMainCont">
        <div className="selectLang">
          <select
            onChange={handleChange}
            value={localStorage.getItem("language")}
          >
            <option selected value="en">
              EN
            </option>
            <option value="tr">TR</option>
            <option value="ar">ع</option>
            <option value="ru">Ру</option>
          </select>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Container className="navBarItemContainer">
              <div>
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                  <p>{i18next.t("navbar.main")}</p>
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
