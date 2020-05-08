import React from "react";
import "materialize-css";

import background from "../../assets/light_honeycomb.png";
// import background from "../../assets/dark-honeycomb.png";
import worldMap from "../../assets/J&D_World.png";
import gameMap1 from "../../assets/GameMap1.png";

export default class LandingDescription extends React.Component {
  // componentDidMount() {}

  render() {
    return (
      <>
        <div>
          <div className="row">
            <div className="center col s12 m6" style={{ marginTop: "50px" }}>
              <h2>Explore the World of Fantasy</h2>
              <br></br>
              <br></br>
              <span style={spanStyle}>
                Guide your character through the turbulent lands of Codera, a
                once peaceful land now mysteriously divided.
                <br></br>
                Can you unite all the people of Codera together once again?
              </span>
            </div>

            <div className="center col s12 m6" style={imageBoxStyle}>
              <img src={worldMap} alt="World Map" className="responsive-img" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const imageBoxStyle = {
  padding: "100px",
};

const spanStyle = {
  fontSize: "1.5rem",
};
