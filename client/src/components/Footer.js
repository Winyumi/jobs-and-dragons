import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const footerStyle = {
  position: 'relative',
  width: '100%',
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  textShadow: '2px 2px black',
  padding: '12px',
  minHeight: 65,
};

function Footer() {
  const [styles, setStyles] = useState({
    ...footerStyle,
  });

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/resume') {
      const footer = document.getElementById('footer');
      const footerRect = footer.getBoundingClientRect();
      const footerHeight = parseInt(footerRect.bottom - footerRect.top);

      if (!(parseInt(window.innerHeight - footerRect.top) <= footerHeight)) {
        setStyles({
          position: 'absolute',
          bottom: 0,
          width: '100%',
          background: '#333',
          color: '#fff',
          textAlign: 'center',
          textShadow: '2px 2px black',
          padding: '12px',
          minHeight: 65,
        });
      }
    } else {
      setStyles({
        ...footerStyle,
      });
    }
  }, [location]);

  return (
    <footer id='footer' style={styles} copyrights='copy 2015 Copyright Text'>
      <h5>JOBS & DRAGONS © 2020</h5>
    </footer>
  );
}

export default Footer;
