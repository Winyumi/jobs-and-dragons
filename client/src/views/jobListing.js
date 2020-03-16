import React, { Component } from 'react';

import 'materialize-css';

import Loading from '../components/Loading';

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
                <div className='input-field col s6'>
                    <i class="material-icons prefix">account_circle</i>
                    <input value="Web Developer" id="first_name2" type="text" class="validate"></input>
                    <label class="active" for="first_name2">Job Title</label>
   
                    <ul>
                        {items.map(item => (
                        <li key={item.name}>
                            {item.title} 
                        </li>
                        ))}
                    </ul>    
                </div>
            </div>
    
        );
      }
    }
  }

