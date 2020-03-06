import React, { Component } from 'react';

export default class UserExp extends Component {
  render() {
    const { experience, onChangeHanlder, id } = this.props;
    const { name, start, end, description, designation } = experience;
    return (
      <div className="info" id={id}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={name}
            onChange={onChangeHanlder('name', 'experience', id)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            onChange={onChangeHanlder('description', 'experience', id)}
            value={description}
            placeholder="What you have done in your compnay ? (Provide answer in list)"
            rows="10"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            name="designation"
            value={designation}
            type="text"
            placeholder="Designation"
            onChange={onChangeHanlder('designation', 'experience', id)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="start">Start Date</label>
          <input
            type="date"
            name="start"
            value={start}
            onChange={onChangeHanlder('start', 'experience', id)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="end">End Date</label>
          <input
            type="date"
            name="end"
            value={end}
            onChange={onChangeHanlder('end', 'experience', id)}
            required
          />
        </div>
      </div>
    );
  }
}
