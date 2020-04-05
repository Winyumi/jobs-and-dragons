import React, { useState, useEffect } from 'react';
import { useUserContext } from '../contexts/UserContext';
import 'materialize-css';

const Stats = () => {
  const [state, dispatch] = useUserContext();
  const [gamestats, setGamestats] = useState({});

  useEffect(() => {
    setGamestats(state.user.gamestats);
  }, [state.user.gamestats]);
  return (
    <>
      <div>
        <h4  className='center'>STATS</h4>

        <h6 className='center'>HP</h6>
        <StatsBar stat={gamestats.numOfStars * 10} />
        <h6 className='center'>JP</h6>
        <StatsBar stat={gamestats.jp} />
        <h6 className='center'>STRENGTH</h6>
        <StatsBar stat={gamestats.followers} />
        <h6 className='center'>SPEED</h6>
        <StatsBar stat={gamestats.speed} />
        <h6 className='center'>EXPERIENCE</h6>
        <StatsBar stat={gamestats.publicRepos} />

      </div>
    </>

  );
};

const StatsBar = props => {
  return (
    <div
      className='stats-bar'
      style={{
        position: 'relative',
        height: '30px',
        border: '1px solid black'
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
      }}
    >
      <p>{props.stat}/100</p>
    </div>
  );
};


export default Stats;
