import React, { Component } from 'react';

export default class UserEducation extends Component {
  render() {
    const { education, onChangeHanlder, id } = this.props;
    const { degree, from, start, end } = education;

    return (
      <div className="info" id={id}>
        <div className="form-group">
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={degree}
            onChange={onChangeHanlder('degree', 'education', id)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="from"
            placeholder="College or Univeristy Name"
            value={from}
            onChange={onChangeHanlder('from', 'education', id)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="start">Start Date</label>
          <input
            type="date"
            name="start"
            value={start}
            onChange={onChangeHanlder('start', 'education', id)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="end">End Date</label>
          <input
            type="date"
            name="end"
            value={end}
            onChange={onChangeHanlder('end', 'education', id)}
            required
          />
        </div>
      </div>
    );
  }
}
