import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";

const SingleFeature = ({ featHead, featText }) => {
  return (
    <Container className="featureBox">
      <Row
        style={
          localStorage.getItem("language") === "ar"
            ? { direction: "rtl" }
            : { direction: "ltr" }
        }
      >
        <h2 className="featureTitle">{featHead}</h2>
      </Row>
      <Row
        style={
          localStorage.getItem("language") === "ar"
            ? { direction: "rtl" }
            : { direction: "ltr" }
        }
      >
        <p className="featureText">{featText}</p>
      </Row>
    </Container>
  );
};

export default SingleFeature;
