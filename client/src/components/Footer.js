import React from "react";

function Footer() {
  return (
    <footer style={footerStyle} copyrights="copy 2015 Copyright Text">
      <div>
        <h5>JOBS & DRAGONS © 2020</h5>
      </div>
    </footer>
  );
}

const footerStyle = {
  position: "relative",
  width: "100%",
  background: "#333",
  color: "#fff",
  textAlign: "center",
  bottom: "0px",
  textShadow: "2px 2px black",
};

export default Footer;
