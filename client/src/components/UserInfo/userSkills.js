import React, { Component } from "react";

import RateSkills from './rating';



const SKILLS = ["HTML", "CSS", "BootStrap", "NodeJs", "Mongo", "React", "Express", "MySql", "jQuery"];

class userSkills extends Component {
  state = {
    Rating: SKILLS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  createRatings = option => (
    <RateSkills
    label={option}
    />
);
     

  createRating = () => SKILLS.map(this.createRatings);

  render() {
    return (
      <div className = "row">
            <form className = "col s12" onSubmit={this.handleFormSubmit}>
              {this.createRating()}
            </form>
       </div>
    );
  }
};
export default userSkills;
