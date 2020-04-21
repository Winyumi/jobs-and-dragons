import React from 'react';
import OracleBox from '../assets/OracleBox.png';
import GuardianBox from '../assets/GuardianBox.png';
import BardBox from '../assets/BardBox.png';
import AcolyteBox from '../assets/AcolyteBox.png';
import BartenderBox from '../assets/bartenderBox.png';
import GuildGuardBox from '../assets/GuildGuardBox.png';
import SingerBox from '../assets/SingerBox.png';
import ActressBox from '../assets/ActressBox.png';
import ManagerBox from '../assets/PlayHouseMgrBox.png';

import { usePlayerContext } from '../contexts/PlayerContext';
import { useUserContext } from '../contexts/UserContext';
// import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

// Dialogue box content needs to be replaced with dynamic content determined by props
const Dialogue = (props) => {
  const [gameState] = usePlayerContext();
  const [state] = useUserContext();
  const imgStyle = {
    float: 'right',
    width: '100px',
  };
  const modalStyle = {
    color: 'white',
    backgroundColor: 'black',
    position: 'absolute',
    top: '33%',
    left: '33%',
    width: '700px',
    height: '300px',
    padding: '20px',
  };
  //Oracle's lair dialogue boxes****** 
  if (gameState.currentMap === 'dungeon' && gameState.interactTile === 70) {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <img style={imgStyle} src={OracleBox} alt='Profile of the Oracle' />
            <h4>The Oracle of Secivres Reerac</h4>
          </div>
          <div className='row'>
            <p>
              Welcome {state.user.name} to the beginning of your journey! I am
              the Oracle of Secrives Reerac and I am here to guide you on your
              quest. Are you ready to begin?
            </p>
            <ul>
              <li>
                {gameState.currentMap === 'dungeon' ? (
                  <Link
                    to='/userinfo'
                    onClick={(e) => {
                      // e.preventDefault();
                      props.handleAccept();
                    }}
                  >
                    Yes!
                  </Link>
                // ) : gameState.currentMap === 'guild' ? (
                //   <Link to='/joblisting'>Yes!</Link>
                ) : null}
              </li>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  Um...not yet...
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (gameState.currentMap === 'dungeon' && gameState.interactTile === 71) {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <img
              style={imgStyle}
              src={AcolyteBox}
              alt='Profile of an acolyte'
            />
            <h4>An Acolyte of Secivres Reerac</h4>
          </div>
          <div className='row'>
            <p>
              Is this your first time seeing the Oracle? I've been an acolyte here for 4 years and I've never seen him so disturbed...
              It's worrying us all. Hopefully whatever is happening will be resolved soon...
            </p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  Interesting...
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (gameState.currentMap === 'dungeon' && gameState.interactTile === 72) {
      return (
        <div className='modal-content' style={modalStyle}>
          <div style={{}}>
            <div className='row'>
              <img
                style={imgStyle}
                src={AcolyteBox}
                alt='Profile of an acolyte'
              />
              <h4>An Acolyte of Secivres Reerac</h4>
            </div>
            <div className='row'>
              <p>
                Is this your first time to the Oracle's Lair? Gninigeb City is also home to the Javan Playhouse and an Namuh Secruoser Guild outpost.
                We acolyte's often visit them when our master gives us time off.
              </p>
              <ul>
                <li>
                  <a
                    className='modal-close'
                    href='#!'
                    onClick={(e) => {
                      e.preventDefault();
                      props.handleDecline();
                    }}
                  >
                    Nope, but I'll be sure to check them out when I get a chance!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
  } else if (gameState.currentMap === 'dungeon' && gameState.interactTile === 73) {
      return (
        <div className='modal-content' style={modalStyle}>
          <div style={{}}>
            <div className='row'>
              <img
                style={imgStyle}
                src={AcolyteBox}
                alt='Profile of an acolyte'
              />
              <h4>An Acolyte of Secivres Reerac</h4>
            </div>
            <div className='row'>
              <p>
                Ever since the The Gates of Tenretni have closed that chest has been banging around like crazy! I've been afraid to come in here for months!
              </p>
              <ul>
                <li>
                  <a
                    className='modal-close'
                    href='#!'
                    onClick={(e) => {
                      e.preventDefault();
                      props.handleDecline();
                    }}
                  >
                    You're right, that is strange.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
  //Guild dialogue boxes****** 
  } else if (gameState.currentMap === 'guild' && gameState.interactTile === 70) {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <img
              style={imgStyle}
              src={GuardianBox}
              alt='Profile of the Guardian'
            />
            <h4>The Guardian of Namuh Secruoser</h4>
          </div>
          <div className='row'>
            <p>
              Well, you look like you're looking for some action...but are you
              ready? Guess there's only one way to find out! Are you up to
              hunting some of the finest game in the kingdom?
            </p>
            <ul>
              <li>
            <Link
                    to='/joblisting'
                    onClick={(e) => {
                      // e.preventDefault();
                      props.handleAccept();
                    }}
                  >
                    Yes!
                  </Link>
              </li>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  I think I need to work on my skills first.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (gameState.currentMap === 'guild' && gameState.interactTile === 71) {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <img
              style={imgStyle}
              src={BartenderBox}
              alt='Profile of the guild bartender'
            />
            <h4>Guild Bartender</h4>
          </div>
          <div className='row'>
            <p>
              Hey!!! You can't be behind here! If you're looking for the Guardian of this Guild, she's in her private dining room.
              Now get out of here!
            </p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  Yikes! Sorry! 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (gameState.currentMap === 'guild' && gameState.interactTile === 72) {
      return (
        <div className='modal-content' style={modalStyle}>
          <div style={{}}>
            <div className='row'>
              <img
                style={imgStyle}
                src={GuildGuardBox}
                alt='Profile of the guild armory guard'
              />
              <h4>Guild Armory Guard</h4>
            </div>
            <div className='row'>
              <p>
                So, you're looking to go on a Boj hunt? Well, I can't just GIVE weapons to anybody who walks in here. You'll have to get permission from our leader, the Guardian, first.
              </p>
              <ul>
                <li>
                  <a
                    className='modal-close'
                    href='#!'
                    onClick={(e) => {
                      e.preventDefault();
                      props.handleDecline();
                    }}
                  >
                    Right...that makes sense... 
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
//Javan playhouse dialogue boxes****** 
  } else if (gameState.currentMap === 'playhouse' && gameState.interactTile === 70) {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <img
              style={imgStyle}
              src={BardBox}
              alt='Profile of the Bard'
            />
            <h4>The Javan Playhouse Bard</h4>
          </div>
          <div className='row'>
            <p>
              Ah, welcome {state.user.name}! I've heard the rumours and I guessed that you would come seeking my aid.
              I'm taking an ...intermission, in writing my next masterpiece. Are you ready to write your first script?
            </p>
            <ul>
            <Link
                    to='#!' // link to cover letter when ready
                    onClick={(e) => {
                      // e.preventDefault();
                      props.handleAccept();
                    }}
                  >
                    I'm ready!
                  </Link>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  I think I need more practice first.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (gameState.currentMap === 'playhouse' && gameState.interactTile === 71) {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <img
              style={imgStyle}
              src={SingerBox}
              alt='Profile of the Chilly Sasquatch Singer'
            />
            <h4>Chilly Sasquatch Singer</h4>
          </div>
          <div className='row'>
            <p>
              I know it's strange enough to see a Sasquatch outside of Cascadia, nevermind that he's singing in a Javan play. I'm glad the Bard appreciates talent over politics!
            </p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  Good for you!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (gameState.currentMap === 'playhouse' && gameState.interactTile === 72) {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <img
              style={imgStyle}
              src={ActressBox}
              alt='Profile of the Javan Actress'
            />
            <h4>Javan Actress</h4>
          </div>
          <div className='row'>
            <p>
              I know the Bard is reknowned througout Upper Clientia, but sometimes I don't understand the function of his Javan Scripts!
            </p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  Sounds like some kind of code to me...
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (gameState.currentMap === 'playhouse' && gameState.interactTile === 73) {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <img
              style={imgStyle}
              src={ManagerBox}
              alt='Profile of the Javan Playhouse Manager'
            />
            <h4>Javan Playhouse Manager</h4>
          </div>
          <div className='row'>
            <p>
              With the borders closed in Upper Clientia, business has been horrible! I hope that somehow all three kingdoms sort out their problems.
            </p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  Tough times for all of us.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Dialogue;
