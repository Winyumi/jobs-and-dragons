import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class index extends Component {
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.history.push({ pathname: '/userinfo' });
  };


  render() {
    const { state } = this.props.location;
    console.log(state);
    if (!state) {
      return <Redirect to='/userinfo'></Redirect>;
    }
    return (
      <div className='resume'>
        <div className='page' size='A4'>
          <header>
            <h1 className='name'>{state.name}</h1>
            <p className='email'>{state.email}</p>
            <p className='number'>{state.phone}</p>
            <p className='bio'>{state.bio}</p>
            <div className='links'></div>
          </header>
          <main>
            <div className='exp'>
              <div className='wrapper'>
                <h2>Experience</h2>
                <div className='border'></div>
                {state.experience.map((exp, i) => (
                  <React.Fragment key={i}>
                    <div>
                      <p className='company-name'>
                        {exp.name}| <span>{exp.designation}</span>
                      </p>
                      <div className='dates'>
                        From<span className='from'>{exp.start}</span>
                        To<span className='to'>{exp.end}</span>
                      </div>
                      <div className='description'>
                        <ul>
                          {exp.description.split(',').map(desc => (
                            <li>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className='education'>
              <div className='wrapper'>
                <h2>Education</h2>
                <div className='border'></div>
                {state.education.map((edu, i) => (
                  <React.Fragment key={i}>
                    <div>
                      <p className='college-name'>
                        {edu.degree.toUpperCase()}|<span>{edu.from}</span>
                      </p>
                      <div className='dates'>
                        From<span className='from'>{edu.start}</span>
                        To<span className='to'>{edu.end}</span>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className='education'>
              <div className='wrapper'>
                <h2>Projects</h2>
                <div className='border'></div>
                {state.projects.map((project, i) => (
                  <React.Fragment key={i}>
                    <div>
                      <p className='college-name'>
                        {project.name} -{' '}
                        <span className='project-des'>
                          {project.description}
                        </span>
                      </p>
                    </div>
                    <button
                      
                      className='back btn-floating btn-medium blue'
                      onClick={this.onSubmitHandler}>
                      <i class="small material-icons">edit</i>
                      </button>
                      
                  </React.Fragment>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
