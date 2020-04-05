import React, { useEffect, useState } from 'react';

import { Container, Row, Col } from 'react-materialize';
import World from '../components/World';
import Dialogue from '../components/Dialogue';
import Chest from '../components/Chest';
import CharBox from '../components/CharBox';
import Quests from '../components/QuestsList';
import { usePlayerContext } from '../contexts/PlayerContext';
import history from '../utils/history';

import background from '../assets/J&D_BG.png';

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
      opacity: '0.25',
      display: 'flex',
      justifyContent: 'center',
      height: '80vh',

    };
  } else {
    RowStyles = {
      display: 'flex',
      justifyContent: 'center',
      height: '80vh',

    };
  }

  const handleQuestAccept = () => {
    handleQuestDecline();
    setIsAccepted(true);
  };

  const handleQuestDecline = () => {
    setIsInteracting(!state.isInteracting);
    dispatch({
      action: 'toggleIsInteracting',
      payload: !state.isInteracting,
    });
  };

  const handleLinkDecline = () => {
    setIsOpening(!state.isOpening);
    dispatch({
      action: 'toggleIsOpening',
      payload: !state.isOpening,
    });
  };

  return (
    <>
    <div style={PageStyles}>
      <Row style={RowStyles}>


        <Col
        className="charnav"
        s={3}
        style={CharBoxStyles}
        >
          <div><CharBox /></div>
        
        </Col>

        <Col
        className=""
        s={9}
        style={GameBoxStyles}
        >
        <World path={history.location.pathname} /> 
        </Col>


      </Row>

    </div>
    {/* <div className='row' style={styles}>

        <div className='col s3 charnav' style={{ border: '1px solid black'}}>
          <CharBox />
        </div>
        
        <div
          className='col s9'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <World path={history.location.pathname} />
        </div>
      </div> */}
      

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
};

const PageStyles = {
  width: "100vw",
  height: "80vh",
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover'

}

const CharBoxStyles = { 
  display:'box',
  justifyContent:'center',
  background: 'red',
  margin: '20px',
  border: '2px solid',
  // transform: 'translateX(-20%) translateY(-20%) rotate(-45deg)',
  // animation: 'animate 20s linear infinite'
}

const GameBoxStyles = { 
  display:'flex',
  justifyContent:'center',
  margin: '20px'

}

export default Game;
