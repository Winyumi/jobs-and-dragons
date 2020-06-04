import React, { useState, useEffect } from 'react';
import { usePlayerContext } from '../contexts/PlayerContext';
import Player from './Player';
import Map from './Map/Map';
import townBG from '../assets/GninnigebCity.png';
import dungeonBG from '../assets/AltLair.png';
import quildBG from '../assets/AltGuild.png';
import playBG from '../assets/AltPlay.png';
import academyBG from '../assets/marble.png';
import villageBG from '../assets/dirt.png';
import mapBG from '../assets/water.png';
import { town } from '../maps/town';
import { academy } from '../maps/academy';
import { dungeon } from '../maps/dungeon';
import { guild } from '../maps/guild';
import { playhouse } from '../maps/playhouse';
import { fishvillage } from '../maps/fishvillage';
import { worldmap } from '../maps/map';

const World = (props) => {
  const [state, dispatch] = usePlayerContext();
  // const [currentMap, setCurrentMap] = useState();
  const [currentQuest, setCurrentQuest] = useState(dungeon);
  const [mapBackground, setMapBackground] = useState();
  const [mapTitle, setMapTitle] = useState();

  useEffect(() => {
    const updateCurrentQuest = () => {
      switch (props.path) {
        case '/profile':
          setMapTitle('Gninnigeb City');
          setMapBackground(townBG);
          setCurrentQuest(town);
          dispatch({ type: 'town', payload: 'town' });
          break;
        case '/game/map':
          setMapTitle('Upper Clientia Map');
          setMapBackground(mapBG);
          setCurrentQuest(worldmap);
          dispatch({ type: 'map', payload: 'worldmap' });
          break;
        case '/game/quest/00':
          setMapTitle('The Academy');
          // setCurrentMap('academy');
          setMapBackground(academyBG);
          setCurrentQuest(academy);
          dispatch({ type: 'quest', payload: 'academy' });
          break;
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
        case '/game/quest/04':
          setMapTitle('Fishing Village');
          setMapBackground(villageBG);
          setCurrentQuest(fishvillage);
          dispatch({ type: 'quest', payload: 'fishvillage' });
          break;
        default:
          break;
      }
    };
    updateCurrentQuest();
  }, [props.path, dispatch, currentQuest, mapTitle]);

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
