import React from "react";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  return (
    <div style={headerContainerStyle}>
      <img
        src="https://d2q0snk2i1y1r8.cloudfront.net/opt_header.webp"
        alt="Central Door Services"
        style={imageStyle}
      />
      <div style={textContainerStyle}>
        <div style={overlayStyle}>
          <h1 style={headerTextStyle}>Central Door Services</h1>
          <h2 style={subheaderTextStyle}>
            Your number one commercial door solution in Austin, Texas!
          </h2>
          <div style={buttonContainerStyle}>
            <Button style={buttonStyles} onClick={props.serviceClick}>
              SERVICES
            </Button>
            <a
              href="https://clienthub.getjobber.com/booking/c0f85abf-de78-419e-af72-61ab6a1f99ae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button style={buttonStyles}>BOOK APPOINTMENT</Button>
            </a>
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
  height: "100%",
  objectFit: "cover",
  margin: "0",
};

const textContainerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "white",
  width: "100%",
};

const overlayStyle = {
  background: "rgba(0, 0, 0, 0.5)",
  padding: "30px 0 60px 0",
};

const headerTextStyle = {
  fontSize: "3rem",
  letterSpacing: "3px",
};

const subheaderTextStyle = {
  fontSize: "1.5rem",
  letterSpacing: "2px",
  margin: "20px 0",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
};

const buttonStyles = {
  backgroundColor: "rgb(29,41,81)",
  borderRadius: "5px",
  borderStyle: "none",
  boxShadow: "rgba(245, 244, 247, .25) 0 1px 1px inset",
  color: "#fff",
  cursor: "pointer",
  fontSize: "1.5rem",
  fontWeight: "500",
  lineHeight: "1.5",
  textAlign: "center",
  padding: "10px 20px",
  margin: "0 10px",
  letterSpacing: "3px",
};

export default Header;
