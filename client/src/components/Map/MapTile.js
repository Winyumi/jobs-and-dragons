import React, { useState, useEffect } from 'react';
import { usePlayerContext } from '../../contexts/PlayerContext';
//Character sprites and modal interactions
import oracle from '../../assets/Oracle.gif';
import guardian from '../../assets/Guardian.gif';
import bard from '../../assets/Bard-R.png';
import acolyte from '../../assets/Acolyte.gif';
import bartender from '../../assets/GuildBartender.gif';
import guildguard from '../../assets/GuildGuardian.gif';
import chest from '../../assets/Chest.gif';
//bubbles
import exclaim from '../../assets/E_bubble.gif';
import talk from '../../assets/Talk_bubble.gif';
import snore from '../../assets/Snore_bubble.gif';
//Normal tiles
import wall from '../../assets/J&D_DungeonWall.png';
import wallTorch from '../../assets/WallTorchFlicker.gif';
import guildwall from '../../assets/GuildWall.png';
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
import sleeper from '../../assets/BedSleeper.gif';



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
             3: talk,
            70: oracle,
            71: acolyte,
            72: acolyte,
            73: acolyte,
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
            3: talk,
            5: cagedoor,
            4: snore,
            6: chest,
            70: guardian,
            71: bartender,
            72: guildguard,
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
            31: cage,
            33: sleeper,
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
            70: bard,
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
      case 41:
        return `url(${tileSprites['41']})`;
      case 42:
        return `url(${tileSprites['42']})`;
      case 43:
        return `url(${tileSprites['43']})`;
      case 44:
        return `url(${tileSprites['44']})`;
      case 45:
        return `url(${tileSprites['45']})`;
      case 46:
        return `url(${tileSprites['46']})`;
      case 47:
        return `url(${tileSprites['47']})`;
      case 48:
        return `url(${tileSprites['48']})`;
      case 49:
        return `url(${tileSprites['49']})`;
      case 50:
        return `url(${tileSprites['40']})`;
      case 51:
        return `url(${tileSprites['51']})`;
      case 52:
        return `url(${tileSprites['52']})`;
      case 53:
        return `url(${tileSprites['53']})`;
      case 54:
        return `url(${tileSprites['54']})`;
      case 55:
        return `url(${tileSprites['55']})`;
      case 56:
        return `url(${tileSprites['56']})`;
      case 57:
        return `url(${tileSprites['57']})`;
      case 58:
        return `url(${tileSprites['58']})`;
      case 59:
        return `url(${tileSprites['59']})`;
      case 60:
        return `url(${tileSprites['60']})`;
      case 61:
        return `url(${tileSprites['61']})`;
      case 62:
        return `url(${tileSprites['62']})`;
      case 63:
        return `url(${tileSprites['63']})`;
      case 64:
        return `url(${tileSprites['64']})`;
      case 65:
        return `url(${tileSprites['65']})`;
      case 66:
        return `url(${tileSprites['66']})`;
      case 67:
        return `url(${tileSprites['67']})`;
      case 68:
        return `url(${tileSprites['68']})`;
      case 69:
        return `url(${tileSprites['69']})`;
      case 70:
        return `url(${tileSprites['70']})`;
      case 71:
        return `url(${tileSprites['71']})`;
      case 72:
        return `url(${tileSprites['72']})`;
      case 73:
        return `url(${tileSprites['73']})`;
      case 74:
        return `url(${tileSprites['74']})`;
      case 75:
        return `url(${tileSprites['75']})`;
      case 76:
        return `url(${tileSprites['76']})`;
      case 77:
        return `url(${tileSprites['77']})`;
      case 78:
        return `url(${tileSprites['78']})`;
      case 79:
        return `url(${tileSprites['79']})`;
      case 80:
        return `url(${tileSprites['80']})`;
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
