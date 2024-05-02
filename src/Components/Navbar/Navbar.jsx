import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navibar(props) {
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={window.innerWidth <= 991 ? { height: "auto", backgroundColor: "rgb(29 41 81)" }  : { height: "80px", backgroundColor: "rgb(29 41 81)" }}
    >
      <Container>
        <Navbar.Brand style={{ color: "white" }}>
          <img
            style={window.innerWidth <= 991 ? { height: "50px", marginRight: "20px" }  :  { height: "200px" }}
            src={
              window.innerWidth <= 991
                ? "/images/untitled17-202404122346131-6632efdb7e311.webp"
                : "/images/untitled17-202404122345591-6632efdb353d8.webp"
                
            }
            alt="Central Door Services"
          />
          {window.innerWidth <= 991 
          ? (window.innerWidth <= 381 ? "" : 'Central Door Services')
          : ""}
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ backgroundColor: "white" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={props.serviceClick}
              style={{ color: "white", letterSpacing: "2px" }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={props.areaClick}
              style={{ color: "white", letterSpacing: "2px" }}
            >
              Service Areas
            </Nav.Link>
            <Nav.Link
              onClick={props.contactClick}
              style={{ color: "white", letterSpacing: "2px" }}
            >
              Contact Us
            </Nav.Link>
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
  );
}

export default Navibar;
