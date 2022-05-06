import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import ContactUsImg from "../../assests/pics/contactUs.svg";
import JoinUsForm from "../../components/JoinUSForm";
import i18next from "i18next";

const ContactUs = () => {
  return (
    <Container id="contactUs" fluid className="contactUsCont" expand="lg">
      <Row className="contactUsTitleRow">
        <h2 className={"contactUsTitle " +  i18next.t("contactUsTitle_ru")}>{i18next.t("navbar.contact")}</h2>
      </Row>
      <Row className="contactUsRow">
        <Col className="contactUsImgCont col-lg-4 col-sm-6">
          <Image className="contactUsImg" src={ContactUsImg} />
        </Col>
        <Col className="contactUsForm col-lg-8 col-sm-6">
          <JoinUsForm />
        </Col>
      </Row>
    </Container>
  );
};
export default ContactUs;
