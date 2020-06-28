import React, { Component } from 'react';
import RateSkills from './rating';

import '../../App.css';

const SKILLS = [
  'HTML',
  'CSS',
  'BootStrap',
  'NodeJs',
  'Mongo',
  'React',
  'Express',
  'MySql',
  'jQuery'
];

class userSkills extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
};

continue = e => {
    e.preventDefault();
    this.props.nextStep();
}

  state = {
    Rating: SKILLS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  createRatings = (option, idx) => (
    <RateSkills key={`key-${idx}`} label={option} />
  );

  createRating = () => SKILLS.map(this.createRatings);

  render() {
    return (
      <div className='row'>
      <form onSubmit={this.continue}>

          {this.createRating()}

</form>
      </div>
    );
  }
}
export default userSkills;
