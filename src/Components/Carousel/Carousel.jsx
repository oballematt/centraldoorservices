import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import NavTabs from "../Tabs/Tabs";
import Card from "react-bootstrap/Card";

const Carousel1 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const images = [
    "src/assets/shutterstock_370563752_1.jpg",
    "src/assets/shutterstock_2195199497_sm.jpg",
    "src/assets/austin-texas-usa-sunrise-skyline-600nw-681676399.webp",
    "src/assets/shutterstock_398613205.jpg",
  ];

  return (
    <>
      <h1 style={{ fontSize: "50px", marginTop: "3%" }}>Our Services</h1>
      <h3 style={{ letterSpacing: "1px", fontSize: "22px" }}>
        As dedicated specialists in commercial door repair, we strive to bring
        you a wealth of expertise and a commitment to excellence to every
        project.
      </h3>
      <NavTabs />
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        {images.map((item, idx) => (
          <Carousel.Item>
            <Card key={idx} style={{ width: "100%"}}>
              <Card.Img variant="top" src={item} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Carousel1;
