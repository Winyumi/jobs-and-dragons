import React from "react";
import { Link } from "react-router-dom";
import "./savedjobs.css";
import Auth0Context from "../../react-auth0-spa";
import dateFormat from "dateformat";

import backgroundDark from "../../assets/dark-honeycomb.png";

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
    const { error, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!items.length) {
      return (
        <>
          <div style={ListingStylesFullPage}>
            <div className="row" style={{ height: "100vh" }}>
              <div className="col s12 m3">
                <h4 style={{ color: "red" }}>SAVED JOBS LISTINGS</h4>
                <Link to="/joblisting">
                  <button
                    rel="noopener noreferrer"
                    className="btn btn-large red darken-4"
                  >
                    Return to Job Search
                  </button>
                </Link>
              </div>

              <div className="center col s12 m8">
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <div className="card grey lighten-2">
                        <div className="card-content">
                          <h6 className="card-title activator">{item.title}</h6>
                          <p>
                            <b>Company :</b> {item.title}
                          </p>
                          <p>
                            <b>Date :</b>
                            {dateFormat(item.created, "dddd, mmmm dS, yyyy")}
                          </p>
                          <p>
                            {" "}
                            <b>Description :</b> {item.description}
                          </p>
                        </div>
                        <div className="card-action">
                          <button
                            onClick={(e) =>
                              this.handleSubmitDelete(item, this.state)
                            }
                            value="delete"
                            className="btn btn-large red darken-4"
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
    } else {
      return (
        <>
          <div style={ListingStyles}>
            <div className="row">
              <div className="col s12 m3">
                <h4 style={{ color: "red" }}>SAVED JOBS LISTINGS</h4>
                <Link to="/joblisting">
                  <button
                    rel="noopener noreferrer"
                    className="btn btn-large red darken-4"
                  >
                    Return to Job Search
                  </button>
                </Link>
              </div>

              <div className="center col s12 m8">
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <div className="card grey lighten-2">
                        <div className="card-content">
                          <h6 className="card-title activator">{item.title}</h6>
                          <p>
                            <b>Company :</b> {item.title}
                          </p>
                          <p>
                            <b>Date :</b>
                            {dateFormat(item.created, "dddd, mmmm dS, yyyy")}
                          </p>
                          <p>
                            {" "}
                            <b>Description :</b> {item.description}
                          </p>
                        </div>
                        <div className="card-action">
                          <button
                            onClick={(e) =>
                              this.handleSubmitDelete(item, this.state)
                            }
                            value="delete"
                            className="btn btn-large red darken-4"
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
}

const ListingStylesFullPage = {
  backgroundImage: `url(${backgroundDark})`,
  height: "100vh",
  margin: "0px",
};

const ListingStyles = {
  backgroundImage: `url(${backgroundDark})`,
  height: "100%",
  margin: "0px",
};
