import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlogHeader from "./BlogHeader";
import Navibar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import AboutUs from "../AboutUs/AboutUs";
import { articles } from "../../Utils/ArrayData";
import Footer from "../Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { slugify } from "../../Utils/slugify";
const Blog = () => {
  const links = [{ label: "Home", route: "/" }];
  const breadcrumbItems = [
    { href: "/", text: "Home" },
    { text: "Blog", active: true },
  ];
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div>
      <Navibar navigation={false} links={links} />
      <BlogHeader />

      <Container>
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
        <Row>
          {articles.map((item, index) => (
            <Col
              style={{ marginTop: "20px", marginBottom: "20px" }}
              key={index}
              xs={12}
              md={6}
              lg={6}
              xl={4}
            >
              <Card style={{ width: "100%", textAlign: "center" }}>
                <Card.Img
                  variant="top"
                  src={item.image1}
                  style={{ height: "450px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{truncateText(item.section1, 100)}</Card.Text>
                  <Link to={`/blog/${slugify(item.title)}`}>
                    <Button variant="primary">Read more</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div style={{ marginBottom: "3%" }}>
        <AboutUs />
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Blog;
