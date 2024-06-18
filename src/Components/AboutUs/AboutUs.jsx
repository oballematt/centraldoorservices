import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <Container style={{ padding: "20px" }}>
      <Row className="align-items-center">
        {isSmallScreen ? (
          ""
        ) : (
          <Col
            xs={12}
            md={4}
            className="text-center mb-4 mb-md-0 d-none d-md-block"
          >
            <img
              src="images/TVC_VOB_Logo_-_Transparent_new.webp"
              alt="Company Logo"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Col>
        )}

        <Col
          xs={12}
          md={8}
          style={
            isSmallScreen
              ? {
                  color: "white",
                  fontSize: "1.1em",
                  textAlign: "center",
                  width: "100%",
                }
              : { color: "white", fontSize: "1.1em", textAlign: "center" }
          }
        >
          <p>
            Welcome to Central Door Services, your premier destination for all
            your door needs in Central Texas. With 12 years of experience in the
            industry and proudly serving the community for over 7 years, we
            bring a wealth of expertise and knowledge to every door we touch.
          </p>

          <p>
            At Central Door Services, we specialize in providing top-notch door
            services, from installations to repairs and maintenance. As a
            veteran-owned business, we take pride in our commitment to
            excellence, integrity, and customer satisfaction.
          </p>

          <p>
            Whether you are looking to upgrade your door or in need of emergency
            repairs, you can trust Central Door Services to deliver exceptional
            results. Contact us today to learn more about how we can help
            enhance the functionality and aesthetics of your door.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
