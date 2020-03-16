import React from 'react';
import Player from './Player';
import Map from './Map/Map';
import dungeonBG from '../assets/dungeonBG.png';
import { dungeon } from '../maps/dungeon';

const World = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '600px',
        height: '400px',
        backgroundImage: `url( ${dungeonBG } )`
      }}
    >
      <Map tiles={dungeon} />
      <Player />
    </div>
  );
};

export default World;
