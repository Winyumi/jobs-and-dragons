import React, { Component } from 'react';
import UserDetail from './userDetail';
import UserEducation from './userEducation';
import UserExp from './userExp';
import UserProjects from './userProjects';
import UserExpertise from './userExpertise';
import StarRatings from 'react-star-ratings';
import UserSkills from './userSkills';


export default class index extends Component {
  state = {
    name: '',
    email: '',
    bio: '',
    phone: '',
    education: [],
    experience: [],
    expertise: [],
    projects: []
  };
  componentDidMount() {
    if (localStorage.getItem('data')) {
      this.setState(JSON.parse(localStorage.getItem('data')));
    }
  }

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state));
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
  
  onSubmitHandler = e => {
    e.preventDefault();
   
    let userInfo = {
      name: this.state.name,
      bio:this.state.bio,
      phone:this.state.phone,
      education:this.state.education,
      experience:this.state.experience,
      expertise: this.state.expertise,
      descripiton:this.state.description,
      designation:this.state.designation
    };
    async function getUserInfo(userEmail) {

      const res = await fetch(`/api/v1/users/email/${userEmail}`);
  
      const jsonRes = await res.json();

      return jsonRes;
    }
  
    async function updateUserInfo(data, email){
      const res= fetch(`/api/v1/users/email/${email}`,{
        method:'PUT',
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (res.ok) {
      return res.data;
      }
    }
     async function addUserInfo(userInfo) {
      //check if user exisits 
      const res = await fetch('/api/v1/users', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
        });
      if (res.ok) {
        const jsonRes = await res.json();
        console.log(jsonRes);
        return jsonRes.data;
      }
  };
  
  getUserInfo(this.state.email).then(result =>{
    if(result.data.email === this.state.email){
      updateUserInfo(userInfo, result.data.email)
    }else{addUserInfo(userInfo);}
  })
  
  this.props.history.push({ pathname: '/resume', state: this.state });
};



  

  handleExpertiseSubmit = expertise => {
    this.setState(prevState => ({
      expertise: [...prevState.expertise, ...expertise]
    }));
  };

  render() {
    const values = { ...this.state };
    const { education, experience, projects } = this.state;
    return (
      <form onSubmit={this.onSubmitHandler}>
        <section id='user-info'>
          <UserDetail onChangeHandler={this.onChangeHandler} values={values} />
        </section>
        <section id='education'>
          <div className='util'>
            <h4>Education</h4>
            <button
              onClick={this.addMoreFormGrp('education')}
              className='btn-floating btn-medium waves-effect waves-light'
            >
              +
            </button>
          </div>
          {education.map((formValue, i) => (
            <div key={i}>
              <button
                onClick={this.removeFormGrp('education', i)}
                className='remove-btn'
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
        <section id='exp'>
          <div className='util'>
            <h4>Experience</h4>
            <button
              onClick={this.addMoreFormGrp('experience')}
              className='btn-floating btn-medium waves-effect waves-light'
            >
              +
            </button>
          </div>
          {experience.map((formValue, i) => (
            <div key={i}>
              <button
                onClick={this.removeFormGrp('experience', i)}
                className='remove-btn'
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

        <section id='expertise'>
          <div className='util'>
            <h4>Expertise</h4>
          </div>
          <div>
            <h3>What is your area of interest?</h3>
          </div>
          <UserExpertise handleFormSubmit={this.handleExpertiseSubmit} />
        </section>

        <section id='skills'>
          <div className='util'>
            <h4>Skills</h4>
          </div>
          <div>
            <h3>
              Select your proficiency level to add a skill to your profile.{' '}
            </h3>
          </div>
          <div>
            <ul>
              <li className='divider' tabIndex='-1'></li>
              <li>
                Beginner:{' '}
                <StarRatings
                  starDimension='20px'
                  starSpacing='3px'
                  rating={1}
                  numberOfStars={4}
                  disabled
                />
              </li>
              <li className='divider' tabIndex='-1'></li>
              <li>
                Intermediate:{' '}
                <StarRatings
                  starDimension='20px'
                  starSpacing='3px'
                  rating={2}
                  numberOfStars={4}
                  disabled
                />
              </li>
              <li className='divider' tabIndex='-1'></li>
              <li>
                Advanced:{' '}
                <StarRatings
                  starDimension='20px'
                  starSpacing='3px'
                  rating={3}
                  numberOfStars={4}
                  disabled
                />
              </li>
              <li className='divider' tabIndex='-1'></li>
              <li>
                Expert:{' '}
                <StarRatings
                  starDimension='20px'
                  starSpacing='3px'
                  rating={4}
                  numberOfStars={4}
                  disabled
                />
              </li>
            </ul>
          </div>
          <UserSkills />
        </section>

        <section id='projects'>
          <div className='util'>
            <h4>Projects</h4>
            <button
              onClick={this.addMoreFormGrp('projects')}
              className='btn-floating btn-medium waves-effect waves-light'
            >
              +
            </button>
          </div>
          {projects.map((formValue, i) => (
            <div key={i}>
              <button
                onClick={this.removeFormGrp('projects', i)}
                className='remove-btn'
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
        <button
          type='submit'
          value='SUBMIT'
          className='submit remove-btn btn-large center'
        >
          Submit
          <i class='material-icons right'>send</i>
        </button>
      </form>
    );
  }
}
