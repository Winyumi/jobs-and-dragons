import React from "react";
import { Rating } from 'semantic-ui-react';

const RateSkills = ({label}) => (
  <div className="col s4"> 
  <div  class="card-panel #ef5350 red lighten-2">
     <span></span>
      {label}
  <div>
    <label>
      <Rating maxRating={5}
      name={label}/>
    </label>
    </div>
    </div>
  </div>
  
);

export default RateSkills;