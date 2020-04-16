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
import redwall from '../../assets/RedBrick.png';
import cagedoor from '../../assets/BarsDoor.png';
import cage from '../../assets/Bars.png';
import crate2 from '../../assets/Crate2.png';
import bartop from '../../assets/BarTop.png';
import bartopdrink from '../../assets/BarTopDrink.png';
import drinkbarrel from '../../assets/DrinkBarrel.png';
import guilddoor from '../../assets/GuildDoor.png';
import guildwallbanner from '../../assets/GuildWallBan.png';
import rack from '../../assets/Rack.png';
import tableext from '../../assets/tableExt.png';
import barrel2 from '../../assets/barrel2.png';
import bard from '../../assets/Bard-R.png';
import playstairs from '../../assets/Stairs.png';
import playwall1 from '../../assets/PlayWall.png';
import playwall2 from '../../assets/PlayWall2.png';
import playdoor from '../../assets/PlayDoor.png';
import playcurtains from '../../assets/Curtains.png';
import curtainspart from '../../assets/CurtainsPart.png';
import woodfloor from '../../assets/WoodFloor.png';
import woodslats from '../../assets/WoodSlats.png';
import bench from '../../assets/Bench.png';
import desk from '../../assets/Desk.png';
import costumerack from '../../assets/costumeRack.png';

import exclaim from '../../assets/E_bubble.gif';

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
            2: exclaim,
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
            1: grate,
            2: exclaim,
            6: chest,
            11: guardian,
            16: redwall,
            17: guildwall,
            18: guildwallbanner,
            19: plant,
            20: bed,
            21: table,
            22: tableext,
            23: rack,
            24: barrel,
            25: bartop,
            26: bartopdrink,
            27: guilddoor,
            28: drinkbarrel,
            29: crate2,
            30: barrel2,
          });
          break;
        case 'playhouse':
          setTileStripes({
            0: 'clear',
            1: cagedoor,
            2: woodfloor,
            3: playstairs,
            4: curtainspart,
            5: exclaim,
            6: chest,
            11: bard,
            16: woodslats,
            17: playwall1,
            18: playwall2,
            19: plant,
            20: bed,
            21: table,
            22: tableext,
            23: playcurtains,
            24: barrel,
            25: woodfloor,
            26: bench,
            27: playdoor,
            28: cage,
            29: crate2,
            30: barrel2,
            31: desk,
            32: bookcase,
            33: costumerack,
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
      case 26:
        return `url(${tileSprites['26']})`;
      case 27:
        return `url(${tileSprites['27']})`;
      case 28:
        return `url(${tileSprites['28']})`;
      case 29:
        return `url(${tileSprites['29']})`;
      case 30:
        return `url(${tileSprites['30']})`;
      case 31:
        return `url(${tileSprites['31']})`;
      case 32:
        return `url(${tileSprites['32']})`;
      case 33:
        return `url(${tileSprites['33']})`;
      case 34:
        return `url(${tileSprites['34']})`;
      case 35:
        return `url(${tileSprites['35']})`;
      case 36:
        return `url(${tileSprites['36']})`;
      case 37:
        return `url(${tileSprites['37']})`;
      case 38:
        return `url(${tileSprites['38']})`;
      case 39:
        return `url(${tileSprites['39']})`;
      case 40:
        return `url(${tileSprites['40']})`;

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
