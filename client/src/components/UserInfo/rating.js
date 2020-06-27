import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import 'materialize-css';

const RateSkills = ({ label }) => {
  const [rating, setRating] = useState(0);
  return (
    <div className='col s4'>
      <div className='card-panel'>
        <span></span>
        {label}
        <div>
          <label>
            <StarRatings
              rating={rating}
              numberOfStars={4}
              name={label}
              changeRating={(newRating, name) => {
                setRating(newRating);
              }}
              starDimension='20px'
              starSpacing='3px'
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default RateSkills;
