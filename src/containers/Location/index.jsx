import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import infosData from "./info";
import EmailIcon from "../../assests/pics/email.svg";
import PinIcon from "../../assests/pics/pinMap.svg";
import PhoneIcon from "../../assests/pics/phone.svg";

const Location = () => {
  const InfoCard = ({ icon, text }) => {
    return (
      <Row className="infoCardRow">
        <Col className="iconCol">
          <Image className="iconImg" src={icon} />
        </Col>
        <Col className="textCol">
          <p>{text}</p>
        </Col>
      </Row>
    );
  };
  return (
    <Container fluid className="locationCont" expand="lg">
      <Row className="infoCont">
        {infosData.map((data, index) => (
          <InfoCard icon={data.icon} text={data.text} key={index} />
        ))}
      </Row>
    </Container>
  );
};
export default Location;
