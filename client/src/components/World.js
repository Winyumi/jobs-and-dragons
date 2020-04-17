import React, { useState, useEffect } from 'react';
import { usePlayerContext } from '../contexts/PlayerContext';
import Player from './Player';
import Map from './Map/Map';
import dungeonBG from '../assets/J&D_DungeonFloor.png';
import quildBG from '../assets/GuildFloor2.png';
import playBG from '../assets/playhouseBG.png';
import { dungeon } from '../maps/dungeon';
import { guild } from '../maps/guild';
import { playhouse } from '../maps/playhouse';

const World = (props) => {
  const [state, dispatch] = usePlayerContext();
  const [currentQuest, setCurrentQuest] = useState(dungeon);
  const [mapBackground, setMapBackground] = useState();
  const [mapTitle, setMapTitle] = useState();

  useEffect(() => {
    const updateCurrentQuest = () => {
      switch (props.path) {
        case '/game/quest/01':
          setMapTitle('Lair of the Oracle');
          setMapBackground(dungeonBG);
          setCurrentQuest(dungeon);
          dispatch({ type: 'quest', payload: 'dungeon' });
          break;
        case '/game/quest/02':
          setMapTitle('Namuh Secruoser Guildhouse');
          setMapBackground(quildBG);
          setCurrentQuest(guild);
          dispatch({ type: 'quest', payload: 'guild' });
          break;
          case '/game/quest/03':
          setMapTitle('Javan Playhouse');
          setMapBackground(playBG);
          setCurrentQuest(playhouse);
          dispatch({ type: 'quest', payload: 'playhouse' });
          break;
        default:
          break;
      }
    };
    updateCurrentQuest();
  }, [props.path, dispatch, currentQuest, mapTitle]);
  console.log(currentQuest);
  return (
    <div
      style={{
        color: 'red',
        textAlign: 'center',
      }}
    >
      <h4>{mapTitle}</h4>
      <div
        style={{
          position: 'relative',
          width: '1200px',
          height: '800px',
          backgroundImage: `url(${mapBackground})`,
        }}
      >
        <Map tiles={currentQuest} />
        <Player />
      </div>
    </div>
  );
};

export default World;
