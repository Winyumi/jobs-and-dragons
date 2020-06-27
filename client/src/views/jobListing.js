import React from 'react';
import { Link } from 'react-router-dom';

import dotenv from 'dotenv';

import 'materialize-css';
import dateFormat from 'dateformat';
import Loading from '../components/Loading';
// import useUserContext from "../contexts/UserContext";
import Auth0Context from '../react-auth0-spa';
import backgroundDark from '../assets/dark-honeycomb.png';
// import { withRouter } from "react-router-dom";

dotenv.config();

const APP_ID = 'a69247c0';
const APP_KEY = '24fc9762a9d2f3a031f002f7afe14f75';

export default class jobListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      query: '',
      searchLocation: '',
    };
  }

  static contextType = Auth0Context;

  componentDidMount() {
    fetch(
      'https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id=' +
        APP_ID +
        '&app_key=' +
        APP_KEY +
        '&what=Web Developer'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          let { results } = result;
          results = JSON.parse(
            JSON.stringify(results).replace(/<strong>|<\/strong>/g, '')
          );

          this.setState({
            isLoaded: true,
            items: results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleSubmitSearch = (e) => {
    e.preventDefault();

    const query = this.state.query;
    const searchLocation = this.state.searchLocation;

    fetch(
      'https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id=' +
        APP_ID +
        '&app_key=' +
        APP_KEY +
        '&what=' +
        query +
        '&where=' +
        searchLocation
    )
      .then((res) => res.json())
      .then(
        (result) => {
          let { results } = result;
          results = JSON.parse(
            JSON.stringify(results).replace(/<strong>|<\/strong>/g, '')
          );
          this.setState({
            isLoaded: true,
            items: results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  handleSubmitSave = (item) => {
    const jobInfo = {
      id: item.id,
      title: item.title,
      description: item.description,
      url: item.redirect_url,
      company: item.company.display_name,
      location: {
        area: item.location.area,
        latitude: item.latitude,
        longitude: item.longitude,
      },
    };

    const userEmail = this.context.user.email;

    async function updateJobInfo(data, email) {
      const res = fetch(`/api/v1/users/emailjs/${email}`, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        return res.data;
      }
    }

    async function quest2comp(data, email) {
      const res = fetch(`/api/v1/users/email/${email}`, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        return res.data;
      }
    }
    quest2comp(
      {
        progressTracker: {
          quest1: true,
          quest2: true,
          quest3: false,
        },
      },
      userEmail
    );
    updateJobInfo(jobInfo, userEmail);
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else if (!items.length) {
      return (
        <>
          <div style={PageStyles}>
            <div style={ListingStyles}>
              <div className='row'>
                <div className='center col s12 m3'>
                  <h4 style={{ color: 'red' }}>JOB LISTINGS</h4>
                  <div className='center input-field'>
                    <input
                      id='roleSearchBox'
                      placeholder=' Role / Position'
                      value={this.state.query}
                      type='text'
                      style={inputBoxStyle}
                      onChange={(e) => this.setState({ query: e.target.value })}
                    ></input>
                  </div>
                  <div className='center input-field'>
                    <input
                      id='locationSearchBox'
                      placeholder=' Location'
                      value={this.state.searchLocation}
                      type='text'
                      style={inputBoxStyle}
                      onChange={(e) =>
                        this.setState({ searchLocation: e.target.value })
                      }
                    ></input>
                  </div>
                  <input
                    type='submit'
                    value='SEARCH'
                    className='btn btn-large red darken-4'
                    onClick={(e) => this.handleSubmitSearch(e)}
                  />
                  <br></br>
                  <br></br>
                  <div className='input-field'>
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

                <div className='center col s12 m8'>
                  <h2 style={{ color: 'red' }}>Sorry, No Listings found</h2>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div style={ListingStyles}>
            <div className='row'>
              <div className='center col s12 m3'>
                <h4 style={{ color: 'red' }}>JOB LISTINGS</h4>
                <div className='center input-field'>
                  <input
                    id='roleSearchBox'
                    placeholder=' Role / Position'
                    value={this.state.query}
                    type='text'
                    style={inputBoxStyle}
                    onChange={(e) => this.setState({ query: e.target.value })}
                  ></input>
                </div>
                <div className='center input-field'>
                  <input
                    id='locationSearchBox'
                    placeholder=' Location'
                    value={this.state.searchLocation}
                    type='text'
                    style={inputBoxStyle}
                    onChange={(e) =>
                      this.setState({ searchLocation: e.target.value })
                    }
                  ></input>
                </div>
                <input
                  type='submit'
                  value='SEARCH'
                  className='btn btn-large red darken-4'
                  onClick={(e) => this.handleSubmitSearch(e)}
                />
                <br></br>
                <br></br>
                <div className='input-field'>
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

              <div className='center col s12 m8'>
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <div className='card grey lighten-2'>
                        <div className='card-content'>
                          <h3
                            className='card-title'
                            style={{ fontSize: '4vh' }}
                          >
                            {item.title}
                          </h3>
                          <p>
                            {' '}
                            <b>Company :</b> {item.title}{' '}
                          </p>
                          <p>
                            {' '}
                            <b>Location :</b> {item.location.display_name}{' '}
                          </p>
                          <p>
                            {' '}
                            <b>Date :</b>{' '}
                            {dateFormat(item.created, 'dddd, mmmm dS, yyyy')}
                          </p>
                          <p>
                            {' '}
                            <b>Category :</b> {item.category.label}
                          </p>
                          <p>
                            {' '}
                            <b>Description :</b> {item.description}
                          </p>
                        </div>
                        <div className='card-action'>
                          <button
                            onClick={(e) => this.handleSubmitSave(item)}
                            value='Save'
                            className='btn btn-large red darken-4'
                          >
                            {' '}
                            Save
                          </button>
                          <a
                            href={item.redirect_url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-large red darken-4'
                          >
                            Apply
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
const PageStyles = {
  backgroundImage: `url(${backgroundDark})`,
  height: '100vh',
};

const ListingStyles = {
  backgroundImage: `url(${backgroundDark})`,
  height: '100%',
  paddingBottom: '100px',
};

const inputBoxStyle = {
  backgroundColor: 'whitesmoke',
};
