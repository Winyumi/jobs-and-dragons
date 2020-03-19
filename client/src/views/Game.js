import React, { useEffect, useState } from 'react';
import World from '../components/World';
import Guild from '../components/Guild';
import Dialogue from '../components/Dialogue';
import Chest from '../components/Chest';
import CharBox from '../components/CharBox';
import Quests from '../components/QuestsList';
import { usePlayerContext } from '../contexts/PlayerContext';

const Game = props => {
  console.log(props)
  const [state, dispatch] = usePlayerContext();
  const [isInteracting, setIsInteracting] = useState();
  const [isOpening, setIsOpening] = useState();
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    setIsInteracting(state.isInteracting);
    setIsOpening(state.isOpening);
  }, [state.isInteracting, state.isOpening]);

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

  const handleLinkDecline = () => {
    setIsOpening(!state.isOpening);
    dispatch({
      action: 'toggleIsOpening',
      payload: !state.isOpening
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
{window.location.pathname.indexOf("/1") > -1 ?  <World path='/game/' /> : window.location.pathname.indexOf("/2") > -1  ?  <Guild path='/game/' /> : "No game for you"}
    

        </div>
      </div>
      {isInteracting && (
        <Dialogue
          handleDecline={handleQuestDecline}
          handleAccept={handleQuestAccept}
        />
      )}
      {isAccepted && <Quests />}
      {isOpening && (
        <Chest
        handleDecline={handleLinkDecline}
        />
      )}

    </>
  );
};
export default Game;
