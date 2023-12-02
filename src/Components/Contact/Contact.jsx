import React, {forwardRef} from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Contact = (props, ref) => {
  return (
    <Form
      ref={props.propRef}
      style={{ width: "50%", marginTop: "40px", color: "white" }}
    >
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="input" placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="input" placeholder="Last Name" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="input" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="input" placeholder="Phone" />
        </Form.Group>
      </Row>

      <Form.Group style={{ marginTop: "3%" }}>
        <Form.Control as="textarea" placeholder="message" />
      </Form.Group>
      <div style={{ textAlign: "center" }}>
        <Button
          style={{ width: "40%", fontSize: "25px", marginTop: "3%" }}
          variant="outline-light"
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default Contact;
