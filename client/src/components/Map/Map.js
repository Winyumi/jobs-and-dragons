import React from 'react';
import MapRow from './MapRow';

const Map = props => {
  return (
    <div
      style={{
        position: 'relative',
        top: 0,
        left: 0,
        width: '1200px',
        height: '800px'
      }}
    >
      {props.tiles.map((row, idx) => (
        <MapRow key={`row-${idx}`} tiles={row} />
      ))}
    </div>
  );
};

export default Map;
