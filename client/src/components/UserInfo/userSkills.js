import React, { Component } from 'react';

import RateSkills from './rating';

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
          {this.createRating()}
      </div>
    );
  }
}
export default userSkills;
