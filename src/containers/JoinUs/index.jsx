import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import JoinUsCard from "../../components/JoinUsCard";
import cardsData from "./cardsData";
import JoinUsForm from "../../components/JoinUSForm";
import i18next from "i18next";

const JoinUs = () => {
  return (
    <Container id="joinUs" fluid className="joinUSContainer" expand="lg">
      <Row>
        <Col className="joinUsTitle">
          <h2 className="text-center">{i18next.t("navbar.join")}</h2>
        </Col>
      </Row>
      <Row className="joinUsCardsCont">
        {cardsData.map((data) => (
          <JoinUsCard cardLogo={data.cardLogo} cardTitle={data.cardTitle} />
        ))}
      </Row>
      <Row className="formRowCont">
        <Col className="formCol">
          <JoinUsForm />
        </Col>
      </Row>
    </Container>
  );
};
export default JoinUs;
