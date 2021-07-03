import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import ContactUsImg from "../../assests/pics/contactUs.svg";
import JoinUsForm from "../../components/JoinUSForm";

const ContactUs = () => {
  return (
    <Container id="contactUs" fluid className="contactUsCont" expand="lg">
      <Row className="contactUsTitleRow">
        <h2 className="contactUsTitle">Contact Us</h2>
      </Row>
      <Row>
        <Col className="contactUsImgCont">
          <Image className="contactUsImg" src={ContactUsImg} />
        </Col>
        <Col className="contactUsForm">
          <JoinUsForm />
        </Col>
      </Row>
    </Container>
  );
};
export default ContactUs;
