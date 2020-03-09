import React, { Component } from 'react';
import UserDetail from './userDetail';
import UserEducation from './userEducation';
import UserExp from './userExp';
import UserProjects from './userProjects';
import UserExpertise from './userExpertise';
import { Rating } from 'semantic-ui-react';
import UserSkills from './userSkills';

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
            <h4>Education</h4>
            <button onClick={this.addMoreFormGrp('education')} className='btn-floating btn-medium waves-effect waves-light red'>
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
            <h4>Experience</h4>
            <button onClick={this.addMoreFormGrp('experience')} className='btn-floating btn-medium waves-effect waves-light red'>
              +
            </button>
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
            <li>Beginner: <Rating maxRating={4} behaviour disabled defaultRating = "1" /></li>
            <li class="divider" tabindex="-1"></li>
            <li>Intermediate: <Rating maxRating={4} behaviour disabled defaultRating = "2" /></li>
            <li class="divider" tabindex="-1"></li>
            <li>Advanced: <Rating maxRating={4} behaviour disabled defaultRating = "3" /></li>
            <li class="divider" tabindex="-1"></li>
            <li>Expert: <Rating maxRating={4} behaviour disabled defaultRating = "4" /></li>
          </ul>
          </div>
          <UserSkills
          />
        </section>


        <section id="projects">
          <div className="util">
            <h4>Projects</h4>
            <button onClick={this.addMoreFormGrp('projects')} className='btn-floating btn-medium waves-effect waves-light red'>+</button>
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
        <input type="submit" value="SUBMIT" className="btn waves-effect waves-light" />
      </form>
    );
  }
}
