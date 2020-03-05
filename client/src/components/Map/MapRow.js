import React from 'react';
import MapTile from './MapTile';

const MapRow = props => {
  return (
    <div className='row'>
      {props.tiles.map(tile => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
};

export default MapRow;
