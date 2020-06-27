import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { api } from "../utils/api";
import background from "../assets/dark-honeycomb.png";

import Stats from "./../components/Stats";
import Inventory from "./../components/Inventory";

import "materialize-css";
import ProgressBarExample from "../components/progressBar/index";
import Questmap from "../components/Questmap";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";
// import { Row, Col } from "react-materialize";


const Profile = () => {
  const { loading, user } = useAuth0();
  const [state, dispatch] = useUserContext();
  console.log(state.user);

  useEffect(() => {
    if (loading || !user) {
      return <Loading />;
    }

    api.getUserInfo(user.email).then((result) => {
      if (result.success) {
        dispatch({ type: "user", payload: result.data });
      } else {
        let newUser = {
          name: "",
          email: "",
          picture: "",
          progressTracker: {
            quest1: false,
            quest2: false,
            quest3: false
          },
          gamestats: {
            publicRepos: 0,
            followers: 0,
            numOfStars: 0,
            jp: 20,
            speed: 75,
          },
          inventory: {
            scroll: false,
            bow: false,
          },
          experience: [],
          education: [],
          skills: [],
          projects: [],
          expertise: [],
          jobsearch: [],
        };
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.picture = user.picture;

        window
          .fetch(`https://api.github.com/users/${user.nickname}`)
          .then((res) => res.json())
          .then((res) => {
            newUser.gamestats.publicRepos = res["public_repos"];
            newUser.gamestats.followers = res["followers"];
            return newUser;
          })
          .then((newUser) => {
            window
              .fetch(`https://api.github.com/users/${user.nickname}/repos`)
              .then((res) => res.json())
              .then((res) => {
                const numOfStars = res.reduce((acc, repo) => {
                  return acc + repo["stargazers_count"];
                }, 0);
                newUser.gamestats.numOfStars = numOfStars;
                return newUser;
              })
              .then((newUser) => {
                api.addUserInfo(newUser).then((result) => {
                  if (result.success) {
                    dispatch({ type: "user", payload: result.data });
                  }
                });
              });
          });
      }
    });
  }, [loading, user, dispatch]);

  // function changeTo(e) {
  //   e.target.style.background = "red";
  //   e.target.style.translate = "5px";
  // }

  // function changeBack(e) {
  //   e.target.style.background = "#535456";
  // }

  const questState = state.user.progressTracker;

  return (
    <>

      <div style={profileStyle}>
        <div className="row">

          <div className="col s12 m6" style={{ marginTop: "50px" }}>
            <div className="row">
              <div className="card-panel" style={mediaStyle}>

                <div className="row valign-wrapper">
                  <div className="col s3">
                    <img src={user.picture} alt="User profile picture" class="circle responsive-img"></img>
                  </div>
                  <div className="center col s9">
                    <h5 style={h3Style}>{user.name}</h5>
                    Username : {user.nickname}
                    <br></br>
                    Email : {user.email}
                    <br></br>
                  </div>
                </div>

                <div className="row valign-wrapper">
                  <div className="center col s10">
                    <Stats />
                  </div>
                </div>

                <div className="row valign-wrapper">
                  {/* <div className="center col s12"> */}
                    <ProgressBarExample />
                  {/* </div> */}
                </div>

              </div>

            </div>
          </div>

          {/* <div className="center col s12 m6" >
            <h3 style={h3Style}>Begin Your QUEST</h3>
            <Link
              className="btn-large"
              style={BtnStyle}
              onMouseOver={changeTo}
              onMouseLeave={changeBack}
              to="/game/quest/01"
              name="gameBtn"
            >
              Quest 1
            </Link>
            <br></br>
            <Link
              className="btn-large"
              style={BtnStyle}
              onMouseOver={changeTo}
              onMouseLeave={changeBack}
              to="/game/quest/02"
              name="gameBtn"
            >
              Quest 2
            </Link>
            <br></br>
            <Link
              className="btn-large"
              style={BtnStyle}
              onMouseOver={changeTo}
              onMouseLeave={changeBack}
              to="/game/quest/03"
              name="gameBtn"
            >
              Quest 3
            </Link>
            <br></br>
          </div> */}


          {/* Quest 1 Description  */}
          {!questState.quest1 && !questState.quest2 && !questState.quest3 ?
            <div className="center col s12 m6" style={{ marginTop: "50px" }} id="quest1Description">
              <div className="card-panel" style={mediaStyle}>
                <div className="row valign-wrapper">
                  <div className="center col s12">
                    <h3 style={h3Style}>QUEST 1 Description</h3>
                    <div className="card-panel red">
                      <span className="white-text">
                        ENTER Game Explaination 1
                    </span>
                    </div>
                    <div className="card-panel red">
                      <span className="white-text">
                        ENTER Real World Explaination 1
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> : ''}


          {/* Quest 2 Description  */}
          {questState.quest1 && !questState.quest2 && !questState.quest3 ?
            <div className="center col s12 m6" style={{ marginTop: "50px" }} id="quest2Description">
              <div className="card-panel" style={mediaStyle}>
                <div className="row valign-wrapper">
                  <div className="center col s12">
                    <h3 style={h3Style}>QUEST 2 Description</h3>
                    <div className="card-panel red">
                      <span className="white-text">
                        ENTER Game Explaination 2
                    </span>
                    </div>
                    <div className="card-panel red">
                      <span className="white-text">
                        ENTER Real World Explaination 2
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> : ''}

          {/* Quest 3 Description  */}
          {questState.quest1 && questState.quest2 && !questState.quest3 ?
            <div className="center col s12 m6" style={{ marginTop: "50px" }} id="quest3Description">
              <div className="card-panel" style={mediaStyle}>
                <div className="row valign-wrapper">
                  <div className="center col s12">
                    <h3 style={h3Style}>QUEST 3 Description</h3>
                    <div class="card-panel red">
                      <span className="white-text">
                        ENTER Game Explaination 3
                    </span>
                    </div>
                    <div className="card-panel red">
                      <span className="white-text">
                        ENTER Real World Explaination 3
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> : ''}

          {/* ALL QUEST COMPLETED - After 3rd Quest  */}
          {questState.quest1 && questState.quest2 && questState.quest3 ?
            <div className="center col s12 m6" style={{ marginTop: "50px" }} id="quest3Description">
              <div className="card-panel" style={mediaStyle}>
                <div className="row valign-wrapper">
                  <div className="center col s12">
                    <h3 style={h3Style}>Your Are Ready to Conquer the WORLD !!! </h3>
                    <br></br>
                    <Link to="/resume">
                      <button
                        rel="noopener noreferrer"
                        className="btn btn-large red darken-4"
                      >
                        View Resume
                      </button>
                    </Link>
                    <br></br>
                    <Link to="/joblisting/saved">
                      <button
                        rel="noopener noreferrer"
                        className="btn btn-large red darken-4"
                      >
                        View Saved Jobs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div> : ''}

        </div>

        <div className="row">
          <div className="center col s12">
            <Questmap />
          </div>
        </div>

        {/* <div className="row">
          <div className="center col s12">
            <Inventory />
          </div>
        </div> */}

      </div>
    </>
  );
};

// const StatsBar = (props) => {
//   return (
//     <div
//       className="stats-bar"
//       style={{
//         position: "relative",
//         height: "30px",
//         border: "1px solid black",
//       }}
//     >
//       <Filler stat={props.stat} />
//     </div>
//   );
// };

const Filler = (props) => {
  return (
    <div
      className="filler"
      style={{
        background: "red",
        height: "100%",
        width: `${props.stat}px`,
      }}
    >
      <p>{props.stat}/100</p>
    </div>
  );
};

const profileStyle = {
  height: "100%",
  width: "100%",
  backgroundImage: `url(${background})`,
};

const mediaStyle = {
  marginLeft: "20px",
  padding: "10px",
  background: "#535456"
}

const h3Style = {
  color: "red",
};

const BtnStyle = {
  width: "200px",
  background: "#535456",
  borderRadius: "25%",
  fontFamily: "Alagard",
  margin: "10px",
  boxShadow: "0 5px #999",
};

// const userImageStyle = {
//   width: "200px",
//   height: "200px",
//   marginTop: "50px",
// };

const cardStyle = {
  fontFamily: "Alagard",
  fontSize: "xx-large",
  color: "whitesmoke",
  textShadow: "2px 2px darkred",
  margin: "20px",
};

export default Profile;
