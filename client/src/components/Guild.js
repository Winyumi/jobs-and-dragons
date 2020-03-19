import React from 'react';
import Player from './Player';
import Map from './Map/Map2';
import guildBG from '../assets/GuildFloor.png';
import { guild } from '../maps/guild';
// import Index from '../components/UserInfo/index';

const Guild = (props) => {
  console.log(props)
  return (
    <div
    style={{
      color: "red",
      textAlign: 'center'
    }}
    >
      <h4>The Guild House of Namuh Secruoser</h4>
      <div
        style={{
          position: 'relative',
          width: '600px',
          height: '400px',
          backgroundImage: `url( ${guildBG} )`
        }}
      >
        <Map tiles={guild} />
        <Player />
      </div>
    </div>
  );
};

export default Guild;