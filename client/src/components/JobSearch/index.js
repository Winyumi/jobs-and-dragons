
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class jobListing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id=a69247c0&app_key=24fc9762a9d2f3a031f002f7afe14f75&what=chef&results_per_page=1")
        .then(res => res.json())
        .then(console.log(res))
        // .then(
        //   (result) => {
        //     this.setState({
        //       isLoaded: true,
        //       items: result
        //     });
        //   },
        //   // Note: it's important to handle errors here
        //   // instead of a catch() block so that we don't swallow
        //   // exceptions from actual bugs in components.
        //   (error) => {
        //     this.setState({
        //       isLoaded: true,
        //       error
        //     });
        //   }
        // )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }