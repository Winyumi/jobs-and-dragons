import React, { Component } from 'react';
import JobCard from '../components/jobCard';

import 'materialize-css';
import dateFormat from 'dateformat';

import Loading from '../components/Loading';
// import { useAuth0 } from '../react-auth0-spa';


export default class jobListing extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        query: ''
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

    handleSubmitSearch = (e) => {
        e.preventDefault();
        let app_id='a69247c0';
        let app_key='24fc9762a9d2f3a031f002f7afe14f75';

        const query=this.state.query;
        fetch('https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id='+app_id+'&app_key='+app_key+'&results_per_page=5'+'&what='+query)
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

                <div className='center col s12 m3'>
                    <h3>JOB LISTINGS</h3>
                    <div className='center input-field'>
                        <i className="large material-icons prefix">work</i>
                        <input id="searchBox" value={this.state.query} type="text" 
                        onChange={e => this.setState({query:e.target.value})} ></input>
                        <label className="active">Search Job Title</label>
                    </div>
                    <input
                    type='submit'
                    value='SUBMIT'
                    className='item-large'
                    onClick= { e => this.handleSubmitSearch(e) }
                    />
                </div>

                <div className='center col s12 m8'>
                    <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {/* <JobCard
                            values={item.name}
                            id={item.id}
                        /> */}

                            <div className="card brown lighten-3">

                                <div className="card-content">
                                    <h6 className="card-title activator">{item.title}<i class="material-icons right">more_vert</i></h6>
                                    <p> <b>Company :</b> {item.company.display_name} </p>
                                    <span> <b>Location :</b> { item.location.display_name}</span>
                                    <p> <b>Date :</b> { dateFormat( item.created , "dddd, mmmm dS, yyyy")  }</p>
                                </div>

                                <div className="card-action">
                                    <a href={ item.redirect_url} target='_blank'className="btn brown darken-4 tooltipped" data-tooltip="I am a tooltip">Apply</a>
                                    <a className="btn brown darken-4"><i className="material-icons">save</i></a>
                                </div>

                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                                    <p>{ item.description }</p>
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
