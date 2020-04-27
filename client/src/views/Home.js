import React from "react";
import background from "../assets/J&D_Dungeon_dark.jpg";
import brandLogo from "../assets/J&D_newLogo.png";

import "materialize-css";

function Home() {
  return (
    <React.Fragment>
      <img
        class="responsive-img"
        style={bgStyle}
        src={background}
        alt="Background Image"
      />
      <div style={topStyle}>
        <div className="container">
          <img
            style={brandLogoStyle}
            className="responsive-img"
            src={brandLogo}
          />
        </div>

        <div className="container" style={descStyle}>
          <h3>Let the JOB HUNT begin ...</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

const topStyle = {
  position: "absolute",
  top: "100px",
  height: "100%",
  width: "100%",
  textAlign: "center",
};

const bgStyle = {
  height: "95vh",
  display: "cover",
  width: "100vw",
  position: "relative",
};

const brandLogoStyle = {
  // height: "100%",
  width: "100%",
  paddingTop: "100px",
};

const descStyle = {
  color: "white",
  marginTop: "30px",
  background: "rgb(0,0,0)",
  background:
    "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,0.1310129915730337) 87%)",
  width: "90vw",
  textShadow: "2px 2px black",
};

export default Home;
