import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import Home from './HomePage';
import Auth0Context from '../../react-auth0-spa';
import { Link } from 'react-router-dom';

export default class index extends Component {
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
  submitButton = () => (
    <div>
      <ReactToPrint
        trigger={() => (
          <a style={{ fontFamily: 'Alagard' }} href='#'>
            Print<i className='material-icons right'>print</i>
          </a>
        )}
        content={() => this.componentRef}
      />
      <div className='home-hidden'>
        <Home
          ref={(el) => (this.componentRef = el)}
          receiver={this.state.receiver}
          receiverCompany={this.state.receiverCompany}
          position={this.state.position}
          sender={this.state.sender}
          address={this.state.address}
          phone={this.state.phone}
          email={this.state.email}
          intro={this.state.intro}
          body={this.state.body}
          close={this.state.close}
        />
      </div>
    </div>
  );

     onSubmitHandler = (e) => {
    e.preventDefault();
    
  } 

  render() {
    return (
      <React.Fragment>
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
            <button className='print waves-effect waves-light btn'>
              {this.submitButton()}
            </button>
            <button
              onClick={this.saveButton}
              className='waves-effect waves-light btn'
            >
              <a style={{ fontFamily: 'Alagard' }} href='#'>
                Save
              </a>
            </button></form>
            <Link to ='/joblisting/saved' target="_blank" >
              <button
                className='gotosaved waves-effect waves-light btn'  
              > Go to Saved  Jobs   
            </button>
            </Link>
            <Link to ='/userinfo' target="_blank" >
            <button
              className='gotoresume waves-effect waves-light btn'
            >Resume Builder
          </button>
          </Link>

          
        
</div>
      </React.Fragment>
    );
  }
}
