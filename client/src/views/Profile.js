import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { api } from "../utils/api";

import background from "../assets/dark-honeycomb.png";

import "materialize-css";

import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

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

  function changeTo(e) {
    e.target.style.background = "red";
    e.target.style.translate = "5px";
  }

  function changeBack(e) {
    e.target.style.background = "#535456";
  }

  return (
    <div className="row" style={profileStyle}>
      <div className="center col s12 m6" style={{ marginTop: "50px" }}>
        <img
          src={user.picture}
          alt="User Profile"
          className="circle responsive-img"
          style={userImageStyle}
        />
        <h3 style={h3Style}>USERNAME</h3>
        <div className="card-panel red" style={cardStyle}>
          {user.name}
        </div>
      </div>

      <div className="center col s12 m6" style={{ marginTop: "50px" }}>
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
      </div>
    </div>
  );
};

const profileStyle = {
  height: "90vh",
  backgroundImage: `url(${background})`,
};

const h3Style = {
  color: "red",
  marginBottom: "100px",
};

const BtnStyle = {
  width: "200px",
  background: "#535456",
  borderRadius: "25%",
  fontFamily: "Alagard",
  margin: "10px",
  boxShadow: "0 5px #999",
};

const userImageStyle = {
  width: "200px",
  height: "200px",
  marginTop: "50px",
};

const cardStyle = {
  fontFamily: "Alagard",
  fontSize: "xx-large",
  color: "whitesmoke",
  textShadow: "2px 2px darkred",
  margin: "20px",
};

export default Profile;
