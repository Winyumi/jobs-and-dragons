import React, { Component } from 'react';

import 'materialize-css';

import Loading from '../components/Loading';
import { useAuth0 } from '../react-auth0-spa';


export default class jobListing extends React.Component {

    handleSearchChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
          // merge data together, then see if user input is anywhere inside
          let values = Object.values(item)
            .join("")
            .toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filteredList });
      }

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
              console.log(this.items)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
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

                <div className='center input-field col s12 m6'>
                <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
   
                    {/* <ul>
                        {items.map(item => (
                        <li key={item.id}>
                            {item.title} 
                        </li>
                        ))}
                    </ul>     */}
                </div>


            </div>
    
        );
      }
    }
  }

