import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetAQuote = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [quoteOption, setQuoteOption] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const serviceId = import.meta.env.VITE_SERVICE_QUOTE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_QUOTE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      number: phoneNumber,
      from_email: email,
      to_name: "Joseph Ingram",
      message: message,
      quote: quoteOption,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log(response);
        setFirstName("");
        setLastName("");
        setPhoneNumber(""), setQuoteOption("");
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
      <Container style={window.innerWidth >= 1483 ? {width: "30%"} : {width: "80%"}}>
        {" "}
        <Col>
          <Card
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgb(29,41,81)",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  color: "white",
                  marginBottom: "5%",
                  fontSize: "45px",
                }}
              >
                Request a Quote!
              </Card.Title>
              <Card.Text style={{ marginBottom: "20%" }}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Phone"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGridState">
                    <Form.Select
                      required
                      onChange={(e) => setQuoteOption(e.target.value)}
                      placeholder="Phone"
                      defaultValue="Service"
                      value={quoteOption}
                    >
                      <option>Service</option>
                      <option>Residential Garage Door Repair</option>
                      <option>Residential Garage Door Installation</option>
                      <option>Commercial Overhead Door Repair</option>
                      <option>Entry Door Repair</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      required
                      as="textarea"
                      placeholder="brief description"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    style={{
                      width: "50%",
                      fontSize: "25px",
                      marginTop: "100px",
                    }}
                    variant="outline-light"
                    type="submit"
                  >
                    {loading ? <Spinner /> : "Submit"}
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Container>
  
    </>
  );
};

export default GetAQuote;
