import React, { Component } from 'react';
import JobCard from '../components/jobCard'

import 'materialize-css';

import Loading from '../components/Loading';
import { useAuth0 } from '../react-auth0-spa';


export default class jobListing extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
        let app_id='a69247c0';
        let app_key='24fc9762a9d2f3a031f002f7afe14f75';

        fetch('https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id='+app_id+'&app_key='+app_key+'&results_per_page=5')
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
              this.setState({
                isLoaded: true,
                items: result.results
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )

    }

    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div><Loading /></div>;
      } else {
        return (

            <div className='row'>

                <div className='center col s12 m6'>
                    <h3>JOB LISTINGS</h3>
                    <div className='center input-field'>
                        <i className="large material-icons prefix">work</i>
                        <input id="first_name2" type="text"></input>
                        <label className="active">Search Job Title</label>
                    </div>
                    <input
                    type='submit'
                    value='SUBMIT'
                    className='btn-large'
                    />
                </div>

                <div className='center col s12 m6'>
                    <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {/* <JobCard
                            values={item.name}
                            id={item.id}
                        /> */}

                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <h6 className="card-title">{item.title}</h6>
                                    <p>
                                        {item.company.display_name}
                                    </p>
                                    <span>{ item.location.display_name}</span>

                                </div>
                                <div className="card-action">
                                <a href={ item.redirect_url} target='_blank'>Apply</a>

                                </div>
                            </div>
                        </li>
                    ))}     
                    </ul>    
                </div>
            </div>
    
        );
      }
    }
  }

    // {items.map(item => (
                        // <li key={item.id}>
                        //     {item.title} 
                        // </li>
                        // ))}