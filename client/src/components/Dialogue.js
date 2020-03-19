import React from 'react';
import OracleBox from '../assets/OracleBox.png';
import GuardianBox from '../assets/GuardianBox.png';
import { useUserContext } from '../contexts/UserContext';
// import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

// Dialogue box content needs to be replaced with dynamic content determined by props
const Dialogue = props => {
  const [state, dispatch] = useUserContext();
  console.log(state)
  console.log(props)
  const imgStyle = {
    float: 'right',
    width: '100px'
  };
  const modalStyle = {
    color: 'white',
    backgroundColor: 'black',
    position: 'absolute',
    top: '33%',
    left: '33%',
    width: '700px',
    height: '300px',
    padding: '20px'
  };
  if (state.currentQuest === 'quest-01') {

    console.log("dialogue", props);
    return (
      <div
        className='modal-content'
        style={modalStyle}
      >
        <div style={{}}>
          <div className='row'>
            <img style={imgStyle} src={OracleBox} alt='Profile of the Oracle' />
            <h4>The Oracle of Secivres Reerac</h4>
          </div>
          <div className='row'>
            <p>
              Welcome {state.user.name} to the beginning of your journey! I am the
            Oracle of Secrives Reerac and I am here to guide you on your quest.
            Are you ready to begin?
          </p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={e => {
                    e.preventDefault();
                    props.handleAccept();
                  }}
                >
                  Yes!
              </a>
              </li>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={e => {
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
  } else if (state.currentQuest === 'quest-02') {
    return (
      <div
        className='modal-content'
        style={modalStyle}
      >
        <div style={{}}>
          <div className='row'>
            <img style={imgStyle} src={GuardianBox} alt='Profile of the Guardian' />
            <h4>The Guardian of Namuh Secruoser</h4>
          </div>
          <div className='row'>
            <p>
Well, you look like you're looking for some action...but are you ready? Guess there's only one way to find out! Are you up to hunting some of the finest game in the kingdom?
                        </p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={e => {
                    e.preventDefault();
                    props.handleAccept();
                  }}
                >
                  Let's do it!!
                            </a>
              </li>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={e => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  You're scary, maybe next time.
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
