import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navibar(props) {
  return props.navigation ? (
    <Navbar
      sticky="top"
      expand="lg"
      style={
        window.innerWidth <= 991
          ? {
              textAlign: "center",
              height: "auto",
              backgroundColor: "rgb(29 41 81)",
            }
          : {
              textAlign: "center",
              height: "80px",
              backgroundColor: "rgb(29 41 81)",
            }
      }
    >
      <Container>
        <Navbar.Brand style={{ color: "white" }}>
          <img
            style={
              window.innerWidth <= 991
                ? { height: "50px", marginRight: "20px" }
                : { height: "200px" }
            }
            src={
              window.innerWidth <= 991
                ? "/images/cds.webp"
                : "/images/untitled17-202404122345591-6632efdb353d8.webp"
            }
            alt="Central Door Services"
          />
          {window.innerWidth <= 991
            ? window.innerWidth <= 381
              ? ""
              : "Central Door Services"
            : ""}
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ backgroundColor: "white" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.links.map((link, index) => (
              <Nav.Link
                key={index}
                onClick={link.onClick}
                style={{ color: "white", letterSpacing: "2px" }}
                href={link.route}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link
              href="tel:737-307-6006"
              style={{ color: "white", letterSpacing: "2px", fontSize: "20px" }}
            >
              (737) 307-6006
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <Navbar
      sticky="top"
      expand="lg"
      style={
        window.innerWidth <= 991
          ? {
              textAlign: "center",
              height: "auto",
              backgroundColor: "rgb(29 41 81)",
            }
          : {
              textAlign: "center",
              height: "120px",
              backgroundColor: "rgb(29 41 81)",
            }
      }
    >
      <Container
        style={{
          display: "flex",

          alignItems: "center",
        }}
      >
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Navbar.Brand
            style={{ color: "white", display: "flex", alignItems: "center" }}
          >
            <Nav.Link href="/">
            <img
              style={
                window.innerWidth <= 991
                  ? { height: "50px", marginRight: "20px" }
                  : { height: "400px" }
              }
              src={
                window.innerWidth <= 991
                  ? "/images/cds.webp"
                  : "/images/untitled17-202404122345591-6632efdb353d8.webp"
              }
              alt="Central Door Services"
            />
            </Nav.Link>

            {window.innerWidth <= 991
              ? window.innerWidth <= 381
                ? ""
                : "Central Door Services"
              : ""}
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navibar;
