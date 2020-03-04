import React from 'react';
import MapRow from './MapRow';

const Map = props => {
  return (
    <div
      style={{
        position: 'relative',
        top: 0,
        left: 0,
        width: '800px',
        height: '400px'
      }}
    >
      {props.tiles.map(row => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
};

export default Map;
