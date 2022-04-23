import React from "react";
import emailjs from "emailjs-com";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "./index.css";
import i18next from "i18next";
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
              placeholder={i18next.t("join.form.name")}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
          </Col>
          <Col>
            <Form.Control
              as="select"
              name="subject"
              id="inlineFormCustomSelectPref"
              placeholder="select"
              custom
            >
              <option value="0">{i18next.t("join.form.select")}</option>
              <option value="Resturant">
                {i18next.t("join.card.resturant")}
              </option>
              <option value="Home_Chef">{i18next.t("join.card.home")}</option>
              <option value="Driver">{i18next.t("join.card.driver")}</option>
              <option value="ContactUS">
                {i18next.t("join.form.contact")}
              </option>
            </Form.Control>
          </Col>
        </Row>
        <Row className="formRowRes">
          <Col>
            <Form.Control
              name="email"
              required
              type="email"
              placeholder={i18next.t("join.form.email")}
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
              placeholder={i18next.t("join.form.number")}
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
              placeholder={i18next.t("join.form.message")}
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
              value={i18next.t("join.form.submit")}
            ></input>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default JoinUsForm;
