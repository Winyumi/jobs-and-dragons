import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-materialize";

import World from "../components/World";
import Dialogue from "../components/Dialogue";
import Chest from "../components/Chest";
import CharBox from "../components/CharBox";
// import Quests from '../components/QuestsList';
import { usePlayerContext } from "../contexts/PlayerContext";
import history from "../utils/history";

import background from "../assets/J&D_BG.png";
import dungeonBG from "../assets/J&D_DungeonWall.png";

const Game = () => {
  const [state, dispatch] = usePlayerContext();
  const [isInteracting, setIsInteracting] = useState(false);
  const [isOpening, setIsOpening] = useState();
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    setIsInteracting(state.isInteracting);
    setIsOpening(state.isOpening);
  }, [state.isInteracting, state.isOpening]);

  let RowStyles;
  if (isInteracting || isAccepted) {
    RowStyles = {
      opacity: "0.25",
      display: "flex",
      justifyContent: "center",
    };
  } else {
    RowStyles = {
      padding: "100px 100px",
      width: "100%",
      height: "800px",
      margin: "1em 1em 1em 1em",
      display: "flex",
      justifyContent: "center",
    };

    const handleQuestAccept = () => {
      handleQuestDecline();
      setIsAccepted(true);
    };

    const handleQuestDecline = () => {
      setIsInteracting(!state.isInteracting);
      dispatch({
        action: "toggleIsInteracting",
        payload: !state.isInteracting,
      });
    };

    const handleLinkDecline = () => {
      setIsOpening(!state.isOpening);
      dispatch({
        action: "toggleIsOpening",
        payload: !state.isOpening,
      });
    };

    return (
      <>
        <div style={PageStyles}>
          <Row style={RowStyles}>
            <Col className="charnav" s={3} style={CharBoxStyles}>
              <div style={DoubleBox}>
                <CharBox />
              </div>
            </Col>

            <Col className="" s={9} style={GameBoxStyles}>
              <World path={history.location.pathname} />
            </Col>
          </Row>
        </div>

        {isInteracting && (
          <Dialogue
            handleDecline={handleQuestDecline}
            handleAccept={handleQuestAccept}
          />
        )}
        {/* {isAccepted && <Quests />} */}
        {isOpening && <Chest handleDecline={handleLinkDecline} />}
      </>
    );
  }
};

export default Game;

const DoubleBox = {
  margin: "30px",
  padding: "30px",
  paddingBottom: "50px",
  background: "white",
};

const PageStyles = {
  width: "100vw",
  height: "100vh",
  backgroundColor: "black",
  // backgroundImage: `url(${background})`,
  backgroundSize: "cover",
};

const CharBoxStyles = {
  display: "box",
  justifyContent: "center",
  backgroundImage: `url(${dungeonBG})`,
  margin: "20px",
  border: "2px solid",
};

const GameBoxStyles = {
  display: "flex",
  justifyContent: "center",
  margin: "20px",
};
