import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";

const SingleFeature = ({ featHead, featText }) => {
  return (
    <Container className="featureBox">
      <Row>
        <h2 className="featureTitle">{featHead}</h2>
      </Row>
      <Row>
        <p className="featureText">{featText}</p>
      </Row>
    </Container>
  );
};

export default SingleFeature;
