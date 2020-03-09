import React, { Component } from "react";
import { Rating } from 'semantic-ui-react';


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

    <Rating maxRating={5} clearable = {false} defaultRating = "1"
    label={option}
    key={option}
   
     />
  );

  createRating = () => SKILLS.map(this.createRatings);

  render() {
    const shaili = ({ label });
    return (
        
      <div className = "row">
            <form className = "col s12" onSubmit={this.handleFormSubmit}>
              {this.createRating()}
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                {label}
            </form>
       </div>
    );
  }
};
export default userSkills;
