import React, { Component } from "react";
import Checkbox from "./checkbox";

const EXPERTISE = ["Softeare Engineer", "Full Stack developer", "Auality Assurance", "Database management", "DevOps", "UI/UX Developer", "Front end Developer", "Web Services Developer", "Web Designer"];

class userExpertise extends Component {
  state = {
    checkboxes: EXPERTISE.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
     
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => EXPERTISE.map(this.createCheckbox);

  render() {
    return (
      <div className = "row">
            <form className = "col s6 m12" onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              <div class="row">
                <button class="btn waves-effect waves-light" type="submit" name="action">
                  <i class="material-icons right">SAVE</i>
                </button>
              </div>
            </form>
      </div>
    );
  }
}

export default userExpertise;
