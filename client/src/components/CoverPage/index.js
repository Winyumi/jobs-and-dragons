import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import Home from './HomePage';
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

  submitButton = () => (
    <div>
      <ReactToPrint
        trigger={() => (
          <a style={{ fontFamily: 'Alagard' }} href='#'>
            Print<i class='material-icons right'>print</i>
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

  /*   onSubmitHandler = (e) => {
    e.preventDefault();
    <Link to ='/joblisting/saved' target="_blank" />
  } */

  render() {
    console.log(this.state);
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
          </form>
        </div>
        <Link to='/joblisting/saved' target='_blank'>
          <div>
            <button
              className='info-visible btn-floating btn-medium black'
              //onClick={this.onSubmitHandler}
            >
              <i class='small material-icons'>visibility</i>
            </button>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}
