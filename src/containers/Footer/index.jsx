import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import PaketManLogo from "../../assests/pics/PaketManWordmark@1X.png";
import FBIcon from "../../assests/socialMediaIcon/FB.svg";
import InstaIcon from "../../assests/socialMediaIcon/INSTA.svg";
import YTIcon from "../../assests/socialMediaIcon/YT.svg";
import LinkedInIcon from "../../assests/socialMediaIcon/LinkedIn.svg";
import TikTokIcon from "../../assests/socialMediaIcon/TIKTOK.svg";
import TMIcon from "../../assests/socialMediaIcon/TD.svg";

const Footer = () => {
  return (
    <Container fluid className="footerCont" expand="lg">
      <Row>
        <Col className="socialCol">
          <Image src={FBIcon} />
          <Image src={InstaIcon} />
          <Image src={YTIcon} />
          <Image src={TikTokIcon} />
          <Image src={LinkedInIcon} />
          <p>/paketmanapp</p>
        </Col>
        <Col className="logoCol">
          <Image className="paketManFooterLogo" src={PaketManLogo} />
          <Image className="tMIcon" src={TMIcon} />
        </Col>
        <Col className="policyCol">
          <p>Privacy Policy</p>
          <p>Privacy Policy</p>
          <p>Privacy Policy</p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
