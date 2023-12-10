import React from "react";
import Button2 from "../Button/Button";
import Button from 'react-bootstrap/Button';

const Header = (props) => {
  return (
    <div style={headerContainerStyle}>
      <img
        src={import.meta.env.BASE_URL + "/public/shutterstock_2032605872.jpg"}
        alt="Header Image"
        style={imageStyle}
      />
      <div style={textContainerStyle}>
        <div style={overlayStyle}>
          <h1 style={{ fontSize: "75px" }}>Central Door Services</h1>
          <h2>Your number one commercial door solution in Austin, Texas!</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button style={buttonStyles} onClick={props.serviceClick}>Services</Button>
            <Button style={buttonStyles} onClick={props.contactClick}>Contact Us</Button>
            {/* <Button2 onClick={props.onClickService} style={{ marginRight: "10px" }}>Our Services</Button2>
            <Button2  onClick={props.onClickContact}>Contact US</Button2> */}
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
  backgroundColor: 'rgb(85 99 90)',
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
