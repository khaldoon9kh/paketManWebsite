import React, { useState, useEffect } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "./index.css";

const JoinUsForm = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    usermessage: "",
  });

  const handleFirstNameValue = (e) => {
    setUserInput({ ...userInput, firstName: e.target.value });
  };

  const handleLastNameValue = (e) => {
    setUserInput({ ...userInput, lastName: e.target.value });
  };

  const handleEmailValue = (e) => {
    setUserInput({ ...userInput, email: e.target.value });
  };

  const handlePhoneValue = (e) => {
    setUserInput({ ...userInput, phone: e.target.value });
  };

  const handleUsermessageValue = (e) => {
    setUserInput({ ...userInput, usermessage: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    setUserInput({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      usermessage: "",
    });
  };

  return (
    <Container className="formCont">
      <Form>
        <Row className="formRowRes">
          <Col>
            <Form.Control
              placeholder="First name"
              onChange={(e) => handleFirstNameValue(e)}
              value={userInput.firstName}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Last name"
              onChange={(e) => handleLastNameValue(e)}
              value={userInput.lastName}
            />
          </Col>
        </Row>
        <Row className="formRowRes">
          <Col>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => handleEmailValue(e)}
              value={userInput.email}
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              onChange={(e) => handlePhoneValue(e)}
              value={userInput.phone}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              placeholder="Please write us a small introduction about you"
              as="textarea"
              rows={3}
              onChange={(e) => handleUsermessageValue(e)}
              value={userInput.usermessage}
            />
          </Col>
        </Row>
        <Row>
          <Col className="submitButtonCol">
            <Button
              className="submitButton"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default JoinUsForm;
