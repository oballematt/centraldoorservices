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
    "And More..."
  ];
  return (
    <>
      <h1 ref={props.propRef} style={{ fontSize: "50px", marginTop: "3%", color: "rgb(29,41,81)" }}>Service Areas</h1>
      <h3 style={{letterSpacing: '1px', fontSize: "30px", color: "rgb(29,41,81)" }}>
        {" "}
        We look forward to serving you in the following areas! If you do not see
        your location listed, send a message and we will see if we can help!
      </h3>
      <Container>
        <Row>
          <Col xl={8}>
            <Image
              fluid
              style={{ width: "100%" }}
              src={"./src/assets/austin-texas-usa-sunrise-skyline-600nw-681676399.webp"}
            />
            
          </Col>
          <Col xl={4}>
            <Card
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                border: "0",
                marginTop: "6%"
              }}
            >
              <Card.Body>
                <Card.Text
                  style={{ textAlign: "left", backgroundColor: "transparent" }}
                >
                  {serviceAreas.map((item, idx) => (
                    <ListGroup key={idx}>
                      <ListGroup.Item
                        style={{
                          fontSize: "30px",
                          backgroundColor: "transparent",
                          border: "0"
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
        {/* <Card className="bg-dark text-white">
          <Card.Img
            src="src\assets\austin-texas-usa-sunrise-skyline-600nw-681676399.webp"
            alt="Card image"
          />
          <Card.ImgOverlay
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              padding: "30px 0 60px 0",
              width: "100%",
            }}
          >
            <ListGroup horizontal style={{justifyContent: "center", fontSize: "30px", backgroundColor: "transparent"}}>
              <ListGroup.Item>location 1</ListGroup.Item>
              <ListGroup.Item>location 2</ListGroup.Item>
              <ListGroup.Item>location 3</ListGroup.Item>
              <ListGroup.Item>location 4</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal style={{justifyContent: "center", fontSize: "30px", backgroundColor: "transparent"}}>
              <ListGroup.Item>location 1</ListGroup.Item>
              <ListGroup.Item>location 2</ListGroup.Item>
              <ListGroup.Item>location 3</ListGroup.Item>
              <ListGroup.Item>location 4</ListGroup.Item>
            </ListGroup>
          </Card.ImgOverlay>
        </Card> */}
      </Container>
    </>
  );
};

const overlayStyle = {
  background: "rgba(0, 0, 0, 0.2)",
  padding: "30px 0 60px 0",
  width: "100%",
  textAlign: "center",
};

export default ServiceAreas;
