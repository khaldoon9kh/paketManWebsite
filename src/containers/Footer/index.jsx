import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import PaketManLogo from "../../assests/pics/PaketManWordmark@1X.png";
import TMIcon from "../../assests/socialMediaIcon/TD.svg";
import FB from "../../assests/socialMediaIcon/FB";
import INSTA from "../../assests/socialMediaIcon/INSTA";
import LINKEDIN from "../../assests/socialMediaIcon/LINKEDIN";
import YT from "../../assests/socialMediaIcon/YT";
import TIKTOK from "../../assests/socialMediaIcon/TIKTOK";
import privacy_file from "../../assests/privacyfile.pdf";
import terms_file from "../../assests/terms_conditions.pdf";

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
          <a href={privacy_file} target="_blank">
            Privacy Policy
          </a>
          <a href={terms_file} target="_blank">
            Terms & Conditions
          </a>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
