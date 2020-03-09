import React, { Component } from 'react';
import UserDetail from './userDetail';
import UserEducation from './userEducation';
import UserExp from './userExp';
import UserProjects from './userProjects';
import UserExpertise from './userExpertise';
import { Rating } from 'semantic-ui-react'
// import App from "./example";



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
  
  onChangeHandler = (name, from, id) => e => {
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
          <UserDetail onChangeHandler={this.onChangeHandler} values={values} />
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
                onChangeHandler={this.onChangeHandler}
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
                onChangeHandler={this.onChangeHandler}
                id={i}
                experience={formValue}
              />
            </div>
          ))}
        </section>



        <section id="expertise">
          <div className="util">
            <h2>Expertise</h2>
          </div>
          <div>
            <p>What is your area of interest?</p>
          </div>      
              <UserExpertise
              />
        </section>

        <section id="skills">
          <div className="util">
            <h2>Skills</h2>
          </div>
          <div>
            <p>Select your proficiency level to add a skill to your profile. </p>
          </div>
          <div>
         <ul>
           
            <li class="divider" tabindex="-1"></li>
            <li>Beginner: <Rating maxRating={4} defaultRating = "1" /></li>
            <li class="divider" tabindex="-1"></li>
            <li>Intermediate: <Rating maxRating={4} clearable = {true} defaultRating = "2" /></li>
            <li class="divider" tabindex="-1"></li>
            <li>Advanced: <Rating maxRating={4} clearable = {false} defaultRating = "3" /></li>
            <li class="divider" tabindex="-1"></li>
            <li>Expert: <Rating maxRating={4} clearable = {false} defaultRating = "4" /></li>
          </ul>
          </div>
          <Rating maxRating={5} clearable = {false} defaultRating = "1" />
        
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
                onChangeHandler={this.onChangeHandler}
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
