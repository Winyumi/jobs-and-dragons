import React from 'react';
import wall from '../../assets/J&D_DungeonWall.png';
import guildwall from '../../assets/GuildWall.png';
import chest from '../../assets/Chest.png';
import guardian from '../../assets/Guardian.png';

const MapTile = props => {
  const tileSprites = {
    0: 'clear',
    1: chest,
    2: guardian,
    3: wall,
    4: guildwall
  };
  const getTileSprite = type => {
    switch (type) {
      case 1:
        return `url(${tileSprites['1']})`;
      case 2:
        return `url(${tileSprites['2']})`;
      case 3:
        return `url(${tileSprites['3']})`;
      case 4:
        return `url(${tileSprites['4']})`;
      default:
        return tileSprites[type];
    }
  };
  return (
    <div
      className='tile'
      style={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        background: getTileSprite(props.tile)
      }}
    >
      {/* {props.tile} */}<p></p>
    </div>
  );
};

export default MapTile;
