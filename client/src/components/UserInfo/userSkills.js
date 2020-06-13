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
          <div className="container text-center">
          <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
          <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>
      </div>
</form>
      </div>
    );
  }
}
export default userSkills;
