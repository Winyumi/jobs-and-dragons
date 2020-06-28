import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import { api } from '../utils/api';
import background from '../assets/dark-honeycomb.png';

import Stats from './../components/Stats';

import 'materialize-css';
import ProgressBarExample from '../components/progressBar/index';
import Questmap from '../components/Questmap';
import Loading from '../components/Loading';
import { useAuth0 } from '../react-auth0-spa';
import { Row, Col } from 'react-materialize';

const Profile = () => {
  const { loading, user } = useAuth0();
  const [state, dispatch] = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loading || !user) {
      return <Loading />;
    }

    api.getUserInfo(user.email).then((result) => {
      if (result.success) {
        dispatch({ type: 'user', payload: result.data });
        setIsLoading(false);
      } else {
        setIsLoading(true);
        let newUser = {
          name: '',
          email: '',
          picture: '',
          progressTracker: {
            quest1: false,
            quest2: false,
            quest3: false,
          },
          gamestats: {
            publicRepos: 0,
            followers: 0,
            numOfStars: 0,
            jp: 20,
            speed: 75,
          },
          inventory: {
            scroll: false,
            bow: false,
          },
          experience: [],
          education: [],
          skills: [],
          projects: [],
          expertise: [],
          jobsearch: [],
        };
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.picture = user.picture;

        window
          .fetch(`https://api.github.com/users/${user.nickname}`)
          .then((res) => res.json())
          .then((res) => {
            newUser.gamestats.publicRepos = res['public_repos'];
            newUser.gamestats.followers = res['followers'];
            return newUser;
          })
          .then((newUser) => {
            window
              .fetch(`https://api.github.com/users/${user.nickname}/repos`)
              .then((res) => res.json())
              .then((res) => {
                const numOfStars = res.reduce((acc, repo) => {
                  return acc + repo['stargazers_count'];
                }, 0);
                newUser.gamestats.numOfStars = numOfStars;
                return newUser;
              })
              .then((newUser) => {
                api.addUserInfo(newUser).then((result) => {
                  if (result.success) {
                    dispatch({ type: 'user', payload: result.data });
                    setIsLoading(false);
                  }
                });
              });
          });
      }
    });
  }, [loading, user, dispatch]);

  const questState = state.user.progressTracker;

  return (
    <>
      <div style={profileStyle}>
        <div className='row'>
          <div className='col s12 m6' style={{ marginTop: '50px' }}>
            <div className='row'>
              <div className='card-panel' style={mediaStyle}>
                <div className='row valign-wrapper'>
                  <div className='col s3'>
                    <img
                      src={user.picture}
                      alt='User profile'
                      className='circle responsive-img'
                    ></img>
                  </div>
                  <div className='center col s9'>
                    <h5 style={h3Style}>{user.name}</h5>
                    Username : {user.nickname}
                    <br></br>
                    Email : {user.email}
                    <br></br>
                  </div>
                </div>

                <div className='row valign-wrapper'>
                  <div className='center col s10'>
                    <Stats />
                  </div>
                </div>

                <div className='row valign-wrapper'>
                  {!isLoading ? <ProgressBarExample /> : null}
                </div>
              </div>
            </div>
          </div>

          {/* Quest 1 Description  */}
          {!questState.quest1 && !questState.quest2 && !questState.quest3 ? (
            <div
              className='center col s12 m6'
              style={{ marginTop: '50px' }}
              id='quest1Description'
            >
              <div className='card-panel' style={mediaStyle}>
                <div className='row valign-wrapper'>
                  <div className='center col s12'>
                    <h3 style={h3Style}>Quest Description</h3>
                    <div className='card-panel red'>
                      <span className='white-text'>
                        Welcome {user.nickname} to the beginning of your
                        adventure! All three of your quests can be completed in
                        Gninnigeb City, the place you see below. You must seek
                        out the Oracle of Secivres Reerac, a mysterious wiseman
                        who will aid you in your first quest, the crafting of
                        your first scroll! Be sure to speak to his Acolytes and
                        to explore his entire lair; you might find some
                        unexpected help along the way...
                      </span>
                    </div>
                    <div className='card-panel white'>
                      <span
                        className='black-text'
                        style={{
                          fontFamily: 'sans-serif',
                          fontWeight: 'bolder',
                        }}
                      >
                        The goal of this quest is to create your first resume,
                        using information you will find along the way.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          {/* Quest 2 Description  */}
          {questState.quest1 && !questState.quest2 && !questState.quest3 ? (
            <div
              className='center col s12 m6'
              style={{ marginTop: '50px' }}
              id='quest2Description'
            >
              <div className='card-panel' style={mediaStyle}>
                <div className='row valign-wrapper'>
                  <div className='center col s12'>
                    <h3 style={h3Style}>Quest Description</h3>
                    <div className='card-panel red'>
                      <span className='white-text'>
                        Great Job on creating your scroll! The Oracle was very
                        impressed, can't stop talking about it actually...Now,
                        this next quest will be a bit more of a challenge. You
                        must return to Gninnigeb City and seek out the Namuh
                        Secruoser Guildhouse and it's leader, the mysterious
                        "Guardian". If she approves of you, she'll allow you to
                        go on your first hunt for the elusive Boj. Good luck!
                      </span>
                    </div>
                    <div className='card-panel white'>
                      <span
                        className='black-text'
                        style={{
                          fontFamily: 'sans-serif',
                          fontWeight: 'bolder',
                        }}
                      >
                        The goal of this quest is to perform your first job
                        search and save one job listing.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          {/* Quest 3 Description  */}
          {questState.quest1 && questState.quest2 && !questState.quest3 ? (
            <div
              className='center col s12 m6'
              style={{ marginTop: '50px' }}
              id='quest3Description'
            >
              <div className='card-panel' style={mediaStyle}>
                <div className='row valign-wrapper'>
                  <div className='center col s12'>
                    <h3 style={h3Style}>Quest Description</h3>
                    <div className='card-panel red'>
                      <span className='white-text'>
                        The Boj can be slippery prey, but the Secruoserans said
                        you did well. Your next quest be your last in Gninnigeb
                        City, but perhaps your most challenging yet...You must
                        visit the Javan Playhouse and find the Bard. Word is the
                        Playhouse has fallen on hard times, so the Bard has
                        extended his expertise to adventurers such as yourself
                        to help you craft a Phoenix Scroll. It will be the first
                        of many, I'm sure, but everyone needs guidance on their
                        first attempt.
                      </span>
                    </div>
                    <div className='card-panel white'>
                      <span
                        className='black-text'
                        style={{
                          fontFamily: 'sans-serif',
                          fontWeight: 'bolder',
                        }}
                      >
                        The goal of this quest is to create your first cover
                        letter to apply to your saved job listing.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          {/* ALL QUEST COMPLETED - After 3rd Quest  */}
          {questState.quest1 && questState.quest2 && questState.quest3 ? (
            <div
              className='center col s12 m6'
              style={{ marginTop: '50px' }}
              id='quest3Description'
            >
              <div className='card-panel' style={mediaStyle}>
                <div className='row valign-wrapper'>
                  <div className='center col s12'>
                    <h3 style={h3Style}>
                      You Are Ready to Conquer the WORLD !!!{' '}
                    </h3>
                    <br></br>
                    <Link to='/resume'>
                      <button
                        rel='noopener noreferrer'
                        className='btn btn-large red darken-4'
                      >
                        View Resume
                      </button>
                    </Link>
                    <br></br>
                    <Link to='/joblisting/saved'>
                      <button
                        rel='noopener noreferrer'
                        className='btn btn-large red darken-4'
                      >
                        View Saved Jobs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        <div style={PageStyles}>
          <Row>
            <Col s={1} />
            <Col s={10} style={GameBoxStyles}>
              <Questmap />
            </Col>
            <Col s={1} />
          </Row>
        </div>
      </div>
    </>
  );
};

const profileStyle = {
  height: '100%',
  width: '100%',
  backgroundImage: `url(${background})`,
};

const mediaStyle = {
  marginLeft: '20px',
  padding: '10px',
  background: '#535456',
};

const h3Style = {
  color: 'red',
};

const PageStyles = {
  paddingTop: '10px',
  paddingBottom: '150px',
  width: '100%',
  height: '100%',
};

const GameBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
};

export default Profile;
