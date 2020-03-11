import React from "react";
import 'materialize-css';

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="col s4">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected === true}
        onChange={onCheckboxChange}
        className="filled-in"
      />
      <span></span>
      {label}
    </label>
  </div>
);

export default Checkbox;