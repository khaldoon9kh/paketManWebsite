import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";

const SingleFeature = ({ photo, featHead, featText }) => {
  console.log(featText);
  return (
    <Container className="featureBox">
      {/* <Row>
            <Col>
            </Col>
        </Row> */}
      <h2 className="feature">{featHead}</h2>
      <img src={photo} alt="food" className="featImg img-fluid" />
      <p>{featText}</p>
    </Container>
  );
};

export default SingleFeature;
