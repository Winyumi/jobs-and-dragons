import React, { Component } from 'react';
import Checkbox from './checkbox';

const EXPERTISE = [
  'Software Engineer',
  'Full Stack developer',
  'Quality Assurance',
  'Database management',
  'DevOps',
  'UI/UX Developer',
  'Front end Developer',
  'Web Services Developer',
  'Web Designer'
];

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

  handleFormSubmit = CheckBoxValue => {
    CheckBoxValue.preventDefault();
    const expertise = Object.keys(this.state.checkboxes).filter(
      checkbox => this.state.checkboxes[checkbox]
    );

    this.props.handleFormSubmit(expertise);
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
      <div className='row'>
        <div className='col'>{this.createCheckboxes()}</div>
        <div>
          <button
            className='btn'
            onClick={e => this.handleFormSubmit(e)}
            name='action'
          >
            <i className='material-icons'>SAVE</i>
          </button>
        </div>
      </div>
    );
  }
}

export default userExpertise;
