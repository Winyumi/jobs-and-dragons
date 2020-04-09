import React, { useState, useEffect } from 'react';
import { usePlayerContext } from '../../contexts/PlayerContext';
import wall from '../../assets/J&D_DungeonWall.png';
import wallTorch from '../../assets/J&D_DungeonWallTorch.png';
import chest from '../../assets/Chest.png';
import oracle from '../../assets/Oracle-R.png';
import guildwall from '../../assets/GuildWall.png';
import guardian from '../../assets/Guardian.png';
import barrel from '../../assets/barrel.png';
import grate from '../../assets/grate.png';
import crate from '../../assets/Crate.png';
import plant from '../../assets/Plant.png';
import bookcase from '../../assets/BookCase.png';
import bed from '../../assets/Bed.png';
import table from '../../assets/table.png';
import door from '../../assets/DungeonDoor.png';

const MapTile = (props) => {
  const [state, dispatch] = usePlayerContext();
  const [tileSprites, setTileStripes] = useState({});
  useEffect(() => {
    const updateCurrentQuest = () => {
      switch (state.currentMap) {
        case 'dungeon':
          setTileStripes({
            0: 'clear',
            1: grate,
            11: oracle,
            23: wallTorch,
            24: barrel,
            6: chest,
            16: wall,
            17: crate,
            18: plant,
            19: bookcase,
            20: bed,
            21: table,
            22: door,
          });
          break;
        case 'guild':
          setTileStripes({
            0: 'clear',
            1: 'clear',
            2: guardian,
            3: wall,
            4: guildwall,
            5: barrel,
            6: chest,
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
        return `url(${tileSprites['8']})`;
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
