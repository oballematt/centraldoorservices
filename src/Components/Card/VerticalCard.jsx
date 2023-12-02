import React from "react";

const VerticalCard = (props) => {
  return (
    <div style={cardStyle}>
      <img src={props.image} style={cardImageStyle} />
      <div style={cardContentStyle}>
        <h2 style={{fontSize: "30px"}}>{props.title}</h2>
        <p style={{fontSize: "18px"}}>{props.content}</p>
      </div>
    </div>
  );
};

const cardStyle = {
  width: "20%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "20px 20px 20px 20px",
  borderRadius: '25px'
};

const cardImageStyle = {
  width: "100%",
  height: "400px", // Adjust the height as needed
  objectFit: "cover",
  borderTopLeftRadius: '25px',
  borderTopRightRadius: '25px'
};

const cardContentStyle = {
  padding: "15px",
  textAlign: "center",
  letterSpacing: '1px'
};

export default VerticalCard;
