import React from "react";
import Button from 'react-bootstrap/Button';

const Header = (props) => {
  // Calculate the dynamic height for the image
  const imageHeight = window.innerHeight * 0.5; // Adjust the multiplier as needed

  return (
    <div style={headerContainerStyle}>
      <img
        src="/images/shutterstock_2267418927123.jpg"
        alt="Central Door Services"
        style={{ ...imageStyle, height: `${imageHeight}px` }} // Set height dynamically
        loading="lazy"
      />
      <div style={textContainerStyle}>
        <div style={overlayStyle}>
          <h1 style={{ fontSize: "75px" }}>Central Door Services</h1>
          <h2>Your number one garage door solution in Austin, Texas!</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button style={buttonStyles} onClick={props.serviceClick}>Services</Button>
            <Button style={buttonStyles} onClick={props.contactClick}>Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const headerContainerStyle = {
  height: "50vh",
  position: "relative",
};

const imageStyle = {
  width: "100%",
  objectFit: "cover",
  margin: "0",
};

const textContainerStyle = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "white",
  letterSpacing: "3px",
  width: "100%",
};

const overlayStyle = {
  background: "rgba(0, 0, 0, 0.5)",
  padding: "30px 0 60px 0",
  width: "100%",
  textAlign: "center",
};

const buttonStyles = {
  backgroundColor: 'rgb(29,41,81)',
  borderRadius: '5px',
  borderStyle: 'none',
  boxShadow: 'rgba(245, 244, 247, .25) 0 1px 1px inset',
  color: '#fff',
  cursor: 'pointer',
  fontFamily: 'Bebas Neue, sans-serif',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '60px',
  textAlign: 'center',
  width: '190px',
  letterSpacing: "3px",
  margin: "10px"
};

export default Header;