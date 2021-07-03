import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import MobilePhoto from "../../assests/pics/MobilePhoto.png";
import YellowCercle from "../../assests/pics/yellow-Cercle.svg";
import FBIcon from "../../assests/socialMediaIcon/FB.svg";
import InstaIcon from "../../assests/socialMediaIcon/INSTA.svg";
import YTIcon from "../../assests/socialMediaIcon/YT.svg";
import LinkedInIcon from "../../assests/socialMediaIcon/LinkedIn.svg";
import TikTokIcon from "../../assests/socialMediaIcon/TIKTOK.svg";
import FB from "../../assests/socialMediaIcon/FB";
import INSTA from "../../assests/socialMediaIcon/INSTA";
import LINKEDIN from "../../assests/socialMediaIcon/LINKEDIN";
import YT from "../../assests/socialMediaIcon/YT";
import TIKTOK from "../../assests/socialMediaIcon/TIKTOK";

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
              PaketMan is a food ordering app where you can find the nearby
              restaurants and place an order. The app aim to provide a lot of
              choices for its customers by offering different cuisines that
              would cover all tastes, and give the users the choice of various
              payments and delivery options. After placing the order users can
              rate the service and share their thoughts and so we hope that the
              food industry would get a push forward and become better and
              better.
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
            {/* <Image src={FBIcon} /> */}
            {/* <Image src={InstaIcon} />
            <Image src={YTIcon} />
            <Image src={TikTokIcon} />
            <Image src={LinkedInIcon} /> */}
            <p>/paketmanapp</p>
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
