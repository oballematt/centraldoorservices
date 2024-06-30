import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "./Carousel.css"
import { services } from "../../Utils/ArrayData";

const Carousel1 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel slide={false} pause={'hover'} interval={4000} style={{height: "auto"}} activeIndex={index} onSelect={handleSelect}>
        {services.map((item, idx) => (
          <Carousel.Item>
            <Card key={idx} style={{ width: "100%", height: "60%"  }}>
              <Card.Img alt={item.serviceDescription} style={{height: "500px"}} variant="top" src={item.imageUrl} />
              <Card.Body style={{
                      backgroundColor: "rgba(29, 41, 81, 0.8)",
                      color: "white",
                    }}>
                <Card.Title>{item.serviceTitle}</Card.Title>
                <Card.Text>{item.serviceDescription}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Carousel1;
