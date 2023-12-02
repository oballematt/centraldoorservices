import React from "react";

const Button = ({children, onClickContact, onClickService}) => {
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
    height: '60px',
    lineHeight: '60px',
    textAlign: 'center',
    width: '190px',
    letterSpacing: "3px",
    margin: "10px"
  };

  const handleClick = () => {
    if (onClickContact) {
      onClickContact()
    }

    if (onClickService) {
      onClickService()
    }
  }

  return (
    <button onClick={handleClick} role="button" style={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;
