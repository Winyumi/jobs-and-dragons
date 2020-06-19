import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import { useUserContext } from "../contexts/UserContext";
import "materialize-css";

const Stats = () => {
  const [state, dispatch] = useUserContext();
  const [gamestats, setGamestats] = useState({});

  useEffect(() => {
    setGamestats(state.user.gamestats);
  }, [state.user.gamestats]);
  return (
    <>
      <div className="row">
        <div className="col">
          <span>HP</span>
          <StatsBar stat={gamestats.numOfStars * 10} />
          <div class="progress">
            <div class="determinate" style={"width: 30px"}></div>
          </div>
        </div>
        <div className="col">
          <span>JP</span>
          <StatsBar stat={gamestats.jp} />
        </div>
        <div className="col">
          <span >STRENGTH</span>
          <StatsBar stat={gamestats.followers} />
        </div>
        <div className="col">
          <span>SPEED</span>
          <StatsBar stat={gamestats.speed} />
        </div>
        <div className="col">
          <span>EXPERIENCE</span>
          <StatsBar stat={gamestats.publicRepos} />
        </div>

      </div>
    </>
  );
};

const StatsBar = (props) => {
  return (
    <div
      className="stats-bar"
      style={{
        position: "relative",
        height: "30px",
        border: "1px solid black",
      }}
    >
      {/* <Filler stat={props.stat} /> */}
    </div>
  );
};

const Filler = (props) => {
  console.log(props.stat)
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

export default Stats;
