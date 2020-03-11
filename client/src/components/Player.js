import React, { useEffect } from 'react';
import { usePlayerContext } from '../contexts/PlayerContext';
import walkSprite from '../assets/player_walk.png';

const spriteLocation = "0 0";
// const direction = "west";

//Put the direction as dispatch({direction: "direction"})?
const Player = (props) => {
  const [state, dispatch] = usePlayerContext();
  useEffect(() => {
    const handleMovement = e => {
      switch (e.keyCode) {
        case 37:
          dispatch({ type: 'moveleft' , direction: 'west'});
          break;
        case 38:
          dispatch({ type: 'moveup' });
          break;
        case 39:
          dispatch({ type: 'moveright' });
          break;
        case 40:
          dispatch({ type: 'movedown' });
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleMovement);
    return () => {
      window.removeEventListener('mousemove', handleMovement);
    };
  }, [dispatch]);

  return (
    <div
      style={{
        position: 'absolute',
        top: state.position[1],
        left: state.position[0],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: spriteLocation,
        width: '40px',
        height: '40px'
      }}
    />
  );
};

export default Player;
