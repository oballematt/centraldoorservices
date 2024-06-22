import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const isSmallScreen = window.innerWidth <= 768;

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const serviceId = import.meta.env.VITE_SERVICE_CONTACT_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_CONTACT_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      number: phoneNumber,
      email: email,
      to_name: "Joseph Ingram",
      message: message,
    };
    // emailjs.init({
    //   publicKey: publicKey,
    //   limitRate: {
    //     // Set the limit rate for the application
    //     id: 'app',
    //     // Allow 1 request per 10s
    //     throttle: 30000,
    //   },
    // });

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log(response);
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
        setLoading(false);
        toast.success(
          "Success! We received your information and will get back to you soon!",
          { position: "top-right", theme: "colored" }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Form
        ref={props.propRef}
        style={
          window.innerWidth <= 768
            ? { width: "80%", color: "white" }
            : { width: "50%", color: "white" }
        }
        onSubmit={handleSubmit}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
            marginTop: "25px",
          }}
        >
          Call{" "}
          {isSmallScreen ? (
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="tel:737-307-6006"
            >
              (737) 307-6006
            </a>
          ) : (
            "(737) 307-6006"
          )}
        </h1>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="input"
              placeholder="First Name"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="input"
              placeholder="Last Name"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="input"
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="input"
              placeholder="Phone"
            />
          </Form.Group>
        </Row>

        <Form.Group style={{ marginTop: "3%" }}>
          <Form.Control
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            as="textarea"
            placeholder="message"
          />
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button
            style={{ width: "40%", fontSize: "25px", marginTop: "3%" }}
            variant="outline-light"
            type="submit"
          >
            {loading ? <Spinner /> : "Submit"}
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </>
  );
};

export default Contact;
