import React from "react";

import brandLogo from "../assets/J&D_newLogo.png";
import background from "../assets/J&D_Dungeon_dark.jpg";
import fullBackground from "../assets/light_honeycomb.png";

import LandingDescription from "../components/LandingDescription";

import "materialize-css";

function Home() {
  return (
    <>
      <div style={mainStyle}>
        <img
          class="responsive-img"
          style={bgStyle}
          src={background}
          alt="Background"
        />
        <div style={topStyle}>
          <div className="container">
            <img
              style={brandLogoStyle}
              className="responsive-img"
              src={brandLogo}
              alt="Brand Logo"
            />
          </div>

          <div className="container" style={descStyle}>
            <h3>Let the JOB HUNT begin ...</h3>
          </div>
        </div>
        <LandingDescription />
      </div>
    </>
  );
}
const mainStyle = {
  backgroundImage: `url(${fullBackground})`,
};

const bgStyle = {
  backgroundImage: `url(${background}) fixed`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "relative",
  width: "100%",
  height: "calc(100vh - 130px)",
};

const topStyle = {
  position: "absolute",
  top: "100px",
  width: "100%",
  textAlign: "center",
};

const brandLogoStyle = {
  width: "100%",
  paddingTop: "100px",
};

const descStyle = {
  color: "white",
  marginTop: "30px",
  background:
    "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,0.1310129915730337) 87%)",
  width: "90vw",
  textShadow: "2px 2px black",
};

export default Home;
