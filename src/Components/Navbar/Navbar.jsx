import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navibar(props) {
  return (
    <Navbar sticky='top' expand="lg" style={{backgroundColor: "rgb(29 41 81)"}}>
      <Container >
        <Navbar.Brand  style={{color: "white"}} ><img style={{marginRight: "5px"}} src='src/assets/image0000001.svg'/>Central Door Services</Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor: "white"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={props.serviceClick} style={{color: "white", letterSpacing: "2px"}} >Services</Nav.Link>
            <Nav.Link onClick={props.areaClick} style={{color: "white", letterSpacing: "2px"}} >Service Areas</Nav.Link>
            <Nav.Link onClick={props.contactClick} style={{color: "white", letterSpacing: "2px"}} >Contact Us</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link style={{color:"white", letterSpacing: "2px", fontSize: "20px"}}>737-307-6006</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar
