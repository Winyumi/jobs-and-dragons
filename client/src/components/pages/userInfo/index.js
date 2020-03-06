import React, { Component } from 'react';
import UserDetail from './userDetail';
import UserEducation from './userEducation';
import UserExp from './userExp';
import UserProjects from './userProjects';

export default class index extends Component {
  state = {
    name: '',
    email: '',
    bio: '',
    phone: '',
    education: [],
    experience: [],
    projects: []
  };
  componentDidMount() {
    if (localStorage.getItem('data')) {
      this.setState(JSON.parse(localStorage.getItem('data')))
    }
  }
  onChangeHanlder = (name, from, id) => e => {
    let value = e.target.value;
    let newState = { ...this.state };
    if (name && from && id !== undefined) {
      newState[from][id][name] = value;
    } else if (name) {
      newState[name] = value;
    }
    this.setState(newState);
  };
  addMoreFormGrp = grp => e => {
    e.preventDefault();
    let newState = { ...this.state };
    if (grp === 'education') {
      newState[grp].push({
        degree: '',
        from: '',
        start: '',
        end: ''
      });
    } else if (grp === 'experience') {
      newState[grp].push({
        name: '',
        start: '',
        end: '',
        description: ''
      });
    } else if (grp === 'projects') {
      newState[grp].push({
        name: '',
        description: ''
      });
    }
    this.setState(newState);
  };
  removeFormGrp = (grp, id) => e => {
    e.preventDefault();
    let newState = { ...this.state };
    if (grp && id !== undefined) {
      newState[grp].splice(id, 1);
    }
    this.setState(newState);
  };

//   onSubmitHandler = e => {
//     e.preventDefault();
//     localStorage.setItem('data', JSON.stringify(this.state));
//     this.props.history.push({ pathname: '/resume', state: this.state });
//   };

  render() {
    const values = { ...this.state };
    const { education, experience, projects } = this.state;
    return (
      <form onSubmit={this.onSubmitHandler}>
        <section id="user-info">
          <UserDetail onChangeHanlder={this.onChangeHanlder} values={values} />
        </section>
        <section id="education">
          <div className="util">
            <h2>Education</h2>
            <button onClick={this.addMoreFormGrp('education')}>
              +
            </button>
          </div>
          {education.map((formValue, i) => (
            <div key={i}>
              <button
                onClick={this.removeFormGrp('education', i)}
                className="remove-btn"
              >
                Remove
            </button>
              <UserEducation
                values={values}
                onChangeHanlder={this.onChangeHanlder}
                id={i}
                education={formValue}
              />
            </div>
          ))}
        </section>
        <section id="exp">
          <div className="util">
            <h2>Experience</h2>
            <button onClick={this.addMoreFormGrp('experience')}>+</button>
          </div>
          {experience.map((formValue, i) => (
            <div key={i}>
              <button
                onClick={this.removeFormGrp('experience', i)}
                className="remove-btn"
              >
                Remove
            </button>
              <UserExp
                values={values}
                onChangeHanlder={this.onChangeHanlder}
                id={i}
                experience={formValue}
              />
            </div>
          ))}
        </section>
        <section id="projects">
          <div className="util">
            <h2>Projects</h2>
            <button onClick={this.addMoreFormGrp('projects')}>+</button>
          </div>
          {projects.map((formValue, i) => (
            <div key={i}>
              <button
                onClick={this.removeFormGrp('projects', i)}
                className="remove-btn"
              >
                Remove
              </button>
              <UserProjects
                values={values}
                onChangeHanlder={this.onChangeHanlder}
                id={i}
                projects={formValue}
              />
            </div>
          ))}
        </section>
        <input type="submit" value="SAVE" />
      </form>
    );
  }
}
