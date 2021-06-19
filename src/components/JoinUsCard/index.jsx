import React from "react";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
import "./index.css";

const JoinUsCard = ({ cardLogo, cardTitle }) => {
  return (
    <Container className="cardCont">
      <Row>
        <h4 className="cardTitle">{cardTitle}</h4>
      </Row>
      <Row>
        <Image className="cardImg" src={cardLogo} />
      </Row>
    </Container>
  );
};

export default JoinUsCard;
