import React from 'react';
import Player from './Player';
import Map from './Map/Map';
import dungeonBG from '../assets/J&D_DungeonFloor.png';
import { dungeon } from '../maps/dungeon';
// import Index from '../components/UserInfo/index';

const World = (props) => {
  console.log(props)
  return (
    <div
    style={{
      color: "red",
      textAlign: 'center'
    }}
    >
      <h4>The Lair of the Oracle</h4>
      <div
        style={{
          position: 'relative',
          width: '600px',
          height: '400px',
          backgroundImage: `url( ${dungeonBG} )`
        }}
      >



        <Map tiles={dungeon} />
        <Player />
      </div>
    </div>
  );
};

export default World;
