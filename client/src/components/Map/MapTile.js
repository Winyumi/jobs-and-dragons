import React, { useState, useEffect } from 'react';
import { usePlayerContext } from '../../contexts/PlayerContext';
import wall from '../../assets/J&D_DungeonWall.png';
import wallTorch from '../../assets/J&D_DungeonWallTorch.png';
import chest from '../../assets/Chest.png';
import oracle from '../../assets/Oracle.png';
import guildwall from '../../assets/GuildWall.png';
import guardian from '../../assets/Guardian.png';
import barrel from '../../assets/barrel.png';
import grate from '../../assets/grate.png';

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
            2: oracle,
            3: wall,
            4: wallTorch,
            5: barrel,
            6: chest,
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
