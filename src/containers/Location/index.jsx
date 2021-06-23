import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./index.css";
import EmailIcon from "../../assests/pics/email.svg";
import PinIcon from "../../assests/pics/pinMap.svg";
import PhoneIcon from "../../assests/pics/phone.svg";

const Location = () => {
  return (
    <Container fluid className="locationCont" expand="lg">
      <Row className="infoCont">
        <Col className="md-3">
          <Row>
            <Col className="iconCol">
              <Image className="iconImg" src={PinIcon} />
            </Col>
            <Col className="textCol">
              <p>
                Kayabaşı Mah. Akzambak Sk ADIM İSTANBUL Sitesi B2 Blok Dukkan:
                T20 Başakşehir - İstanbul
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="md-3">
          <Row>
            <Col className="iconCol">
              <Image className="iconImg" src={EmailIcon} />
            </Col>
            <Col className="textCol">
              <p>Paketman@gmail.com</p>
            </Col>
          </Row>
        </Col>
        <Col className="md-3">
          <Row>
            <Col className="iconCol">
              <Image className="iconImg" src={PhoneIcon} />
            </Col>
            <Col className="textCol">
              <p>0531 634 56 60</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Location;
