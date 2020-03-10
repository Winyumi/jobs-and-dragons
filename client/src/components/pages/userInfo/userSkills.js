import React, { Component } from "react";

import RateSkills from './rating';



const SKILLS = ["Softeare Engineer", "Full Stack developer", "Auality Assurance", "Database management", "DevOps", "UI/UX Developer", "Front end Developer", "Web Services Developer", "Web Designer"];

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
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
            </form>
       </div>
    );
  }
};
export default userSkills;
