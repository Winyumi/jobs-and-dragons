import React, { useEffect, useState } from 'react';
import World from '../components/World';
import Dialogue from '../components/Dialogue';
import CharBox from '../components/CharBox';
import Quests from '../components/QuestsList';
import { usePlayerContext } from '../contexts/PlayerContext';

const Game = props => {
  const [state, dispatch] = usePlayerContext();
  const [isInteracting, setIsInteracting] = useState();
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    setIsInteracting(state.isInteracting);
  }, [state.isInteracting]);

  let styles;
  if (isInteracting || isAccepted) {
    styles = {
      opacity: '0.25',
      padding: '100px 100px',
      width: '100%',
      height: '800px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center'
    };
  } else {
    styles = {
      padding: '100px 100px',
      width: '100%',
      height: '800px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center'
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
      payload: !state.isInteracting
    });
  };

  return (
    <>
      <div className='row' style={styles}>
        <div
          className='col s3 charnav'
          style={{
            border: '1px solid black'
          }}
        >
          <CharBox />
        </div>
        <div
          className='col s9'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <World path='/game/' />
        </div>
      </div>
      {isInteracting && (
        <Dialogue
          handleDecline={handleQuestDecline}
          handleAccept={handleQuestAccept}
        />
      )}
      {isAccepted && <Quests />}
    </>
  );
};
export default Game;
