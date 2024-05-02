import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "./Carousel.css"

const Carousel1 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const content = [
    {
      title: "Residential Garage Door Repair",
      description:
        "We can schedule a service call to diagnose any issues you may be experiencing with your garage door. Contact us today to hear from one of our specialists",
      image: "/images/shutterstock_621949454.jpg",
    },
    {
      title: "Residential Garage Door Installation",
      description:
        "We can install doors on new construction homes, or replace your old door with a new one. Contact us for more information.",
      image: "/images/shutterstock_16614961751.jpg",
    },
    {
      title: "Commercial Overhead Door Repair",
      description:
        "We can service your commercial door to help your business operate more efficiantly and securely. Also contact us to learn more about Preventive Maintenance options.",
      image: "/images/shutterstock_20326058721.jpg",
    },
    {
      title: "Entry Door Repair",
      description:
        "Let us know what entry door issues you are experiencing and we will see what we can do to help.",
      image: "/images/shutterstock_7077972011.jpg",
    },
  ];

  return (
    <>
      <Carousel slide={false} pause={'hover'} interval={4000} style={{height: "auto"}} activeIndex={index} onSelect={handleSelect}>
        {content.map((item, idx) => (
          <Carousel.Item>
            <Card key={idx} style={{ width: "100%", height: "100%"  }}>
              <Card.Img loading="lazy" style={{height: "100%"}} variant="top" src={item.image} />
              <Card.Body style={{
                      backgroundColor: "rgba(29, 41, 81, 0.8)",
                      color: "white",
                    }}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Carousel1;
