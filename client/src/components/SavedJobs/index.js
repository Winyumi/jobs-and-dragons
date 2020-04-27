import React, { Component } from "react";
import "./savedjobs.css";
import Auth0Context from "../../react-auth0-spa";
import dateFormat from "dateformat";

export default class SavedJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
    };
  }
  static contextType = Auth0Context;

  componentDidMount() {
    const userEmail = this.context.user.email;
    fetch(`/api/v1/users/email/${userEmail}`)
      .then((res) => res.json())
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
  handleSubmitDelete = (item, state) => {
    const id = item.id;
    console.log(item.id);
    const userEmail = this.context.user.email;
    async function deleteJobListing(id, email) {
      fetch(`/api/v1/users/emaildj/${email}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
    }
    deleteJobListing(id, userEmail);
    this.componentDidMount();
  };
  render() {
    const { items } = this.state;
    return (
      <>
        <div>
          <div className="row">
            <div className="center col">
              <h4 style={{ color: "red" }}>SAVED LISTINGS</h4>
            </div>
          </div>
          <div className="row">
            <div className="center col">
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <div className="card grey">
                      <div className="card-content">
                        <h6 className="card-title">{item.title}</h6>
                        <p>
                          <b>Company :</b> {item.title}
                        </p>
                        <p>
                          <b>Date :</b>
                          {dateFormat(item.created, "dddd, mmmm dS, yyyy")}
                        </p>
                        {/* <p>
                            {" "}
                            <b>Description :</b> {item.description}
                          </p> */}
                      </div>
                      <div className="card-action">
                        <button
                          onClick={(e) =>
                            this.handleSubmitDelete(item, this.state)
                          }
                          value="delete"
                          className="btn red darken-4"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))}{" "}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
