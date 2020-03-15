import React, { useEffect } from 'react';
import World from '../components/World';
import Dialogue from '../components/Dialogue';
import CharBox from '../components/CharBox';
import { usePlayerContext } from '../contexts/PlayerContext';

import 'materialize-css';

const Game = () => {
  const [state, dispatch] = usePlayerContext();

  let styles;
  if (state.isInteracting) {
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
          <World />
        </div>
      </div>
      <div style={{}}>{state.isInteracting && <Dialogue />}</div>
    </>
  );
};
export default Game;
