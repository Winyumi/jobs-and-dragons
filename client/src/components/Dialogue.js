import React from 'react';

const Dialogue = props => {
  return (
    <div
      style={{
        color: 'white',
        backgroundColor: 'black',
        position: 'absolute',
        top: '33%',
        left: '33%',
        width: '600px',
        height: '300px',
        padding: '20px'
      }}
    >
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
      <a href='#!'>Agree</a>
    </div>
  );
};

export default Dialogue;
