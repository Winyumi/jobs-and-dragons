import React from 'react';
import OracleBox from '../assets/OracleBox.png';
// import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

// Dialogue box content needs to be replaced with dynamic content determined by props
const Dialogue = props => {
  const imgStyle = {
    float: 'right',
    width: '100px'
  };

  console.log(props);
  return (
    <div
      className='modal-content'
      style={{
        color: 'white',
        backgroundColor: 'black',
        position: 'absolute',
        top: '33%',
        left: '33%',
        width: '700px',
        height: '300px',
        padding: '20px'
      }}
    >
      <div style={{}}>
        <div className='row'>
          <img style={imgStyle} src={OracleBox} alt='' />
          <h4>The Oracle of Secivres Reerac</h4>
        </div>
        <div className='row'>
          <p>
            Welcome {props.username} to the beginning of your journey! I am the
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
};

export default Dialogue;
