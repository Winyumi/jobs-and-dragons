import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dotenv from 'dotenv';
import Auth0Context from "../react-auth0-spa";
import 'materialize-css';
import dateFormat from 'dateformat';
import Loading from '../components/Loading';
import SavedJobs from '../components/SavedJobs/index';

dotenv.config();

const APP_ID = "a69247c0";
const APP_KEY = "24fc9762a9d2f3a031f002f7afe14f75";

export default class jobListing extends Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        query: ''
      };
    }
    static contextType = Auth0Context;
    componentDidMount() {

        fetch("https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id=" +
        APP_ID +
        "&app_key=" +
        APP_KEY
    )

        .then(res => res.json())
        .then(

            (result) => {
                // console.log(result);
              this.setState({
                isLoaded: true,
                items: result.results,
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

    handleSubmitSave = (item) => {
      const jobInfo={
        id:item.id,
        title:item.title,
        description:item.description,
        url:item.redirect_url,
        company:item.company.display_name,
        location:{
          area:item.location.area,
          latitude: item.latitude,
          longitude:item.longitude
      }
      }

      const userEmail = this.context.user.email;

      async function updateJobInfo(data, email) {
        const res = fetch(`/api/v1/users/emailjs/${email}`, {
          method: 'PUT',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
          if (res.ok) {
          return res.data;
        }
      }

        updateJobInfo(jobInfo,userEmail);

    }


    handleSubmitSearch = (e) => {
        e.preventDefault();

        const query=this.state.query;

        fetch(
          "https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id=" +
            APP_ID +
            "&app_key=" +
            APP_KEY +
            "&what=" +
            query
        )
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.results,
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
                    <h4>Job Listings</h4>
                    <div className='center input-field'>
                        <i className="large material-icons prefix">work</i>
                        <input id="searchBox"
                        value={this.state.query}
                        type="text"
                        onChange={e => this.setState({query:e.target.value})} >
                        </input>
                        <label for="searchBox">Search Job Title</label>
                    </div>
                    <input
                    type='submit'
                    value='SEARCH'
                    className='btn brown darken-4'
                    onClick= { e => this.handleSubmitSearch(e) }
                    />
                    <div class="input-field">
                      <Link to='/joblisting/saved'>View Saved Jobs</Link>
                    </div>
                </div>

                <div className='center col s12 m8'>
                    <ul>
                    {items.map(item => (
                        <li key={ item.id }>

                            <div className="card brown lighten-3">

                                <div className="card-content">
                                    <h6 className="card-title activator">{ item.title }<i className="material-icons right">more_vert</i></h6>
                                    <p> <b>Company :</b> { item.title } </p>
                                    <p> <b>Date :</b> { dateFormat( item.created , "dddd, mmmm dS, yyyy") }</p>
                                </div>

                                <div className="card-action">
                                    <a href={ item.redirect_url} target='_blank' className="btn brown darken-4">Apply</a>
                                    <button onClick ={(e)=>this.handleSubmitSave(item)}
                                     value="Save" className="btn brown darken-4">Save</button>
                                </div>

                                <div className="card-reveal brown darken-4">
                                    <span className="card-title brown darken-4 brown lighten-3"><i className="material-icons right">close</i></span>
                                    <p className="brown lighten-3"> <b>Category :</b> { item.category.label }</p>

                                    <p className="brown lighten-3"> <b>Description :</b> { item.description }</p>


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
