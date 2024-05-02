import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServiceOptions = () => {
  const imgUrl = [
    {
      imageUrl: "/images/shutterstock-621949454-6632edcf9baca.webp",
      serviceTitle: "Residential Garage Door Repair",
      serviceDescription:
        "We can schedule a service call to diagnose any issues you may be experiencing with your garage door. Contact us today to hear from one of our specialists",
    },
    {
      imageUrl: "/images/shutterstock-16614961751-6632edd07244f.webp",
      serviceTitle: "Residential Garage Door Installation",
      serviceDescription:
        "We can install doors on new construction homes, or replace your old door with a new one. Contact us for more information.",
    },
    {
      imageUrl: "/images/shutterstock-20326058721-6632edd08ad8b.webp",
      serviceTitle: "Commercial Overhead Door Repair",
      serviceDescription:
        "We can service your commercial door to help your business operate more efficiantly and securely. Also contact us to learn more about Preventive Maintenance options.",
    },
    {
      imageUrl: "/images/shutterstock-7077972011-6632edcf9bd6e.webp",
      serviceTitle: "Entry Door Repair",
      serviceDescription:
        "Let us know what entry door issues you are experiencing and we will see what we can do to help.",
    },
  ];
  return (
    <Container fluid style={{ marginTop: "1%", width: "80%" }}>
      <Row>
        <Col>
          <Row xs={1} md={1} lg={2} xl={2} xxl={4} className="g-4">
            {imgUrl.map((item, idx) => (
              <Col key={idx}>
                <Card style={{ border: "0", height: "100%" }}>
                  <Card.Img loading="lazy" alt={item.serviceDescription} variant="top" src={item.imageUrl}/>
                  <Card.Body
                    style={{
                      backgroundColor: "rgba(29, 41, 81, 0.8)",
                      color: "white",
                    }}
                  >
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
      </Row>
    </Container>
  );
};

export default ServiceOptions;
