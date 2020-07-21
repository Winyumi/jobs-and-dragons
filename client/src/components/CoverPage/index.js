import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import ReactPDF, {
  Document,
  Page,
} from '@react-pdf/renderer';
// import CoverLetter from './HomePage';
import Auth0Context from '../../react-auth0-spa';
import { Link } from 'react-router-dom';

import { Row, Col } from 'react-materialize';

export default class Index extends Component {
  state = {
    receiver: 'Receiver ',
    receiverCompany: 'Company',
    position: 'Your Position',
    sender: 'Sender',
    address: 'Sender Address',
    phone: '+44 7777 777 777',
    email: 'test@test.com',
    intro: 'intro',
    body: 'body',
    close: 'close',
  };

  static contextType = Auth0Context;

  saveButton = () => {
    const userEmail = this.context.user.email;
    let coverPageInfo = {
      receiver: this.state.receiver,
      receiverCompany: this.state.receiverCompany,
      position: this.state.position,
      sender: this.state.sender,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
      intro: this.state.intro,
      body: this.state.body,
      close: this.state.close,
    };
    async function quest3comp(data, email) {
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
    }

    async function coverPageSave(data, email) {
      const res = fetch(`/api/v1/users/emailCP/${email}`, {
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
    }
    quest3comp(
      {
        progressTracker: {
          quest1: true,
          quest2: true,
          quest3: true,
        },
      },
      userEmail
    );

    coverPageSave(coverPageInfo, userEmail);
  };

  submitButton = () => {
    const props = this.props;
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const today = new Date();

    const CoverLetter = (
      <Document className="cpsummary">
        <Page size="A4">
          <header>
            <h4>{props.sender} | {props.position}</h4>
          </header>
          <div className="page" style={{ fontSize: '12px' }}>
            <div>
              <p>{monthNames[today.getMonth()]} {today.getDate()}, {today.getFullYear()}</p>
              <p style={{ color: '#ff3333' }}>To</p>
              <p>{props.receiver}</p>
              <p>{props.receiverCompany}</p>
            </div>
            <div>
              <p><span style={{ color: '#ff3333', fontSize: '12px' }}>From: </span> {props.sender}</p>
              <p><span style={{ color: '#ff3333', fontSize: '12px' }}>Address: </span> {props.address}</p>
              <p><span style={{ color: '#ff3333', fontSize: '12px' }}>Phone: </span> {props.phone}</p>
              <p><span style={{ color: '#ff3333', fontSize: '12px' }}>E-mail: </span> {props.email}</p>
            </div>
            <div>
              <p style={{ marginTop: '25px' }}>Hi {props.receiver},</p>
              <p style={{ fontSize: '12px' }}>{props.intro}</p>
              <p style={{ fontSize: '12px' }}>{props.body}</p>
              <p style={{ fontSize: '12px' }}>{props.close}</p>
              <p style={{ marginTop: '25px' }}>Sincerely,</p>
              <p>{props.sender}</p>
            </div>
          </div>
        </Page>
      </Document >
    )

    ReactPDF.render(<CoverLetter />, `${__dirname}/${props.sender}CoverLetter.pdf`);
  }


  // (
  //   <div>
  //     <ReactToPrint
  //       trigger={() => (
  //         <a style={{ fontFamily: 'Alagard', color: 'white' }} href='!#'>
  //           Print<i className='material-icons right'>print</i>
  //         </a>
  //       )}
  //       content={() => this.componentRef}
  //     />
  //     <div className='home-hidden'>
  //       <Home
  //         ref={(el) => (this.componentRef = el)}
  //         receiver={this.state.receiver}
  //         receiverCompany={this.state.receiverCompany}
  //         position={this.state.position}
  //         sender={this.state.sender}
  //         address={this.state.address}
  //         phone={this.state.phone}
  //         email={this.state.email}
  //         intro={this.state.intro}
  //         body={this.state.body}
  //         close={this.state.close}
  //       />
  //     </div>
  //   </div>
  // );

  onSubmitHandler = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className='' s={2}>
            <Link 

              to='/joblisting/saved'>
              <button
                className='gotosaved btn btn-large red darken-4'

              > Go to Saved  Jobs
              </button>
            </Link>
            <Link to='/userinfo'>
              <button
                className='gotoresume btn btn-large red darken-4'
              >Resume Builder
            </button>
            </Link>
          </Col>

          <Col className='' s={10}>
            <div className='logContainer'>
              <form>
                <h2>Cover Letter Generator</h2>
                <p>Receiver</p>
                <input
                  placeholder="Receiver's Name"
                  onBlur={(element) =>
                    this.setState({
                      receiver: element.target.value,
                    })
                  }
                />
                <p>Company</p>
                <input
                  placeholder="Receiver's Company"
                  onBlur={(element) =>
                    this.setState({
                      receiverCompany: element.target.value,
                    })
                  }
                />
                <p>Position</p>
                <input
                  placeholder='Position applied for'
                  onBlur={(element) =>
                    this.setState({
                      position: element.target.value,
                    })
                  }
                />
                <p>Sender</p>
                <input
                  placeholder="Sender's Name"
                  onBlur={(element) =>
                    this.setState({
                      sender: element.target.value,
                    })
                  }
                />
                <p>Address</p>
                <input
                  placeholder="Sender's Address"
                  onBlur={(element) =>
                    this.setState({
                      address: element.target.value,
                    })
                  }
                />
                <p>Phone</p>
                <input
                  placeholder="Sender's Phone"
                  onBlur={(element) =>
                    this.setState({
                      phone: element.target.value,
                    })
                  }
                />
                <p>Email</p>
                <input
                  type='email'
                  placeholder="Sender's Email"
                  onBlur={(element) =>
                    this.setState({
                      email: element.target.value,
                    })
                  }
                />
                <p>Intro</p>
                <textarea
                  placeholder='This is your opportunity to introduce yourself and includes why you are writing to them'
                  onBlur={(element) =>
                    this.setState({
                      intro: element.target.value,
                    })
                  }
                />
                <p>Body</p>
                <textarea
                  placeholder='Discuss your relevant qualifications according to the job description'
                  onBlur={(element) =>
                    this.setState({
                      body: element.target.value,
                    })
                  }
                />
                <p>Close</p>
                <textarea
                  placeholder='Thank the recipient and provide contact information and follow-up details'
                  onBlur={(element) =>
                    this.setState({
                      close: element.target.value,
                    })
                  }
                />
                <button className='print btn btn-large red darken-4'>
                  {this.submitButton()}
                </button>

                <button
                  onClick={this.saveButton}
                  className='btn btn-large red darken-4'
                >
                  <a style={{ fontFamily: 'Alagard', color: 'white' }} href='#!'>
                    Save
                </a>
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}


