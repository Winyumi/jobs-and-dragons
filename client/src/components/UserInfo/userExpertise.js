import React, { Component } from 'react';
import Checkbox from './checkbox';

import '../../App.css';

const EXPERTISE = [
  'Software Engineer',
  'Full Stack developer',
  'Quality Assurance',
  'Database Management',
  'DevOps',
  'UI/UX Developer',
  'Front End Developer',
  'Web Services Developer',
  'Web Designer',
  'Software Support Engineer',
];

class userExpertise extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
};

continue = e => {
    e.preventDefault();
    this.props.nextStep();
}

  state = {
    checkboxes: EXPERTISE.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
  };

  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;
    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  handleFormSubmit = (CheckBoxValue) => {
    CheckBoxValue.preventDefault();
    const expertise = Object.keys(this.state.checkboxes).filter(
      (checkbox) => this.state.checkboxes[checkbox]
    );

    this.props.handleFormSubmit(expertise);
  };

  createCheckbox = (option) => (
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
      <div className='row'>
      <form onSubmit={this.continue}>
        <div className='col'>{this.createCheckboxes()}</div>
        <div>
          <button
            className='btn'
            onClick={(e) => this.handleFormSubmit(e)}
            name='action'
          >
            Save
            <i className='material-icons right'>check</i>
          </button>
        </div>
        <div className="container text-center">
        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
        <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>
    </div>
    </form>
      </div>
    );
  }
}

export default userExpertise;
