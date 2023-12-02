import React from "react";
import Button from "../Button/Button";

const HorizontalCard = (props) => {
  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <img src={props.image} alt={props.title} style={cardImageStyle} />
      </div>
      <div style={textContentStyle}>
        <h1 style={{ fontSize: "65px", letterSpacing: "3px" }}>
          {props.title}
        </h1>
        <p style={{ fontSize: "20px", lineHeight: "40px" }}>{props.content}</p>
        <div style={{ alignSelf: "flex-end" }}>
          <Button>Contact Me</Button>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  display: "flex",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "auto",
  height: "600px",
  width: "100%",
};

const imageContainerStyle = {
  flex: "1", 
};

const cardImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const textContentStyle = {
  flex: "2", 
  padding: "15px",
  margin: "-50px 0px 0px 20px",
  textAlign: "start",
};

export default HorizontalCard;
