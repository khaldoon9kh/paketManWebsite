import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const InfoContainer = (infoIcon, infoText) => {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={infoIcon} />
        </Col>
        <Col>
          <h3>{infoText}</h3>
        </Col>
      </Row>
    </Container>
  );
};
export default InfoContainer;
