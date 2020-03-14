import React, { createContext, useReducer, useContext } from 'react';
import { dungeon } from '../maps/dungeon';

const PlayerContext = createContext();
const { Provider } = PlayerContext;

const SPRITE_SIZE = 40;
const MAX_WIDTH = 600;
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

const observeInteraction = newPosition => {
  const x = newPosition[0] / SPRITE_SIZE;
  const y = newPosition[1] / SPRITE_SIZE;

  const nextTile = dungeon[y][x];

  return nextTile === 2 ;
};

const dispatchMove = (oldPosition, newPosition) => {
  if (observeBoundries(newPosition) && observeObstacles(newPosition)) {
    return newPosition;
  } else {
    return oldPosition;
  }
};

const startDialogue = newPosition => {
  if (observeInteraction(newPosition)) {
    alert("dialogue!")
  }
}

const getSpriteLocation = (direction, walkIndex) => {
  console.log(direction);
  switch (direction) {
    case 'east':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
    case 'south':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
    case 'north':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;
    case 'west':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
    default:
      return '0px 0px';
  }
};

const getWalkIndex = oldWalkIndex => {
  return oldWalkIndex >= 7 ? 0 : oldWalkIndex + 1;
};

const playerReducer = (state, action) => {
  const oldPosition = state.position;
  switch (action.type) {
    case 'moveleft':
      return {
        direction: 'west',
        position: dispatchMove(oldPosition, [
          state.position[0] - SPRITE_SIZE,
          state.position[1]
        ]),
        spritePosition: getSpriteLocation('west', state.walkIndex),
        walkIndex: getWalkIndex(state.walkIndex),
        interact: startDialogue([
          state.position[0] - SPRITE_SIZE,
          state.position[1]
        ])
      };
    case 'moveup':
      return {
        direction: 'north',
        position: dispatchMove(oldPosition, [
          state.position[0],
          state.position[1] - SPRITE_SIZE
        ]),
        spritePosition: getSpriteLocation('north', state.walkIndex),
        walkIndex: getWalkIndex(state.walkIndex),
        interact: startDialogue([
          state.position[0],
          state.position[1] - SPRITE_SIZE
        ])
      };
    case 'moveright':
      return {
        direction: 'east',
        position: dispatchMove(oldPosition, [
          state.position[0] + SPRITE_SIZE,
          state.position[1]
        ]),
        spritePosition: getSpriteLocation('east', state.walkIndex),
        walkIndex: getWalkIndex(state.walkIndex),
        interact: startDialogue([
          state.position[0] + SPRITE_SIZE,
          state.position[1]
        ])
      };
    case 'movedown':
      return {
        direction: 'south',
        position: dispatchMove(oldPosition, [
          state.position[0],
          state.position[1] + SPRITE_SIZE
        ]),
        spritePosition: getSpriteLocation('south', state.walkIndex),
        walkIndex: getWalkIndex(state.walkIndex),
        interact: startDialogue([
          state.position[0],
          state.position[1] + SPRITE_SIZE
        ])
      };
    default:
      return state;
  }
};

const PlayerProvider = ({
  value = {
    position: [40, 40],
    spritePosition: '0px 0px',
    direction: 'east',
    walkIndex: 0,
    interact: false
  },
  ...props
}) => {
  const [state, dispatch] = useReducer(playerReducer, {
    ...value
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const usePlayerContext = () => {
  return useContext(PlayerContext);
};

export { PlayerProvider, usePlayerContext };
