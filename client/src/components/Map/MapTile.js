import React from 'react';
// import wall from '../../assets/wall.png';
import border from '../../assets/border.png';
import oracle from '../../assets/Oracle.png';

const MapTile = props => {
  const tileSprites = {
    0: 'clear',
    1: border,
    2: oracle
  };
  const getTileSprite = type => {
    switch (type) {
    case 1:
      return `url(${tileSprites['1']})`;
    case 2:
      return `url(${tileSprites['2']})`;
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
