// import React from "react";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const ServiceOptions = () => {
//   const imgUrl = [
//     {
//       imageUrl: "https://d2q0snk2i1y1r8.cloudfront.net/opt_sliding.webp",
//       serviceTitle: "Automatic Door Repair Swing/Slide",
//       serviceDescription:
//         "Expert repair services for both swinging and sliding automatic doors, ensuring smooth, reliable, and safe operation for commercial entrances.",
//     },
//     {
//       imageUrl: "https://d2q0snk2i1y1r8.cloudfront.net/opt_store_front.webp",
//       serviceTitle: "Storefront",
//       serviceDescription:
//         "Specialized repair services for commercial storefront doors and windows, including glass replacement, frame adjustment, and sealing to enhance curb appeal and energy efficiency.",
//     },
//     {
//       imageUrl: "https://d2q0snk2i1y1r8.cloudfront.net/opt_metal.webp",
//       serviceTitle: "Hollow Metal",
//       serviceDescription:
//         " Professional repair and maintenance of hollow metal doors, focusing on structural integrity, and hardware performance for robust security and durability.",
//     },
//     {
//       imageUrl: "https://d2q0snk2i1y1r8.cloudfront.net/opt_entry_door.webp",
//       serviceTitle: "Entry Door Repair",
//       serviceDescription:
//         "Comprehensive repair solutions for entry doors, addressing issues like alignment, hardware malfunction, and weatherproofing to maintain security and functionality.",
//     },
//     {
//       imageUrl: "https://d2q0snk2i1y1r8.cloudfront.net/opt_revolving.webp",
//       serviceTitle: "Revolving Doors",
//       serviceDescription:
//         "Skilled repair services for revolving doors, ensuring seamless rotation, safety compliance, and energy efficiency for high-traffic commercial environments.",
//     },
//   ];
//   return (
//     <Container fluid style={{ marginTop: "1%", width: "100%" }}>
//       <Row>
//         <Col>
//           <Row xs={1} md={2} lg={2} xl={2} xxl={5} className="g-4">
//             {imgUrl.map((item, idx) => (
//               <Col key={idx}>
//                 <Card style={{ border: "0", height: "100%"}}>
//                   <Card.Img style={{height: "60%"}} loading="lazy" alt={item.serviceDescription} variant="top" src={item.imageUrl}/>
//                   <Card.Body
//                     style={{
//                       backgroundColor: "rgba(29, 41, 81, 0.8)",
//                       color: "white",
//                     }}
//                   >
//                     <Card.Title style={{ fontSize: "25px" }}>
//                       {item.serviceTitle}
//                     </Card.Title>
//                     <Card.Text style={{ fontSize: "18px" }}>
//                       {item.serviceDescription}
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ServiceOptions;

import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const ServiceOptions = () => {
  const imgUrl = [
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
        {imgUrl.map((item, idx) => (
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
