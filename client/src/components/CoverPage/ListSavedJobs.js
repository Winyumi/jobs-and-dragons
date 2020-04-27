import React, { Component } from "react";
import Auth0Context from "../../react-auth0-spa";



export default class ListSavedJobs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: null,
            items:[]
        }
    }
    static contextType= Auth0Context;

componentDidMount(){
const userEmail = this.context.user.email;
 fetch(`/api/v1/users/email/${userEmail}`)
 .then((res)=>res.json())
 .then(
    (result) => {
      console.log(result.data.jobsearch);
      this.setState({
        items: result.data.jobsearch,
      });
    },
    (error) => {
      this.setState({
        error,
      });
    }
  );
};

render(){
    const{ items }= this.state;
        return (
          < >
          <div className ="row">
          <div className="s2 offset-s10">
  
          <div>
                <h6>Saved Listings</h6>
            </div>
    

            <div className="card-panel black">
                            <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <div>
                        <div>
                          <p>
                            Job Title: {item.title}
                          </p>
                          <p>
                            Company: {item.title}
                          </p>
                          </div>
                          </div>
                          </li>
                  ))}
                          </ul>
                          </div>
                          </div>
                          </div>
                          </>
                  )
                  }
                }