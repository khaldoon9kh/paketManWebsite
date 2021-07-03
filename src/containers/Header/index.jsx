import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import MobilePhoto from "../../assests/pics/MobilePhoto.png";
import YellowCercle from "../../assests/pics/yellow-Cercle.svg";
import Fries from "../../assests/fries.svg";

const Header = () => {
  return (
    <Container id="home" fluid className="headerContainer" expand="lg">
      <Row className="headerMainRow">
        <Col className="headerTextCol" xs={10} md={6}>
          <div className="headerTitleCol">
            <h1 className="headerTitle">PaketMan</h1>
          </div>
          <Col>
            <p className="headerBody">
              Lorem ipsum dolor sit amet, consectetuer adip- iscing elit, sed
              diam nonummy nibh euismod tinci- dunt ut laoreet dolore magna
              aliquam erat volut- pat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignis
            </p>
          </Col>
          <Col className="downloadLinks">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"/>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'/>
          </Col>
        </Col>
        {/* <Image className='friesImg' src={Fries}/> */}
        <Col className="headerImg" xs={6} md={4}>
          <Image
            src={MobilePhoto}
            className="mobilePhoto"
            alt="mobile showing PaketMan App"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
