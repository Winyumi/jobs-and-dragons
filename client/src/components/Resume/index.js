import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PDFExport } from '@progress/kendo-react-pdf';

import { Button } from 'react-materialize';

export default class index extends Component {
  state = {
    ...this.props.location.state,
  };

  updateUserInfo = async (data, email) => {
    const res = fetch(`/api/v1/users/email/${email}`, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      return res.data;
    }
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.history.push({ pathname: '/userinfo' });
  };
  exportToPDF = () => {
    this.exportContents.save();
  };

  handleComplete = () => {
    const data = {
      inventory: {
        scroll: true,
      },
    };
    this.updateUserInfo(data, this.state.email).then((res) => {
      this.props.history.push({ pathname: '/profile', state: res });
    });
  };

  render() {
    // const { state } = this.props.location;
    if (!this.state) {
      return <Redirect to='/userinfo'></Redirect>;
    }
    return (
      <React.Fragment>
        <PDFExport
          ref={(contents) => (this.exportContents = contents)}
          paperSize='A4'
        >
          <div className='resume'>
            <div className='page' size='A4'>
              <header>
                <h1 className='name'>{this.state.name}</h1>
                <p className='email'>{this.state.email}</p>
                <p className='number'>{this.state.phone}</p>
                <p className='bio'>{this.state.bio}</p>
                <div className='links'></div>
              </header>
              <main>
                <div className='exp'>
                  <div className='wrapper'>
                    <h2>Experience</h2>
                    <div className='border'></div>
                    {this.state.experience && this.state.experience.length > 0
                      ? this.state.experience.map((exp, i) => (
                          <React.Fragment key={i}>
                            <div>
                              <p className='company-name'>
                                {exp.name} | <span>{exp.designation}</span>
                              </p>
                              <div className='dates'>
                                <p>
                                  From<span className='from'>{exp.start}</span>
                                </p>
                                <p>
                                  To<span className='to'>{exp.end}</span>
                                </p>
                              </div>
                              <div className='description'>
                                <ul>
                                  {exp.description.split(',').map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </React.Fragment>
                        ))
                      : null}
                  </div>
                </div>
                <div className='education'>
                  <div className='wrapper'>
                    <h2>Education</h2>
                    <div className='border'></div>
                    {this.state.education && this.state.education.length > 0
                      ? this.state.education.map((edu, i) => (
                          <React.Fragment key={i}>
                            <div>
                              <p className='college-name'>
                                {edu.degree} | <span>{edu.from}</span>
                              </p>
                              <div className='dates'>
                                <p>
                                  From<span className='from'>{edu.start}</span>
                                </p>
                                <p>
                                  To<span className='to'>{edu.end}</span>
                                </p>
                              </div>
                            </div>
                          </React.Fragment>
                        ))
                      : null}
                  </div>
                </div>
                <div className='education'>
                  <div className='wrapper'>
                    <h2>Projects</h2>
                    <div className='border'></div>
                    {this.state.projects && this.state.projects.length > 0
                      ? this.state.projects.map((project, i) => (
                          <React.Fragment key={i}>
                            <div>
                              <p className='college-name'>
                                {project.name} -{' '}
                                <span className='project-des'>
                                  {project.description}
                                </span>
                              </p>
                            </div>
                          </React.Fragment>
                        ))
                      : null}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </PDFExport>
        <div>
          <Button
            className='back btn-floating btn-medium red darken-4 tooltipped'
            tooltip='Edit'
            tooltipOptions={{
              position: 'left',
            }}
            onClick={this.onSubmitHandler}
          >
            <i className='small material-icons'>edit</i>
          </Button>
          <Button
            onClick={this.exportToPDF}
            className='download btn-floating btn-medium red darken-4 tooltipped'
            tooltip='Download PDF'
            tooltipOptions={{
              position: 'left',
            }}
          >
            <i className='small material-icons'>file_download</i>
          </Button>
          <Button
            onClick={this.handleComplete}
            className='complete btn-floating btn-medium red darken-4 tooltipped'
            tooltip='Back to Dashboard'
            tooltipOptions={{
              position: 'left',
            }}
          >
            <i className='small material-icons'>flash_on</i>
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
