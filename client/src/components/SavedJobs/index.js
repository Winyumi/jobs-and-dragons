import React, { Component } from "react";
import "./savedjobs.css";
import Auth0Context from "../../react-auth0-spa";
import dateFormat from "dateformat";

export default class SavedJobs extends React.Component{
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
}
handleSubmitDelete=(item,state)=> {
const id = item.id;
console.log(item.id);
const userEmail= this.context.user.email;
async function deleteJobListing(id, email){
   fetch(`/api/v1/users/emaildj/${email}`,{
        method:'PUT',
        mode:'cors',
        cache: 'no-cache',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({id:id})
    }).then(
        (result)=>result.json())
        .then(
            (result) => {
              console.log(result.jobsearch);
              console.log(state)
              this.statesetState({
                items: result.jobsearch,
              });
            },
            (error) => {
              this.setState({
                error,
              });
              });
        
}
deleteJobListing(id,userEmail);
}
render(){
    const{ items }= this.state;
        return (
          <>
            <div className="row">
              <div className="center col s12 m3">
                <h4 style={{ color: "red" }}>Saved Listings</h4>
            </div>
    

            <div className="center col s12 m8">
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <div className="card red darken-4">
                        <div className="card-content">
                          <h3
                            className="card-title"
                            style={{ fontSize: "4vh" }}
                          >
                            {item.title}
                          </h3>
                          <p>
                            {" "}
                            <b>Company :</b> {item.title}{" "}
                          </p>
                          <p>
                            {" "}
                            <b>Date :</b>{" "}
                            {dateFormat(item.created, "dddd, mmmm dS, yyyy")}
                          </p>
                          <p>
                            {" "}
                            <b>Description :</b> {item.description}
                          </p>
                        </div>
                        <div className="card-action">
                          <button onClick ={(e)=>this.handleSubmitDelete(item, this.state)}
                          value="delete"
                          className="btn btn-large red darken-4"
                          >Delete</button>
                        </div>
                        </div>
                        </li>
                   ))} </ul>
                        </div>
</div>
</>

    )
}
}
    
    