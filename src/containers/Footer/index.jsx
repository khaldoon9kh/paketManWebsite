import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import PaketManLogo from "../../assests/pics/PaketManWordmark@1X.png";
import TMIcon from "../../assests/socialMediaIcon/TD.svg";
import FB from "../../assests/socialMediaIcon/FB";
import INSTA from "../../assests/socialMediaIcon/INSTA";
import LINKEDIN from "../../assests/socialMediaIcon/LINKEDIN";
import YT from "../../assests/socialMediaIcon/YT";
import TIKTOK from "../../assests/socialMediaIcon/TIKTOK";

const Footer = () => {
  return (
    <Container fluid className="footerCont" expand="lg">
      <Row>
        <Col className="socialCol">
          <FB />
          <INSTA />
          <YT />
          <TIKTOK />
          <LINKEDIN />
          <p>/paketmanapp</p>
        </Col>
        <Col className="logoCol">
          <Image className="paketManFooterLogo" src={PaketManLogo} />
          <Image className="tMIcon" src={TMIcon} />
        </Col>
        <Col className="policyCol">
          <a
            href="https://docs.google.com/file/d/1Sn1I5EARN0ef63-x_l5CouD_PXmBJm3H/edit?filetype=msword&fbclid=IwAR1bwf98hOe2_0WQWrLOl4v7xznzbUCea32HZuWP7cNFzfUNStAHj41jDfg"
            target="_blank"
          >
            <p>Privacy Policy</p>
          </a>
          <p>Privacy Policy</p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
