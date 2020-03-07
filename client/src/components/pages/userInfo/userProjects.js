import React, { Component } from 'react';

export default class UserProjects extends Component {
  render() {
    const { projects, onChangeHandler, id } = this.props;
    const { name, description } = projects;
    return (
      <div className="info" id={id}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Project's Name"
            value={name}
            onChange={onChangeHandler('name', 'projects', id)}
            required
          />
        </div>
        <div className="form-group">
          <input
            name="description"
            value={description}
            type="text"
            placeholder="Describe your project work"
            onChange={onChangeHandler('description', 'projects', id)}
            required
          />
        </div>
      </div>
    );
  }
}
