import React from "react";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  return (
    <div style={headerContainerStyle}>
      <img
        srcSet="/images/shutterstock_2267418927123.jpg 400w, /images/shutterstock_2267418927123.jpg 800w, /images/shutterstock_2267418927123.jpg 1200w"
        sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
        alt="Central Door Services"
        style={imageStyle}
        loading="lazy"
      />
      <div style={textContainerStyle}>
        <div style={overlayStyle}>
          <h1 style={headerTextStyle}>Central Door Services</h1>
          <h2 style={subheaderTextStyle}>Your number one garage door solution in Austin, Texas!</h2>
          <div style={buttonContainerStyle}>
            <Button style={buttonStyles} onClick={props.serviceClick}>
              Services
            </Button>
            <Button style={buttonStyles} onClick={props.contactClick}>
              Contact Us
            </Button>
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
  fontFamily: "Bebas Neue, sans-serif",
  fontSize: "1.5rem",
  fontWeight: "500",
  lineHeight: "1.5",
  textAlign: "center",
  padding: "10px 20px",
  margin: "0 10px",
  letterSpacing: "3px"
};

// Media query for smaller screens
// const mediaQuery = `@media screen and (max-width: 768px) {
//   .header-container {
//     height: 70vh; /* Adjust as needed */
//   }

//   .overlay {
//     padding: 20px 0 40px 0;
//   }

//   .button-container Button {
//     font-size: 1.2rem; /* Adjust as needed */
//     padding: 8px 16px; /* Adjust padding as needed */
//     margin: 0 5px; /* Adjust margin as needed */
//   }
// }`;

export default Header;
