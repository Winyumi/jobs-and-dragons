import React, { Component } from "react";

import dotenv from "dotenv";

import "materialize-css";
import dateFormat from "dateformat";
import Loading from "../components/Loading";

import background from "../assets/J&D_BG.png";
import { withRouter } from "react-router-dom";

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
          console.log(result);
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
                  <i className="large material-icons prefix">work</i>
                  <input
                    id="searchBox"
                    value={this.state.query}
                    type="text"
                    onChange={(e) => this.setState({ query: e.target.value })}
                  ></input>
                  <label className="active">Search Job Title</label>
                </div>
                <input
                  type="submit"
                  value="SEARCH"
                  className="btn btn-large red darken-4"
                  onClick={(e) => this.handleSubmitSearch(e)}
                />
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
                            <b>Category :</b> {item.category.label}
                          </p>
                          <p>
                            {" "}
                            <b>Description :</b> {item.description}
                          </p>
                        </div>

                        <div className="card-action">
                          <a
                            href={item.redirect_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn red darken-4"
                          >
                            Apply
                          </a>
                          {/* <a className="btn red darken-4"><i className="material-icons">save</i></a> */}
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
  backgroundColor: "black",
  color: "white",
  // backgroundImage: `url(${background})`,
  backgroundSize: "cover",
};
