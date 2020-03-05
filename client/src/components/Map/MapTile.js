import React from 'react';
import wall from '../../assets/wall.png';

const MapTile = props => {
  const tileSprites = {
    0: 'black',
    1: wall
  };
  const getTileSprite = type => {
    switch (type) {
      case 1:
        return `url(${tileSprites['1']})`;
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
      {props.tile}
    </div>
  );
};

export default MapTile;
