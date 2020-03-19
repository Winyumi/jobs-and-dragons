import React, { useState, useEffect } from 'react';
import Player from './Player';
import Map from './Map/Map';
import dungeonBG from '../assets/J&D_DungeonFloor.png';
import { dungeon } from '../maps/dungeon';
import { guild } from '../maps/guild';

const World = props => {
  const [currentQuest, setCurrentQuest] = useState(dungeon);

  useEffect(() => {
    const updateCurrentQuest = () => {
      switch (props.path) {
        case '/game/quest/01':
          setCurrentQuest(dungeon);
          break;
        case '/game/quest/02':
          setCurrentQuest(guild);
          break;
        default:
          break;
      }
    };
    updateCurrentQuest();
  }, [props.path]);
  // let currentQuest;
  // switch (props.quest) {
  //   case 'quest-01':
  //     currentQuest = dungeon;
  //     break;
  //   case 'quest-02':
  //     currentQuest = guild;
  //     break;
  //   default:
  //     break;
  // }
  return (
    <div
      style={{
        color: 'red',
        textAlign: 'center'
      }}
    >
      <h4>The Lair of the Oracle</h4>
      <div
        style={{
          position: 'relative',
          width: '600px',
          height: '400px',
          backgroundImage: `url( ${dungeonBG} )`
        }}
      >
        <Map tiles={currentQuest} />
        <Player />
      </div>
    </div>
  );
};

export default World;
