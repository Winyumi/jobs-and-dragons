import React, { Component } from 'react';

export default class UserDetail extends Component {


continue = e => {
    e.preventDefault();
    this.props.nextStep();
}

  render() {
    const { values, onChangeHandler } = this.props;
    const { name, email, bio, phone } = values;
    return (
      <div className='info'>
        <h3>Info</h3>
        <form onSubmit={this.continue}>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={name}
            onChange={onChangeHandler('name')}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={email}
            onChange={onChangeHandler('email')}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='bio'
            value={bio}
            placeholder='Tell me about your self'
            onChange={onChangeHandler('bio')}
          />
        </div>
        <div className='form-group'>
          <input
            type='number'
            name='phone'
            value={phone}
            placeholder='Your Number'
            onChange={onChangeHandler('phone')}
            required
          />
        </div>
        <div className="container text-center">
        <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>
    </div>
</form>
      </div>
    );
  }
}
