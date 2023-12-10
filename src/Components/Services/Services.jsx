import React, {forwardRef} from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Services = (props) => {
  const imgUrl = [
    {
      imageUrl: `${import.meta.env.BASE_URL}/src/assets/shutterstock_370563752_1.jpg`,
      serviceTitle: "Automatic Door Repair",
      serviceDescription:
        "This is a longer card with supporting text below as anatural lead-in to additional content. This content is alittle bit longer.",
    },
    {
      imageUrl: `${import.meta.env.BASE_URL}/src/assets/shutterstock_370563752.jpg`,
      serviceTitle: "Access Control System Repairs",
      serviceDescription:
        "This is a longer card with supporting text below as anatural lead-in to additional content. This content is alittle bit longer.",
    },
    {
      imageUrl: `${import.meta.env.BASE_URL}/src/assets/shutterstock_1249715005.jpg`,
      serviceTitle: "Hinge and Hardware Replacements",
      serviceDescription:
        "This is a longer card with supporting text below as anatural lead-in to additional content. This content is alittle bit longer.",
    },
    {
      imageUrl: `${import.meta.env.BASE_URL}/src/assets/shutterstock_2195199497_med.jpg`,
      serviceTitle: "Preventative Maintenance Programs",
      serviceDescription:
        "This is a longer card with supporting text below as anatural lead-in to additional content. This content is alittle bit longer.",
    },
  ];
  return (
    <div>
      <h1 ref={props.propRef} style={{ fontSize: "50px", marginTop: "3%" }}>Our Services</h1>
      <h3  style={{ letterSpacing: "1px", fontSize: "22px" }}>
        As dedicated specialists in commercial door repair, we strive to bring
        you a wealth of expertise and a commitment to excellence to every
        project.
      </h3>
      <Container style={{ marginTop: "1%" }}>
        <Row>
          <Col>
            <Row xs={1} md={2} className="g-4">
              {imgUrl.map((item, idx) => (
                <Col key={idx}>
                  <Card style={{backgroundColor: "transparent", border: "0"}}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body >
                      <Card.Title>{item.serviceTitle}</Card.Title>
                      <Card.Text>
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
                backgroundColor: "rgb(85 99 90)",
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
                <Card.Text style={{marginBottom: "20%"}}>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Phone" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridState">
                      <Form.Select defaultValue="Service">
                        <option disabled>Service</option>
                        <option>Automatic Door Repair</option>
                        <option>Access Control System Repairs</option>
                        <option>Hinge and Hardware Replacements</option>
                        <option>Preventative Maintenance Programs</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        placeholder="brief description"
                      />
                    </Form.Group>
                  </Form>
                </Card.Text>
                <Button style={{width: "50%", fontSize: "25px"}} variant="outline-light">Submit</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};



export default Services;
