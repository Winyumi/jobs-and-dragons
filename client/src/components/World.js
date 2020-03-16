import React from 'react';
import Player from './Player';
import Map from './Map/Map';
import dungeonBG from '../assets/dungeonBG.png';
import { dungeon } from '../maps/dungeon';
import Index from '../components/UserInfo/index';

const World = (props) => {
  if (props.path === "/game/") {
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
  
    } else if (props.path === "/game/q_one") {
      return (
      <div>
       <Index />
      </div>
      )
    }
    else {
      return (
      <div>
        <p>No content to show</p>
      </div>
      )
    }
};

export default World;
