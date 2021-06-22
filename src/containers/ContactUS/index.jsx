import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import ContactUsImg from "../../assests/pics/contactUs.svg";
import JoinUsForm from "../../components/JoinUSForm";

const ContactUs = () => {
  return (
    <Container fluid className="contactUsCont" expand="lg">
      <Row>
        <Col className="contactUsTitle">
          <h2>Contact Us</h2>
        </Col>
      </Row>
      <Row>
        <Col className="contactUsForm">
          <JoinUsForm />
        </Col>
        <Col className="contactUsImgCont">
          <Image className="contactUsImg" src={ContactUsImg} />
        </Col>
      </Row>
    </Container>
  );
};
export default ContactUs;
