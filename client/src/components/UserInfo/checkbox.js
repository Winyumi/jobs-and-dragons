import React from "react";
import 'materialize-css';

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="col s6">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected === true}
        onChange={onCheckboxChange}
        className="indeterminate-checkbox"
       
      />
      <span>{label}</span>
    </label>
  </div>
);

export default Checkbox;