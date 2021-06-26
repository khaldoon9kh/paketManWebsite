import React, { useState } from "react";
import {
  Row,
  Col,
  Image,
  Container,
  Accordion,
  Card,
  NavItem,
} from "react-bootstrap";
import "./index.css";
import faqData from "./faqData";
import FAQImg from "../../assests/pics/FAQImg.svg";
import FAQCard from "../../components/FAQCard";

const FAQ = () => {
  return (
    <Container id="faq" fluid className="faqContainer" expand="lg">
      <Row className="faqTitle">
        <h2 className="faqTitleText">FAQ</h2>
      </Row>
      <Row className="faqTextCont">
        <Col>
          <Accordion className="accordionCont">
            {faqData.map((question, index) => (
              <FAQCard
                faqQuestion={question.faqQuestion}
                faqAnswer={question.faqAnswer}
                eventNumber={index + 1}
              />
            ))}
          </Accordion>
        </Col>
        <Col className="faqImgCont">
          <Image className="faqImg" src={FAQImg} />
        </Col>
      </Row>
    </Container>
  );
};
export default FAQ;
