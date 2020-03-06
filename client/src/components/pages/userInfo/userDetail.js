import React, { Component } from 'react';

export default class UserDetail extends Component {
  render() {
    const { values, onChangeHanlder } = this.props;
    const { name, email, bio, phone } = values;
    return (
      <div className="info">
        <h2>Info</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={onChangeHanlder('name')}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={onChangeHanlder('email')}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="bio"
            value={bio}
            placeholder="Tell me about your self"
            onChange={onChangeHanlder('bio')}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="phone"
            value={phone}
            placeholder="Your Number"
            onChange={onChangeHanlder('phone')}
            required
          />
        </div>
      </div>
    );
  }
}
