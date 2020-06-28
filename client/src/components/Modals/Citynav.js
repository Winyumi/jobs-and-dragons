import React from 'react';
import { usePlayerContext } from '../../contexts/PlayerContext';
// import { useUserContext } from '../../contexts/UserContext';
// import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

const CityNav = (props) => {
  const [gameState] = usePlayerContext();
  // const [state] = useUserContext();

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
  const chestStyle = {
    color: 'white',
    backgroundColor: 'black',
    position: 'absolute',
    top: '33%',
    left: '33%',
    width: '400px',
    height: '400px',
    padding: '20px',
  };
  //gninnigeb City Navigation Modals
  if (gameState.interactTile === 12) {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <h4>Lair of the Oracle</h4>
          </div>
          <div className='row'>
            <p>The home of the wise keeper of Tenretni secrets</p>
            <ul>
              <li>
                <Link
                  className='modal-close'
                  to='/game/quest/01'
                  onClick={(e) => {
                    // e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  Enter the Oracle's Lair
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
                  Leave
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (gameState.interactTile === 13) {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <h4>The Namuh Secruoser Guildhouse</h4>
          </div>
          <div className='row'>
            <p>
              The headquarters of the Namuh Secruoser Guild and preferred hang
              out for the Guardian
            </p>
            <ul>
              <li>
                <Link
                  className='modal-close'
                  to='/game/quest/02'
                  onClick={(e) => {
                    // e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  Enter the Guildhouse
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
                  Leave
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (gameState.interactTile === 14) {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <h4>The Javan Playhouse</h4>
          </div>
          <div className='row'>
            <p>
              A struggling playhouse and center of culture in Gninnigeb City
            </p>
            <ul>
              <Link
                to='/game/quest/03'
                onClick={(e) => {
                  // e.preventDefault();
                  props.handleDecline();
                }}
              >
                Enter
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
                  Leave
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default CityNav;
