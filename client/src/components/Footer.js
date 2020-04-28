import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle} copyrights='copy 2015 Copyright Text'>
      <div>
        <h5>JOBS & DRAGONS © 2020</h5>
      </div>
    </footer>
  );
}

const footerStyle = {
  position: 'fixed',
  bottom: '0px',
  width: '100%',
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  textShadow: '2px 2px black',
  padding: '16px',
  maxHeight: 65,
  minHeight: 65,
};

export default Footer;
