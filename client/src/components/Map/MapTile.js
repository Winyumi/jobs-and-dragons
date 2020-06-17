import React, { useState, useEffect } from 'react';
import { usePlayerContext } from '../../contexts/PlayerContext';
//Character sprites and modal interactions
import oracle from '../../assets/Oracle.gif';
import guardian from '../../assets/Guardian.gif';
import bard from '../../assets/Bard.gif';
import acolyte from '../../assets/Acolyte.gif';
import bartender from '../../assets/GuildBartender.gif';
import guildguard from '../../assets/GuildGuardian.gif';
import singer from '../../assets/Singer.gif';
import actress from '../../assets/JavanActress.gif';
import manager from '../../assets/PlayHouseMgr.gif';
import headmaster from '../../assets/headmaster.png';
import captain from '../../assets/captain.png';
//Interactive objects
import chest from '../../assets/Chest.gif';
import orb from '../../assets/Orb.gif';
//bubbles
import exclaim from '../../assets/E_bubble.gif';
import talk from '../../assets/Talk_bubble.gif';
import snore from '../../assets/Snore_bubble.gif';
import notes from '../../assets/Notes_bubble.gif';
import stagetalk from '../../assets/StageTalk_bubble.gif';
//Normal tiles
// import bed from '../../assets/Bed.png';
import woodfloor from '../../assets/WoodFloor.png';
// import bench from '../../assets/Bench.png';
import sleeper from '../../assets/BedSleeper.gif';
import academywall from '../../assets/academyWall.png';
import pillar from '../../assets/pillar.png';
import pillar2 from '../../assets/pillar2.png';
import water from '../../assets/water.png';
import pier from '../../assets/pier.png';
// World map tiles
import base from '../../assets/WorldMapTiles/mapbase.png';
import baseNE from '../../assets/WorldMapTiles/mapNE.png';
import baseNW from '../../assets/WorldMapTiles/mapNW.png';
import baseSE from '../../assets/WorldMapTiles/mapSE.png';
import baseSW from '../../assets/WorldMapTiles/mapSW.png';
import mapacademy from '../../assets/WorldMapTiles/academy.png';
import mapcity from '../../assets/WorldMapTiles/City.png';
import fvillage from '../../assets/WorldMapTiles/fishvillage.png';
import marble from '../../assets/marble.png';

const MapTile = (props) => {
  const [state, dispatch] = usePlayerContext();
  const [tileSprites, setTileSprites] = useState({});

  useEffect(() => {
    const updateCurrentQuest = () => {
      switch (state.currentMap) {
        case 'worldmap':
          setTileSprites({
            0: 'clear',
            1: base,
            2: baseNE,
            3: baseNW,
            4: baseSW,
            5: baseSE,
            9: 'clear',
            12: mapacademy,
            13: mapcity,
            14: fvillage,
          });
          break;
        case 'town':
          setTileSprites({
            0: 'clear',
            11: 'clear',
            12: 'clear',
            13: 'clear',
            14: 'clear',
          });
          break;
        case 'dungeon':
          setTileSprites({
            0: 'clear',
            2: exclaim,
            3: talk,
            11: 'clear',
            12: oracle,
            13: acolyte,
            14: acolyte,
            15: acolyte,
            16: chest,
            17: 'clear',
          });
          break;
        case 'guild':
          setTileSprites({
            0: 'clear',
            2: exclaim,
            3: talk,
            4: snore,
            11: 'clear',
            12: sleeper,
            13: guardian,
            14: bartender,
            15: guildguard,
            16: chest,
            17: 'clear',
          });
          break;
        case 'playhouse':
          setTileSprites({
            0: 'clear',
            5: exclaim,
            6: notes,
            7: stagetalk,
            8: talk,
            11: 'clear',
            12: bard,
            17: singer,
            14: actress,
            15: manager,
            16: chest,
            18: 'clear',
          });
          break;
        case 'academy':
          setTileSprites({
            0: marble,
            1: exclaim,
            2: talk,
            12: pillar,
            13: pillar2,
            // 14: bed,
            // 15: bench,
            16: academywall,
            17: headmaster,
            18: chest,
            19: orb,
          });
          break;
        case 'fishvillage':
          setTileSprites({
            1: 'clear',
            2: exclaim,
            3: talk,
            4: woodfloor,
            11: 'clear',
            12: chest,
            13: pier,
            14: water,
            15: captain,
            16: chest,
            17: orb,
          });
          break;
        default:
          break;
      }
    };
    updateCurrentQuest();
  }, [state.currentMap]);

  const getTileSprite = (type) => {
    switch (type) {
      case 0:
        return `url(${tileSprites['0']})`;
      case 1:
        return `url(${tileSprites['1']})`;
      case 2:
        return `url(${tileSprites['2']})`;
      case 3:
        return `url(${tileSprites['3']})`;
      case 4:
        return `url(${tileSprites['4']})`;
      case 5:
        return `url(${tileSprites['5']})`;
      case 6:
        return `url(${tileSprites['6']})`;
      case 7:
        return `url(${tileSprites['7']})`;
      case 8:
        return `url(${tileSprites['8']})`;
      case 9:
        return `url(${tileSprites['9']})`;
      case 10:
        return `url(${tileSprites['10']})`;
      case 11:
        return `url(${tileSprites['11']})`;
      case 12:
        return `url(${tileSprites['12']})`;
      case 13:
        return `url(${tileSprites['14']})`;
      case 14:
        return `url(${tileSprites['14']})`;
      case 15:
        return `url(${tileSprites['15']})`;
      case 16:
        return `url(${tileSprites['16']})`;
      case 17:
        return `url(${tileSprites['17']})`;
      case 18:
        return `url(${tileSprites['18']})`;
      case 19:
        return `url(${tileSprites['19']})`;
      case 20:
        return `url(${tileSprites['20']})`;
      case 21:
        return `url(${tileSprites['21']})`;
      case 22:
        return `url(${tileSprites['22']})`;
      case 23:
        return `url(${tileSprites['23']})`;
      case 24:
        return `url(${tileSprites['24']})`;
      case 25:
        return `url(${tileSprites['25']})`;
      default:
        return tileSprites[type];
    }
  };
  return (
    <div
      className='tile'
      style={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        background: getTileSprite(props.tile),
      }}
    >
      <p></p>
    </div>
  );
};

export default MapTile;
