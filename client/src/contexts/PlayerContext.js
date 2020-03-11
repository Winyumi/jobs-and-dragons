import React, { createContext, useReducer, useContext } from 'react';
import { dungeon } from '../maps/dungeon';

const PlayerContext = createContext();
const { Provider } = PlayerContext;

const SPRITE_SIZE = 40;
const MAX_WIDTH = 800;
const MAX_HEIGHT = 400;

const observeBoundries = newPosition => {
  return (
    newPosition[0] >= 0 &&
    newPosition[0] <= MAX_WIDTH - SPRITE_SIZE &&
    newPosition[1] >= 0 &&
    newPosition[1] <= MAX_HEIGHT - SPRITE_SIZE
  );
};

const observeObstacles = newPosition => {
  const x = newPosition[0] / SPRITE_SIZE;
  const y = newPosition[1] / SPRITE_SIZE;

  const nextTile = dungeon[y][x];

  return nextTile === 0;
};

const dispatchMove = (oldPosition, newPosition) => {
  if (observeBoundries(newPosition) && observeObstacles(newPosition)) {
    return newPosition;
  } else {
    return oldPosition;
  }
};

const playerReducer = (state, action) => {
  const oldPosition = state.position;
  switch (action.type) {
    case 'moveleft':
      return {
        // direction: "west",
        position: dispatchMove(oldPosition, [
          state.position[0] - SPRITE_SIZE,
          state.position[1]
        ])
      };
    case 'moveup':
      return {
        // direction: "north",
        position: dispatchMove(oldPosition, [
          state.position[0],
          state.position[1] - SPRITE_SIZE
        ])
      };
    case 'moveright':
      return {
        // direction: "east",
        position: dispatchMove(oldPosition, [
          state.position[0] + SPRITE_SIZE,
          state.position[1]
        ])
      };
    case 'movedown':
      return {
        // direction: "south",
        position: dispatchMove(oldPosition, [
          state.position[0],
          state.position[1] + SPRITE_SIZE
        ])
      };
    default:
      return state;
  }
};

// const getSpriteLocation = (direction) => {
//   console.log(direction)
//   switch (direction) {
//     case 'south':
//       return '0px 0px'
//     case 'north':
//       return '0px 40px'
//     case 'west':
//       return '0px 80px'
//     case 'east':
//       return '0px 120px'
//     default:
//       return '0px 0px'
//   }
// };

//replaced "value" with "playerReducer(direction)""
const PlayerProvider = (direction, { value = [0, 40], ...props }) => {
  const [state, dispatch] = useReducer(playerReducer, { position: playerReducer(direction) });

  return <Provider value={[state, dispatch]} {...props} />;
};

const usePlayerContext = () => {
  return useContext(PlayerContext);
};

export { PlayerProvider, usePlayerContext };
