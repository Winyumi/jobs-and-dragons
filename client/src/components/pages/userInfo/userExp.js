import React, { Component } from 'react';

export default class UserExp extends Component {
  render() {
    const { experience, onChangeHandler, id } = this.props;
    const { name, start, end, description, designation } = experience;
    return (
      <div className="info" id={id}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={name}
            onChange={onChangeHandler('name', 'experience', id)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            onChange={onChangeHandler('description', 'experience', id)}
            value={description}
            placeholder="What you have done in your compayy ? (Provide answer in list)"
            rows="10"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            name="designation"
            value={designation}
            type="text"
            placeholder="Designation"
            onChange={onChangeHandler('designation', 'experience', id)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="start">Start Date</label>
          <input
            type="date"
            name="start"
            value={start}
            onChange={onChangeHandler('start', 'experience', id)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="end">End Date</label>
          <input
            type="date"
            name="end"
            value={end}
            onChange={onChangeHandler('end', 'experience', id)}
            
          />
        </div>
      </div>
    );
  }
}
