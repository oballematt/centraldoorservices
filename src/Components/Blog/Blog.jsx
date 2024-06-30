import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../../Utils/ArrayData";
import { slugify } from "../../Utils/slugify";
import Container from "react-bootstrap/Container";
import Contact from "../Contact/Contact";
import Navibar from "../Navbar/Navbar";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";

const Blog = () => {
  const { title } = useParams();
  const article = articles.find((article) => slugify(article.title) === title);
  const breadcrumbItems = [{ href: "/", text: "Home" }, { href: "/blog" ,text: "Blogs"}, {text: article.title, active: true}];

  if (!article) {
    return <div>Article not found</div>;
  }

  const sections = Object.keys(article).reduce((acc, key) => {
    if (key.startsWith("section")) {
      const sectionIndex = key.match(/\d+/)[0];
      const titleKey = `title${sectionIndex}`;
      const imageKey = `image${sectionIndex}`;
      acc.push({
        title: article[titleKey],
        section: article[key],
        image: article[imageKey],
      });
    }
    return acc;
  }, []);

  return (
    <>
      <Navibar navigation={false} />

      <Container style={{marginTop: "50px", zIndex: "2000"}}>
        <h1 style={{ marginBottom: "5%", marginTop: "20px" }}>
          {article.title}
        </h1>
        <Breadcrumbs breadcrumbItems={breadcrumbItems}/>
   
        {sections.map((sec, index) => (
          <div style={{ marginBottom: "5%", lineHeight: "40px" }} key={index}>
            {sec.title && <h2>{sec.title}</h2>}
            <p>
              {sec.image && (
                <img src={sec.image} alt={sec.title} style={blogImage} />
              )}
              {sec.section}
            </p>
          </div>
        ))}
      </Container>
      <Contact />
    </>
  );
};

const blogImage = {
  float: "right",
  marginLeft: "20px",
  marginBottom: "10px",
  width: "200px",
  height: "200px",
};

export default Blog;
