import React from 'react';
import { Link } from 'react-router-dom';

const Quest = props => {
  const { name, image, link } = props.quest;
  return (
    <div className='quest'>
      <Link to={`/${link}`}>
        <figure>
          <img
            src={image}
            alt=''
            style={{
              width: '140px',
              height: '140px'
            }}
          />
          <figcaption
            style={{
              textAlign: 'center'
            }}
          >
            <h6>{name}</h6>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Quest;
