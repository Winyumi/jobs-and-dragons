import React, { Component } from "react";
import { Link } from "react-router-dom";

import dotenv from "dotenv";

import "materialize-css";
import dateFormat from "dateformat";
import Loading from "../components/Loading";
import useUserContext from "../contexts/UserContext";
import Auth0Context from "../react-auth0-spa";
import backgroundDark from "../assets/dark-honeycomb.png";
import { withRouter } from "react-router-dom";
import SavedJobs from "../components/SavedJobs/index";

dotenv.config();

const APP_ID = "a69247c0";
const APP_KEY = "24fc9762a9d2f3a031f002f7afe14f75";

export default class jobListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      query: "",
    };
  }

  static contextType = Auth0Context;

  componentDidMount() {
    fetch(
      "https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id=" +
        APP_ID +
        "&app_key=" +
        APP_KEY
    )
      .then((res) => res.json())
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
            error,
          });
        }
      );
  }

  handleSubmitSearch = (e) => {
    e.preventDefault();

    const query = this.state.query;

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
          let { results } = result;
          results = JSON.parse(
            JSON.stringify(results).replace(/\<strong\>|\<\/strong\>/g, "")
          );
          this.setState({
            isLoaded: true,
            items: results,
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

  handleSubmitSave = (item) => {
    const jobInfo = {
      id: item.id,
      title: item.title,
      description: item.description,
      url: item.redirect_url,
      company: item.company.display_name,
      location: {
        area: item.location.area,
        latitude: item.latitude,
        longitude: item.longitude,
      },
    };

    const userEmail = this.context.user.email;

    async function updateJobInfo(data, email) {
      const res = fetch(`/api/v1/users/emailjs/${email}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        return res.data;
      }
    }
    updateJobInfo(jobInfo, userEmail);
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else {
      return (
        <>
          <div style={ListingStyles}>
            <div className="row">
              <div className="center col s12 m3">
                <h4 style={{ color: "red" }}>JOB LISTINGS</h4>
                <div className="center input-field">
                  <input
                    id="searchBox"
                    value={this.state.query}
                    type="text"
                    style={inputBoxStyle}
                    onChange={(e) => this.setState({ query: e.target.value })}
                  ></input>
                </div>
                <input
                  type="submit"
                  value="SEARCH"
                  className="btn btn-large red darken-4"
                  onClick={(e) => this.handleSubmitSearch(e)}
                />
                <br></br>
                <br></br>
                <div class="input-field">
                  <Link to="/joblisting/saved">
                    <button className="btn btn-large red darken-4">
                      View Saved Jobs
                    </button>
                  </Link>
                </div>
              </div>

              <div className="center col s12 m8">
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <div className="card grey lighten-2">
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
                            <b>Category :</b> {item.category.label}
                          </p>
                          <p>
                            {" "}
                            <b>Description :</b> {item.description}
                          </p>
                        </div>

                        <div className="card-action">
                          <button
                            onClick={(e) => this.handleSubmitSave(item)}
                            value="Save"
                            className="btn btn-large red darken-4"
                          >
                            Save
                          </button>
                          <button
                            href={item.redirect_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-large red darken-4"
                          >
                            Apply
                          </button>
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
  // backgroundColor: "black",
  backgroundImage: `url(${backgroundDark})`,
};

const inputBoxStyle = {
  backgroundColor: "white",
};
