/* eslint-disable default-case */
import React, { Component } from 'react';
import UserDetail from './userDetail';
import UserEducation from './userEducation';
import UserExp from './userExp';
import UserProjects from './userProjects';
import UserExpertise from './userExpertise';
import StarRatings from 'react-star-ratings';
import UserSkills from './userSkills';


export default class userForm extends Component {
state = {
          step:1,  
          name: '',
          email: '',
          bio: '',
          phone: '',
          education: [],
          experience: [],
          expertise: [],
          projects: [],
          status:0
        };
      

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    submitted = () => {
        const { status } = this.state;
        this.setState({
            status: status + 1
        });
    }
    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });

    onChangeHandler = (name, from, id) => (e) => {
        let value = e.target.value;
        let newState = { ...this.state };
        if (name && from && id !== undefined) {
          newState[from][id][name] = value;
        } else if (name) {
          newState[name] = value;
        }
        this.setState(newState);
      };

      addMoreFormGrp = (grp) => (e) => {
        e.preventDefault();
        let newState = { ...this.state };
        if (grp === 'education') {
          newState[grp].push({
            degree: '',
            from: '',
            start: '',
            end: '',
          });
        } else if (grp === 'experience') {
          newState[grp].push({
            name: '',
            start: '',
            end: '',
            description: '',
          });
        } else if (grp === 'projects') {
          newState[grp].push({
            name: '',
            description: '',
          });
        }
        this.setState(newState);
      };
      removeFormGrp = (grp, id) => (e) => {
        e.preventDefault();
        let newState = { ...this.state };
        if (grp && id !== undefined) {
          newState[grp].splice(id, 1);
        }
        this.setState(newState);
      };
    render() {
        const { step } = this.state;
        const values = { ...this.state };
        const { education, experience, expertise, projects } = this.state;
        switch (step) {
            case 1:
                return (
                    <div className="App pt-5 mt-5">
                        <div id='user-info'>

                        <UserDetail onChangeHandler={this.onChangeHandler} nextStep={this.nextStep} values={values} />

                        </div>
                        <br />
                    </div>
                );

            case 2:

                return (
                    <div id='education'>
                    <div className='util'>
                      <h4>Education</h4>

                      
                    </div>
                    <UserEducation
                          values={values}
                          onChangeHandler={this.onChangeHandler}
                          />
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
                    <button
                    onClick={this.addMoreFormGrp('education')}
                    className='btn-floating btn-medium waves-effect waves-light'
                  >
                    +
                  </button>
                    <br />
                    </div>
                );

            case 3:

                return (
                    <div id='exp'>
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
                          prevStep={this.prevStep}
                          nextStep={this.nextStep}
                        />
                      </div>
                    ))}
                    <br />
                  </div>
                );

            case 4:

                return (
                    <div id='expertise'>
          <div className='util'>
            <h4>Expertise</h4>
          </div>
          <div>
            <h5>What is your area of interest?</h5>
          </div>
          <UserExpertise
            handleFormSubmit={this.handleExpertiseSubmit}
            expertise={expertise}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
          />
          <br />
        </div>
                );


            case 5:

                return (
                    <div id='skills'>
                    <div className='util'>
                      <h4>Skills</h4>
                    </div>
                    <div>
                      <h5>
                        Select your proficiency level to add a skill to your profile.{' '}
                      </h5>
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
                    <UserSkills 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    />
                    <br />
                  </div>
                );
            case 6:
                return(
                    <div id='projects'>
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
                          prevStep={this.prevStep}
                        />
                      </div>
                    ))}
                    <br />
                  </div>

                );    

            // case 7:

            //     return (
            //         <div className="App pt-5 mt-5">
            //             <div className="container col-lg-8 mx-auto text-center">

            //                 <Success />
            //             </div>
            //             <br />
            //         </div>
            //     );

        }

    }
    


}