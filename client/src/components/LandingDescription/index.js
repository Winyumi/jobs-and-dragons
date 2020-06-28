import React from "react";

import { Slider, Slide } from "react-materialize";
import { ScrollTo } from "react-scroll-to";

import "materialize-css";

import worldMap from "../../assets/J&D_World.png";
import gameMap1 from "../../assets/GameMap1.png";
import gameMap2 from "../../assets/GameMap2.png";
import gameMap3 from "../../assets/GameMap3.png";

import userinfoss from "../../assets/userinfo_ss.png";
import coverpagess from "../../assets/coverpage_ss.png";

export default class LandingDescription extends React.Component {
  render() {
    return (
      <>
        <div>
          <div className="row">
            <div className="center col s12 m6" style={{ marginTop: "30px" }}>
              <h2>Explore the World of Fantasy</h2>
              <br></br>
              <br></br>
              <span style={spanStyle}>
                Guide your character through the turbulent lands of Codera, a
                once peaceful land now mysteriously divided.
                <br></br>
                <br></br>
                Can you unite all the people of Codera together once again?
              </span>
            </div>

            <div className="center col s12 m6" style={imageBoxStyle}>
              <img src={worldMap} alt="World Map" className="responsive-img" />
            </div>
          </div>

          <div
            className="row"
            style={{
              backgroundColor: "darkgrey",
              backgroundBlendMode: "lighten",
            }}
          >
            <div className="center col s12 m6">
              <h2>Explore the Quests ...</h2>

              <Slider
                fullscreen={false}
                options={{
                  duration: 200,
                  width: 800,
                  height: 600,
                  indicators: true,
                  interval: 3000,
                }}
              >
                <Slide image={<img alt="" src={gameMap1} />}></Slide>
                <Slide image={<img alt="" src={gameMap2} />}></Slide>
                <Slide image={<img alt="" src={gameMap3} />}></Slide>
              </Slider>
            </div>
            <div
              className="center col s12 m5"
              style={{ paddingTop: "60px", paddingBottom: "30px" }}
            >
              <h3>The Lair of the Oracle</h3>
              <span style={spanStyle}>
                The home of the Oracle and his acolytes, the lair is a
                mysterious repository of knowledge collected from Tenretni.
              </span>
              <br></br>

              <h3>The Namuh Secruoser Guildhouse</h3>
              <span style={spanStyle}>
                Although the guild has many outposts located throughout Codera,
                the Guildhouse in Gninigeb City has the reputation as being the
                preferred home of the Guardian, the leader of Namuh Secruoser.
              </span>
              <br></br>

              <h3>The Javan Playhouse</h3>
              <span style={spanStyle}>
                The once famous theatre is the home of the renown playwright
                Yoric Scorch, it still remains the centre of culture in Gninigeb
                City.
              </span>
            </div>
          </div>

          <div
            className="row"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            <div className="col s12 m6">
              <h2>...While Developing your Career!</h2>
              <span style={spanStyle}>
                As the user progresses through the game by completing quests,
                they amass career materials and knowledge necessary to succeed
                in their job search.
              </span>
            </div>
            <div className="col s6 m3">
              <img
                src={userinfoss}
                alt="User Info Page Screenshot"
                className="responsive-img"
              />
            </div>
            <div className="col s6 m3">
              <img
                src={coverpagess}
                alt="Cover Page Screenshot"
                className="responsive-img"
              />
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="container" style={descStyle}>
                <ScrollTo>
                  {({ scroll }) => (
                    <h3 onClick={() => scroll({ x: 0, y: 0 })}>
                      LOGIN to begin JOB HUNT ...
                    </h3>
                  )}
                </ScrollTo>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const imageBoxStyle = {
  padding: "50px",
};

const spanStyle = {
  fontSize: "1.5rem",
  fontFamily: 'sans-serif',
};

const descStyle = {
  color: "white",
  paddingTop: "30px",
  background:
    "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,0.1310129915730337) 87%)",
  width: "90vw",
  textShadow: "2px 2px black",
  paddingBottom: "100px",
  textAlign: "center",
};
