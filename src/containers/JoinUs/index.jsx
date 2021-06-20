import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import JoinUsCard from "../../components/JoinUsCard";
import cardsData from "./cardsData";
import JoinUsForm from "../../components/JoinUSForm";

const JoinUs = () => {
  return (
    <Container fluid className="JoinUSContainer" expand="lg">
      <Row>
        <Col className="joinUsTitle">
          <h2 className="text-center">Join Us</h2>
        </Col>
      </Row>
      <Row>
        {cardsData.map((data) => (
          <Col className=".col-md-3">
            <JoinUsCard cardLogo={data.cardLogo} cardTitle={data.cardTitle} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="formCol">
          <JoinUsForm />
        </Col>
      </Row>
    </Container>
  );
};
export default JoinUs;
