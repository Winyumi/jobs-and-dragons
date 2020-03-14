import React from 'react';
// import wall from '../../assets/wall.png';
import border from '../../assets/border.png';
import oracle from '../../assets/Oracle.png';

const MapTile = props => {
  const tileSprites = {
    0: 'clear',
    1: 'clear',
    2: border,
    3: oracle
  };
  const getTileSprite = type => {
    switch (type) {
    case 1:
      return `interact`;
    case 2:
      return `url(${tileSprites['2']})`;
    case 3:
      return `url(${tileSprites['3']})`;
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
