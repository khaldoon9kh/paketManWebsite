import React from "react";
import emailjs from "emailjs-com";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "./index.css";

const JoinUsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_if288s9",
        "template_9pc0hwm",
        e.target,
        "user_Ac1zNd3TCjZ3p0wnPrhac"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Container className="formCont">
      <Form onSubmit={handleSubmit}>
        <Row className="formRowRes">
          <Col>
            <Form.Control
              name="contact_Name"
              required
              placeholder="Full Name"
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
          </Col>
          <Col>
            <Form.Control
              as="select"
              // className="my-1 mr-sm-2"
              name="subject"
              id="inlineFormCustomSelectPref"
              placeholder="select"
              custom
            >
              <option value="0">Subject:</option>
              <option value="Resturant">Resturant</option>
              <option value="Home_Chef">Home Chef</option>
              <option value="Driver">Driver</option>
              <option value="ContactUS">Genral Enquiry</option>
            </Form.Control>
          </Col>
        </Row>
        <Row className="formRowRes">
          <Col>
            <Form.Control
              name="email"
              required
              type="email"
              placeholder="Email"
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
          </Col>
          <Col>
            <Form.Control
              name="phone"
              required
              type="number"
              placeholder="Phone Number"
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              name="user_message"
              required
              placeholder="Please write us a small introduction about you"
              as="textarea"
              rows={3}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col className="submitButtonCol">
            <input
              className="submitButton"
              type="submit"
              value="Submit"
            ></input>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default JoinUsForm;
