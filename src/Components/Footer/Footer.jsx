import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: "rgb(29,41,81)",
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    left: '0',
    bottom: '0',
    width: '100%',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Central Door Services. All rights reserved.</p>
    </footer>
  );
};

export default Footer;