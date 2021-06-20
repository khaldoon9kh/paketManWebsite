import React from "react";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
import "./index.css";

const JoinUsCard = ({ cardLogo, cardTitle }) => {
  const handleSelect = () => {
    console.log("clicked");
  };

  return (
    <Container className="cardCont" onClick={handleSelect}>
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
