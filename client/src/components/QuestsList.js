import React from 'react';
import Quest from './Quest';
import questOneImage from '../assets/sword-in-stone.png';
import questTwoImage from '../assets/dragon-slayer.png';

const questList = [
  {
    id: 1,
    name: 'Profile',
    image: questOneImage,
    link: 'userinfo'
  },
  {
    id: 2,
    name: 'Resume',
    image: questTwoImage,
    link: 'resume'
  }
];

const Quests = () => {
  return (
    <div
      className='modal-content'
      style={{
        color: 'white',
        backgroundColor: 'black',
        position: 'absolute',
        top: '20%',
        left: '33%',
        width: '700px',
        height: '500px',
        padding: '20px'
      }}
    >
      <h4>Select Your Quest</h4>
      <div
        className='quests-list'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {questList.map(quest => (
          <Quest key={`quest-${quest.id}`} quest={quest} />
        ))}
      </div>
    </div>
  );
};

export default Quests;
