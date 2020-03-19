import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { useUserContext } from '../contexts/UserContext';
import 'materialize-css';

const Stats = () => {
  const [state, dispatch] = useUserContext();
  const [gamestats, setGamestats] = useState({});

  useEffect(() => {
    setGamestats(state.user.gamestats);
  }, [state.user.gamestats]);
  return (
    <div
      className='row'
      style={{
        margin: '1rem'
      }}
    >
      <h4 className='center'>Stats</h4>
      <div className='col'>
        <p>hp</p>
        <StatsBar stat={gamestats.numOfStars * 10} />
        <p>jp</p>
        <StatsBar stat={gamestats.jp} />
        <p>strength</p>
        <StatsBar stat={gamestats.followers} />
        <p>speed</p>
        <StatsBar stat={gamestats.speed} />
        <p>experience</p>
        <StatsBar stat={gamestats.publicRepos} />
      </div>
    </div>
  );
};

const StatsBar = props => {
  return (
    <div
      className='stats-bar'
      style={{
        position: 'relative',
        height: '20px',
        // width:'100px',
        // borderRadius:'50px',
        border: '1px solid #333'
      }}
    >
      <Filler stat={props.stat} />
    </div>
  );
};

const Filler = props => {
  return (
    <div
      className='filler'
      style={{
        background: '#1DA598',
        height: '100%',
        width: `${props.stat}px`
        // transition: 'width .2s ease-in'
      }}
    >
      <p>{props.stat}/100</p>
    </div>
  );
};

export default Stats;
