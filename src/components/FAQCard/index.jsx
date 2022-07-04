import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "./index.css";

const FAQCard = ({ faqQuestion, faqAnswer, eventNumber }) => {
  return (
    <Card className="faqCard">
      <Accordion.Toggle
        as={Card.Header}
        className="faqQuestion"
        eventKey={eventNumber}
      >
        {faqQuestion}
      </Accordion.Toggle>
      <Accordion.Collapse className="faqAnswer" eventKey={eventNumber}>
        <Card.Body>{faqAnswer}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default FAQCard;
