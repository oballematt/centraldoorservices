import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

const ServiceAreas = (props) => {
  const serviceAreas = [
    "Austin",
    "Marble Falls",
    "Horseshoe Bay",
    "Georgetown",
    "Round Rock",
    "Cedar Park",
    "And More...",
  ];
  return (
    <>
      <h1
        ref={props.propRef}
        style={{ fontSize: "50px", marginTop: "3%", color: "rgb(29,41,81)" }}
      >
        Service Areas
      </h1>
      <h3
        style={{
          letterSpacing: "1px",
          fontSize: "30px",
          color: "rgb(29,41,81)",
        }}
      >
        {" "}
        We look forward to serving you in the following areas! If you do not see
        your location listed, send a message and we will see if we can help!
      </h3>
      <Container style={{ marginTop: "60px", height: "100%" }}>
        <Row>
          <Col xl={8}>
            <Image
              fluid
              style={{ width: "100%", height: "100%" }}
              src={
                "/images/austin-texas-usa-sunrise-skyline-600nw-681676399.webp"
              }
            />
          </Col>
          <Col xl={4}>
            <Card
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                border: "0",
              }}
            >
              <Card.Body>
                <Card.Text style={{ textAlign: "left" }}>
                  {serviceAreas.map((item, idx) => (
                    <ListGroup horizontal key={idx}>
                      <ListGroup.Item
                        style={{
                          fontSize: "30px",
                          backgroundColor: "transparent",
                          border: "0",
                        }}
                      >
                        {item}
                      </ListGroup.Item>
                    </ListGroup>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    
    </>
  );
};

export default ServiceAreas;
