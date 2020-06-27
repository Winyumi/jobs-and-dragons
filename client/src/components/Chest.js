import React from 'react';
// import Link from '../assets/Link.png';
// import M from "materialize-css";
import { usePlayerContext } from '../contexts/PlayerContext';
import 'materialize-css/dist/css/materialize.min.css';

// Dialogue box content needs to be replaced with dynamic content determined by props
const Chest = (props) => {
  const [state] = usePlayerContext();
  //   const imgStyle = {
  //     float: 'right',
  //     width: '100px'
  //   };
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

  if (state.currentMap === 'academy' && state.interactTile === 76) {
  return (
    <div className='modal-content' style={chestStyle}>
      <div style={{}}>
        <div className='row'>
          {/* <img style={imgStyle} src={Link} alt='Link' /> */}
          <h4>You Found a Link of Secivres Reerac!</h4>
        </div>
        <div className='row'>
          <p>Use this link to find helpful information for your quest!</p>
          <ul>
            <li>
              <a
                className='modal-close'
                href='https://www.smashingmagazine.com/2018/06/web-developer-resume/'
                target='_blank'
                rel='noopener noreferrer'
                onClick={e => {
                  e.preventDefault();
                  props.handleAccept();
                }}
              >
                Sure!
              </a>
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
                I'm good for now.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
if (state.currentMap === 'academy' && state.interactTile === 77) {
  return (
    <div className='modal-content' style={chestStyle}>
      <div style={{}}>
        <div className='row'>
          {/* <img style={imgStyle} src={Link} alt='Link' /> */}
          <h4>You Found an Academy Oediv!</h4>
        </div>
        <div className='row'>
          <p>Peer into the orb for helpful information for your quest!</p>
          <ul>
            <li>
              <a
                className='modal-close'
                href='https://www.youtube.com/watch?v=SDIrz5M5dhE'
                target='_blank'
                rel='noopener noreferrer'
                onClick={e => {
                  e.preventDefault();
                  props.handleAccept();
                }}
              >
                Sure!
              </a>
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
                I'll check my fortune later...
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
  if (state.currentMap === 'dungeon' && state.interactTile === 26) {
    return (
      <div className='modal-content' style={chestStyle}>
        <div style={{}}>
          <div className='row'>
            {/* <img style={imgStyle} src={Link} alt='Link' /> */}
            <h4>You Found a Link of Secivres Reerac!</h4>
          </div>
          <div className='row'>
            <p>Use this link to find helpful information for your quest!</p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='https://www.smashingmagazine.com/2018/06/web-developer-resume/'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={e => {
                    e.preventDefault();
                    props.handleAccept();
                  }}
                >
                  Sure!
                </a>
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
                  I'm good for now.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  if (state.currentMap === 'guild' && state.interactTile === 26) {
    return (
      <div className='modal-content' style={chestStyle}>
        <div style={{}}>
          <div className='row'>
            {/* <img style={imgStyle} src={Link} alt='Link' /> */}
            <h4>You Found a Link of Namuh Secruoser!</h4>
          </div>
          <div className='row'>
            <p>Use this link to find helpful information for your quest!</p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='https://www.themuse.com/advice/how-to-organize-track-job-search'
                  target='_blank'
                  rel='noopener noreferrer'
                  // onClick={e => {
                  //   e.preventDefault();
                  //   props.handleAccept();
                  // }}
                >
                  Sure!
                </a>
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
                  I'm good for now.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  if (state.currentMap === 'playhouse' && state.interactTile === 80) {
    return (
      <div className='modal-content' style={chestStyle}>
        <div style={{}}>
          <div className='row'>
            {/* <img style={imgStyle} src={Link} alt='Link' /> */}
            <h4>You Found a Javan Playhouse Link!</h4>
          </div>
          <div className='row'>
            <p>Use this link to find helpful information for your quest!</p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='https://www.thebalancecareers.com/resume-and-cover-letter-examples-listed-by-job-2063586'
                  target='_blank'
                  rel='noopener noreferrer'
                  // onClick={e => {
                  //   e.preventDefault();
                  //   props.handleAccept();
                  // }}
                >
                  Sure!
                </a>
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
                  I'm good for now.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Chest;
