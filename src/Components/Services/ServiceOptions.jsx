import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { services } from "../../Utils/ArrayData";

const ServiceOptions = () => {
 
  const scrollContainerStyle = {
    display: "flex",
    flexWrap: "nowrap",
    gap: "1rem",
    padding: "10px 0",
    overflowX: "auto",
    position: "relative",
  };

  const scrollItemStyle = {
    flex: "0 0 auto",
    minWidth: "300px",
    maxWidth: "600px",
  };

  return (
    <Container fluid style={{ marginTop: "1%", width: "100%" }}>
      <div style={scrollContainerStyle}>
        {services.map((item, idx) => (
          <div key={idx} style={scrollItemStyle}>
            <Card style={{ border: "0", height: "100%", width: "100%" }}>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  paddingTop: "75%",
                }}
              >
                <Card.Img
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                  alt={item.serviceDescription}
                  variant="top"
                  src={item.imageUrl}
                />
              </div>
              <Card.Body
                style={{
                  backgroundColor: "rgba(29, 41, 81, 0.8)",
                  color: "white",
                  padding: "10px",
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
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ServiceOptions;
