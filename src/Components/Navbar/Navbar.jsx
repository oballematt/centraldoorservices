import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navibar(props) {
  return (
    <Navbar sticky='top' expand="lg" style={{backgroundColor: "rgb(85 99 90)"}}>
      <Container >
        <Navbar.Brand style={{color: "white"}} >Central Door Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={props.serviceClick} style={{color: "white", letterSpacing: "2px"}} >Services</Nav.Link>
            <Nav.Link onClick={props.areaClick} style={{color: "white", letterSpacing: "2px"}} >Service Areas</Nav.Link>
            <Nav.Link onClick={props.contactClick} style={{color: "white", letterSpacing: "2px"}} >Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar
