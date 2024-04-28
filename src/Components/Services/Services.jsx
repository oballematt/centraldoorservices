import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Services = (props) => {
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

  const imgUrl = [
    {
      imageUrl: `./src/assets/shutterstock_621949454.jpg`,
      serviceTitle: "Residential Garage Door Repair",
      serviceDescription:
        "We can schedule a service call to diagnose any issues you may be experiencing with your garage door. Contact us today to hear from one of our specialists",
    },
    {
      imageUrl: `./src/assets/shutterstock_1661496175.jpg`,
      serviceTitle: "Residential Garage Door Installation",
      serviceDescription:
        "We can install doors on new construction homes, or replace your old door with a new one. Contact us for more information.",
    },
    {
      imageUrl: `./src/assets/shutterstock_2032605872.jpg`,
      serviceTitle: "Commercial Overhead Door Repair",
      serviceDescription:
        "We can service your commercial door to help your business operate more efficiantly and securely. Also contact us to learn more about Preventive Maintenance options.",
    },
    {
      imageUrl: `./src/assets/shutterstock_707797201.jpg`,
      serviceTitle: "Entry Door Repair",
      serviceDescription:
        "Let us know what entry door issues you are experiencing and we will see what we can do to help.",
    },
  ];
  return (
    <div>
      <h1 ref={props.propRef} style={{ fontSize: "50px", marginTop: "3%", color: "rgb(29,41,81)" }}>
        Our Services
      </h1>
      <h1 style={{ letterSpacing: "1px", fontSize: "30px", color: "rgb(29,41,81)" }}>
        As dedicated specialists in commercial door repair, we strive to bring
        you a wealth of expertise and a commitment to excellence to every
        project.
      </h1>
      <Container style={{ marginTop: "1%" }}>
        <Row>
          <Col>
            <Row xs={1} md={2} className="g-4">
              {imgUrl.map((item, idx) => (
                <Col key={idx}>
                  <Card style={{ backgroundColor: "transparent", border: "0" }}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: "25px" }}>
                        {item.serviceTitle}
                      </Card.Title>
                      <Card.Text style={{ fontSize: "18px" }}>
                        {item.serviceDescription}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
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
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default Services;
