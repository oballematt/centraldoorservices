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
      imageUrl: "https://d2q0snk2i1y1r8.cloudfront.net/opt_sliding.webp",
      serviceTitle: "Automatic Door Repair Swing/Slide",
      serviceDescription:
        "Expert repair services for both swinging and sliding automatic doors, ensuring smooth, reliable, and safe operation for commercial entrances.",
    },
    {
      imageUrl: "https://d2q0snk2i1y1r8.cloudfront.net/opt_store_front.webp",
      serviceTitle: "Storefront",
      serviceDescription:
        "Specialized repair services for commercial storefront doors and windows, including glass replacement, frame adjustment, and sealing to enhance curb appeal and energy efficiency.",
    },
    {
      imageUrl: "https://d2q0snk2i1y1r8.cloudfront.net/opt_metal.webp",
      serviceTitle: "Hollow Metal",
      serviceDescription:
        " Professional repair and maintenance of hollow metal doors, focusing on structural integrity, and hardware performance for robust security and durability.",
    },
    {
      imageUrl: "https://d2q0snk2i1y1r8.cloudfront.net/opt_entry_door.webp",
      serviceTitle: "Entry Door Repair",
      serviceDescription:
        "Comprehensive repair solutions for entry doors, addressing issues like alignment, hardware malfunction, and weatherproofing to maintain security and functionality.",
    },
    {
      imageUrl: "https://d2q0snk2i1y1r8.cloudfront.net/opt_revolving.webp",
      serviceTitle: "Revolving Doors",
      serviceDescription:
        "Skilled repair services for revolving doors, ensuring seamless rotation, safety compliance, and energy efficiency for high-traffic commercial environments.",
    },
  ];

  return (
    <>
      <Carousel slide={false} pause={'hover'} interval={4000} style={{height: "auto"}} activeIndex={index} onSelect={handleSelect}>
        {content.map((item, idx) => (
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
