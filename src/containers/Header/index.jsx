import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import MobilePhoto from "../../assests/pics/MobilePhoto.png";
import YellowCercle from "../../assests/pics/yellow-Cercle.svg";

const Header = () => {
  return (
    <Container fluid className="headerContainer" expand="lg">
      <Container className="itemsContainer">
        <Row className="headerMainRow">
          <Col className="headerText">
            <Row>
              <Col>
                <h1 className="headerTitle">PaketMan</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="headerBody">
                  Lorem ipsum dolor sit amet, consectetuer adip- iscing elit,
                  sed diam nonummy nibh euismod tinci- dunt ut laoreet dolore
                  magna aliquam erat volut- pat. Ut wisi enim ad minim veniam,
                  quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                  ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignis
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="headerImg">
            <Image
              src={MobilePhoto}
              className="mobilePhoto"
              alt="mobile showing PaketMan App"
            />
            <svg className="yellowCercle">{YellowCercle}</svg>
            {/* <div className='yellowCercle'>
                    </div> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Header;
