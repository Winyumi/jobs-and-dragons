import React, { useState, useEffect } from 'react';
import { useUserContext } from '../contexts/UserContext';
import Player from './Player';
import Map from './Map/Map';
import dungeonBG from '../assets/J&D_DungeonFloor.png';
import quildBG from '../assets/GuildFloor.png';
import { dungeon } from '../maps/dungeon';
import { guild } from '../maps/guild';

const World = props => {
  const [state, dispatch] = useUserContext();
  const [currentQuest, setCurrentQuest] = useState(dungeon);
  const [mapBackground, setMapBackground] = useState();

  useEffect(() => {
    const updateCurrentQuest = () => {
      switch (props.path) {
        case '/game/quest/01':
          setMapBackground(dungeonBG);
          setCurrentQuest(dungeon);
          dispatch({ type: 'quest', payload: 'quest-01' });
          break;
        case '/game/quest/02':
          setMapBackground(quildBG);
          setCurrentQuest(guild);
          dispatch({ type: 'quest', payload: 'quest-02' });
          break;
        default:
          break;
      }
    };
    updateCurrentQuest();
  }, [props.path, dispatch, currentQuest]);

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
          backgroundImage: `url(${mapBackground})`
        }}
      >
        <Map tiles={currentQuest} />
        <Player />
      </div>
    </div>
  );
};

export default World;
