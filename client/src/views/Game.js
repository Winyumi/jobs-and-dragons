import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-materialize';

import World from '../components/World';
import Dialogue from '../components/Dialogue';
import CharBox from '../components/CharBox';
import { usePlayerContext } from '../contexts/PlayerContext';
import history from '../utils/history';

import backgroundDark from '../assets/dark-honeycomb.png';
import backgroundLight from '../assets/light_honeycomb.png';

const Game = () => {
  const [state, dispatch] = usePlayerContext();
  const [isInteracting, setIsInteracting] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    setIsInteracting(state.isInteracting);
  }, [state.isInteracting]);

  let RowStyles;
  if (isInteracting || isAccepted) {
    RowStyles = {
      opacity: '0.25',
      display: 'flex',
      justifyContent: 'center',
    };
  } else {
    RowStyles = {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    };
  }

  const handleQuestAccept = () => {
    handleQuestDecline();
    setIsAccepted(true);
  };

  const handleQuestDecline = () => {
    setIsInteracting(!state.isInteracting);
    dispatch({
      type: 'toggleIsInteracting',
      payload: !state.isInteracting,
    });
  };

  return (
    <>
      <div style={PageStyles}>
        <Row style={RowStyles}>
          <Col className='charnav' s={3} style={{ marginTop: '50px' }}>
            <div style={charBoxStyles}>
              <CharBox />
            </div>
          </Col>

          <Col className='' s={9} style={GameBoxStyles}>
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
    </>
  );
};
export default Game;

const charBoxStyles = {
  margin: '30px',
  padding: '30px',
  paddingBottom: '100px',
  backgroundImage: `url(${backgroundLight})`,
};

const PageStyles = {
  top: '0px',
  width: '100%',
  height: '90vh',
  backgroundImage: `url(${backgroundDark})`,
};

const GameBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
};
