import React from "react";
import { Carousel, Slider, Slide, Caption } from "react-materialize";
import "materialize-css";

import background from "../../assets/light_honeycomb.png";
// import background from "../../assets/dark-honeycomb.png";
import worldMap from "../../assets/J&D_World.png";
import gameMap1 from "../../assets/GameMap1.png";
import gameMap2 from "../../assets/GameMap2.png";
import gameMap3 from "../../assets/GameMap3.png";

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

          <div className="row">
            <div
              className="col s12 m6"
              style={{
                margin: "30px",
                padding: "50px",
                border: "5px solid black",
                marginBottom: "100px",
              }}
            >
              <Slider
                fullscreen={false}
                options={{
                  duration: 200,
                  height: 500,
                  indicators: true,
                  interval: 3000,
                }}
              >
                <Slide image={<img alt="" src={gameMap1} />}>
                  <Caption placement="center">
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </Caption>
                </Slide>
                <Slide image={<img alt="" src={gameMap2} />}>
                  <Caption placement="left">
                    <h3>Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </Caption>
                </Slide>
                <Slide image={<img alt="" src={gameMap3} />}>
                  <Caption placement="left">
                    <h3>Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </Caption>
                </Slide>
              </Slider>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const imageBoxStyle = {
  padding: "80px",
};

const spanStyle = {
  fontSize: "1.5rem",
};
