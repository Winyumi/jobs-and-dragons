import React from "react";
import "materialize-css";

import background from "../../assets/light_honeycomb.png";
import worldMap from "../../assets/J&D_World.png";
import gameMap1 from "../../assets/GameMap1.png";

export default class LandingDescription extends React.Component {
  // componentDidMount() {}

  render() {
    return (
      <>
        <div style={descStyle}>
          <div className="row">
            <div className="center col s12 m6" style={{ marginTop: "50px" }}>
              <h2>
                Securing a job in the web development industry can be very
                challenging.
              </h2>
              <br></br>
              <br></br>
              <h3>
                Having been recipients of the Bootcamp’s Career Services, we
                realize how much work and effort is needed to become competitive
                candidates.
              </h3>
            </div>

            <div className="center col s12 m6" style={{ marginTop: "50px" }}>
              <img
                src={worldMap}
                alt="World Map"
                className="responsive-img"
                style={imageStyle}
              />
            </div>
          </div>

          <div className="row" style={descStyle}>
            <div className="center col s12 m6" style={{ marginTop: "50px" }}>
              <img
                src={gameMap1}
                alt="World Map"
                className="responsive-img"
                style={gameMapStyle}
              />
            </div>
            <div className="center col s12 m6" style={{ marginTop: "50px" }}>
              <h3>
                This process can be repetitive and arduous. What if there was a
                way to make searching for a job, building career materials, and
                keeping coding skills sharp a fun and engaging experience?
              </h3>
              <h3>
                Jobs & Dragons is a FULL STACK application that reproduces the
                methods necessary to become employed and infuses them into a
                dungeon crawler/RPG game. Through GitHub account authentication,
                the user is provided with their initial character stats which
                improve as they finish quests. Each quest reflects a step in
                preparing for entering the web development job market, including
                creating a resume, searching for a job online, and crafting a
                cover letter.
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const descStyle = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "repeat",
  backgroundPosition: "center",
  // backgroundSize: "cover",
  position: "relative",
  width: "100%",
  height: "100%",
};

const imageStyle = {
  width: "500px",
  height: "600px",
  marginTop: "50px",
};

const gameMapStyle = {
  // width: "500px",
  // height: "600px",
  margin: "50px",
  padding: "50px",
};
