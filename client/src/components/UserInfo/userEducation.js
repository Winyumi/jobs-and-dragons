import React, { Component } from 'react';

export default class UserEducation extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
};

continue = e => {
    e.preventDefault();
    this.props.nextStep();
}

  render() {
    const { education, onChangeHandler, id } = this.props;
    const { degree, from, start, end } = education;

    return (
      <div className='info' id={id}>
      <form onSubmit={this.continue}>
        <div className='form-group'>
          <input
            type='text'
            name='degree'
            placeholder='Degree'
            value={degree}
            onChange={onChangeHandler('degree', 'education', id)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='from'
            placeholder='College or Univeristy Name'
            value={from}
            onChange={onChangeHandler('from', 'education', id)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='start'>Start Date</label>
          <input
            type='date'
            name='start'
            value={start}
            onChange={onChangeHandler('start', 'education', id)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='end'>End Date</label>
          <input
            type='date'
            name='end'
            value={end}
            onChange={onChangeHandler('end', 'education', id)}
          />
        </div>
        <div className="container text-center">
        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
        <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>
    </div>
    </form>
      </div>
    );
  }
}
