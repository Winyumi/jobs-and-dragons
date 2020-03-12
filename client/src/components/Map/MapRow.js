import React from 'react';
import MapTile from './MapTile';

//className needs to change to not conflict with css/materialize
const MapRow = props => {
  return (
    <div className='row-tile'>
      {props.tiles.map(tile => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
};

export default MapRow;
