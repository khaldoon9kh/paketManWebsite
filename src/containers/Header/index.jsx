import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import MobilePhoto from "../../assests/pics/MobilePhoto.png";
import FB from "../../assests/socialMediaIcon/FB";
import INSTA from "../../assests/socialMediaIcon/INSTA";
import LINKEDIN from "../../assests/socialMediaIcon/LINKEDIN";
import YT from "../../assests/socialMediaIcon/YT";
import TIKTOK from "../../assests/socialMediaIcon/TIKTOK";
import i18next from "i18next";

const Header = () => {
  return (
    <Container id="home" fluid className="headerContainer" expand="lg">
      <Row className="headerMainRow">
        <Col className="headerTextCol" xs={10} md={6}>
          <Col className="headerTitleCol">
            <h1 className="headerTitle">PaketMan</h1>
          </Col>
          <Col>
            <p className="headerBody">
              <p>{i18next.t("header")}</p>
              <p>{i18next.t("header_2")}</p>
              <p>{i18next.t("header_3")}</p>
            </p>
          </Col>
          <Col className="downloadLinks">
            <a
              href="https://apps.apple.com/us/app/paketman-food-ordering-app/id1553619875"
              target="_blank"
            >
              <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.paketmanapp&hl=en_US&gl=US"
              target="_blank"
            >
              <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
            </a>
          </Col>
          <Col className="socialmediaLinks">
            <FB />
            <INSTA />
            <YT />
            <TIKTOK />
            <LINKEDIN />
            <p>/paketmanapp</p>
          </Col>
        </Col>
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
