import React from 'react';
import MapRow from './MapRow2';

const Map = props => {
  return (
    <div
      style={{
        position: 'relative',
        top: 0,
        left: 0,
        width: '600px',
        height: '400px'
      }}
    >
      {props.tiles.map((row, idx) => (
        <MapRow key={`row-${idx}`} tiles={row} />
      ))}
    </div>
  );
};

export default Map;
