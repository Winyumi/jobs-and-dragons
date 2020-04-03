import React, { createContext, useReducer, useContext } from 'react';
import { dungeon } from '../maps/dungeon';
import { guild } from '../maps/guild';

const PlayerContext = createContext();
const { Provider } = PlayerContext;

const SPRITE_SIZE = 40;
const MAX_WIDTH = 600;
const MAX_HEIGHT = 400;

const setCurrentMap = (currentMap) => {
  let map;
  switch (currentMap) {
    case 'dungeon':
      map = dungeon;
      return map;
    case 'guild':
      map = guild;
      return map;
    default:
      break;
  }
};

const observeBoundries = (newPosition) => {
  return (
    newPosition[0] >= 0 &&
    newPosition[0] <= MAX_WIDTH - SPRITE_SIZE &&
    newPosition[1] >= 0 &&
    newPosition[1] <= MAX_HEIGHT - SPRITE_SIZE
  );
};

const observeObstacles = (newPosition, currentMap) => {
  const map = setCurrentMap(currentMap);

  const x = newPosition[0] / SPRITE_SIZE;
  const y = newPosition[1] / SPRITE_SIZE;

  const nextTile = map[y][x];

  return nextTile <= 1;
};

const observeInteraction = (newPosition, currentMap) => {
  const map = setCurrentMap(currentMap);

  const x = newPosition[0] / SPRITE_SIZE;
  const y = newPosition[1] / SPRITE_SIZE;

  const nextTile = map[y][x];

  return nextTile === 2;
};

const observeOpening = (newPosition, currentMap) => {
  const map = setCurrentMap(currentMap);

  const x = newPosition[0] / SPRITE_SIZE;
  const y = newPosition[1] / SPRITE_SIZE;

  const nextTile = map[y][x];

  return nextTile === 6;
};

const dispatchMove = (oldPosition, newPosition, currentMap) => {
  if (
    observeBoundries(newPosition, currentMap) &&
    observeObstacles(newPosition, currentMap)
  ) {
    return newPosition;
  } else {
    return oldPosition;
  }
};

// const startDialogue = newPosition => {
//   if (observeInteraction(newPosition)) {
//     alert('dialogue!');
//   }
// };

const getSpriteLocation = (direction, walkIndex) => {
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

const getWalkIndex = (oldWalkIndex) => {
  return oldWalkIndex >= 7 ? 0 : oldWalkIndex + 1;
};

const playerReducer = (state, action) => {
  const oldPosition = state.position;
  switch (action.type) {
    case 'moveleft':
      return {
        ...state,
        direction: 'west',
        position: dispatchMove(
          oldPosition,
          [state.position[0] - SPRITE_SIZE, state.position[1]],
          state.currentMap
        ),
        spritePosition: getSpriteLocation('west', state.walkIndex),
        walkIndex: getWalkIndex(state.walkIndex),
        isInteracting: observeInteraction(
          [state.position[0] - SPRITE_SIZE, state.position[1]],
          state.currentMap
        ),
        isOpening: observeOpening(
          [state.position[0] - SPRITE_SIZE, state.position[1]],
          state.currentMap
        ),
      };
    case 'moveup':
      return {
        ...state,
        direction: 'north',
        position: dispatchMove(
          oldPosition,
          [state.position[0], state.position[1] - SPRITE_SIZE],
          state.currentMap
        ),
        spritePosition: getSpriteLocation('north', state.walkIndex),
        walkIndex: getWalkIndex(state.walkIndex),
        isInteracting: observeInteraction(
          [state.position[0], state.position[1] - SPRITE_SIZE],
          state.currentMap
        ),
        isOpening: observeOpening(
          [state.position[0], state.position[1] - SPRITE_SIZE],
          state.currentMap
        ),
      };
    case 'moveright':
      return {
        ...state,
        direction: 'east',
        position: dispatchMove(
          oldPosition,
          [state.position[0] + SPRITE_SIZE, state.position[1]],
          state.currentMap
        ),
        spritePosition: getSpriteLocation('east', state.walkIndex),
        walkIndex: getWalkIndex(state.walkIndex),
        isInteracting: observeInteraction(
          [state.position[0] + SPRITE_SIZE, state.position[1]],
          state.currentMap
        ),
        isOpening: observeOpening(
          [state.position[0] + SPRITE_SIZE, state.position[1]],
          state.currentMap
        ),
      };
    case 'movedown':
      return {
        ...state,
        direction: 'south',
        position: dispatchMove(
          oldPosition,
          [state.position[0], state.position[1] + SPRITE_SIZE],
          state.currentMap
        ),
        spritePosition: getSpriteLocation('south', state.walkIndex),
        walkIndex: getWalkIndex(state.walkIndex),
        isInteracting: observeInteraction(
          [state.position[0], state.position[1] + SPRITE_SIZE],
          state.currentMap
        ),
        isOpening: observeOpening(
          [state.position[0], state.position[1] + SPRITE_SIZE],
          state.currentMap
        ),
      };
    case 'toggleIsInteracting':
      return {
        ...state,
        isInteracting: action.payload,
      };
    case 'quest':
      return {
        ...state,
        currentMap: action.payload,
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
    isInteracting: false,
    currentMap: 'dungeon',
  },
  ...props
}) => {
  const [state, dispatch] = useReducer(playerReducer, {
    ...value,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const usePlayerContext = () => {
  return useContext(PlayerContext);
};

export { PlayerProvider, usePlayerContext };
