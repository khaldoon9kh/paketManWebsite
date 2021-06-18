import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";

const SingleFeature = ({ featHead, featText }) => {
  console.log(featText);
  return (
    <Container className="featureBox">
      <Row>
        <Col>
          <h2 className="feature">{featHead}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{featText}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleFeature;
