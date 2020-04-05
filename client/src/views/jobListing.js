import React, { Component } from 'react';
import dotenv from 'dotenv';

import 'materialize-css';
import dateFormat from 'dateformat';
import Loading from '../components/Loading';

import background from '../assets/J&D_BG.png';



dotenv.config();

// const API_KEY = process.env.REACT_APP_API_KEY;

const API_KEY='885f51fcf0d78fe6f0d8f3a0420e4445';

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

        fetch('https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key='+API_KEY+'&method=aj.jobs.search&format=JSON&keywords=Developer')

        .then(res => res.json())
        .then(

            (result) => {
                console.log(result);
              this.setState({
                isLoaded: true,
                items: result.listings.listing
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

        const query=this.state.query;

        fetch('https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key='+API_KEY+'&method=aj.jobs.search&format=JSON&keywords='+query)
        
        
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.listings.listing
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
          <>
          <div style={ListingStyles}>
            <div className='row'>

                <div className='center col s12 m3'>
                    <h4 style={{color:'red'}}>JOB LISTINGS</h4>
                    <div className='center input-field'>
                        <i className="large material-icons prefix">work</i>
                        <input id="searchBox" 
                        value={this.state.query} 
                        type="text" 
                        onChange={e => this.setState({query:e.target.value})} >
                        </input>
                        <label className="active">Search Job Title</label>
                    </div>
                    <input
                    type='submit'
                    value='SEARCH'
                    className='btn red darken-4'
                    onClick= { e => this.handleSubmitSearch(e) }
                    />
                </div>

                <div className='center col s12 m8'>
                    <ul>
                    {items.map(item => (
                        <li key={ item.id }>

                            <div className="card red lighten-3">

                                <div className="card-content">
                                    <h4 className="card-title activator">{ item.title }<i className="material-icons right">more_vert</i></h4>
                                    <p> <b>Company :</b> { item.company.name } </p>
                                    <p> <b>Type :</b> { item.type.name }</p>
                                    <p> <b>Date :</b> { dateFormat( item.post_date , "dddd, mmmm dS, yyyy") }</p>
                                </div>

                                <div className="card-action">
                                    <a href={ item.url } target='_blank'className="btn red darken-4">Apply</a>
                                    {/* <a className="btn red darken-4"><i className="material-icons">save</i></a> */}
                                </div>

                                <div className="card-reveal red darken-4">
                                    <span className="card-title red darken-4 red lighten-3"><i className="material-icons right">close</i></span>
                                    <p className="red lighten-3"> <b>Category :</b> { item.category.name }</p>
                                    <p className="red lighten-3"> <b>Perks :</b> { item.perks }</p>
                                    <p className="red lighten-3"> <b>Description :</b> { item.description }</p>


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

  const ListingStyles = { 
    height: '90vh',

    // backgroundImage: `url(${background})`,
    backgroundSize: 'cover'

  }
