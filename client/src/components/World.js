import React from 'react';
import Player from './Player';
import Map from './Map/Map';
import { dungeon } from '../maps/dungeon';

const World = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '800px',
        height: '400px',
        margin: '100px auto'
      }}
    >
      <Map tiles={dungeon} />
      <Player />
    </div>
  );
};

export default World;
