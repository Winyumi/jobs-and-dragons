import React, { useState, useEffect } from 'react';
import { useUserContext } from '../contexts/UserContext';
import 'materialize-css';
import { useAuth0 } from '../react-auth0-spa';
import Loading from '../components/Loading';

const Stats = () => {
  const { loading } = useAuth0();
  const [state] = useUserContext();
  const [gamestats, setGamestats] = useState({});

  useEffect(() => {
    setGamestats(state.user.gamestats);
  }, [state.user.gamestats]);

  if (loading || Object.keys(gamestats).length === 0) {
    return <Loading />;
  }

  return (
    <>
      {/* <div className="row valign-wrapper" style={{ paddingLeft: "20px", paddingRight: "20px" }}> */}
      <div
        className='row valign-wrapper'
        style={{ width: '100%', marginRight: '1rem' }}
      >
        <div className='col s12'>
          <span>HP</span>
          <StatsBar stat={gamestats.numOfStars * 10} />
        </div>
        <div className='col s12'>
          <span>JP</span>
          <StatsBar stat={gamestats.jp} />
        </div>
        <div className='col s12'>
          <span>STRENGTH</span>
          <StatsBar stat={gamestats.followers} />
        </div>
        <div className='col s12'>
          <span>SPEED</span>
          <StatsBar stat={gamestats.speed} />
        </div>
        <div className='col s12'>
          <span>EXPERIENCE</span>
          <StatsBar stat={gamestats.publicRepos} />
        </div>
      </div>
    </>
  );
};

const StatsBar = (props) => {
  return (
    <div className='stats-bar'>
      <Filler stat={props.stat} />
    </div>
  );
};

const Filler = (props) => {
  return (
    <div className='card-panel red'>
      <span className='white-text'>{props.stat}</span>
    </div>
  );
};

export default Stats;
