<<<<<<< HEAD
import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import Home from "./HomePage";
import { Link } from "react-router-dom";

export default class index extends Component {
  state = {
    receiver: "Receiver ",
    receiverCompany: "Company",
    position: "Your Position",
    sender: "Sender",
    address: "Sender Address",
    phone: "+44 7777 777 777",
    email: "test@test.com",
    intro: "intro",
    body: "body",
    close: "close",
=======
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
>>>>>>> 7049b9b3e5497c3d606b6a6a89dfbcf7c1434ec1
  };

  submitButton = () => (
    <div>
      <ReactToPrint
        trigger={() => (
<<<<<<< HEAD
          <a style={{ fontFamily: "Alagard" }} href="#">
            Print<i class="material-icons right">print</i>
=======
          <a style={{ fontFamily: 'Alagard' }} href='#'>
            Print<i class='material-icons right'>print</i>
>>>>>>> 7049b9b3e5497c3d606b6a6a89dfbcf7c1434ec1
          </a>
        )}
        content={() => this.componentRef}
      />
<<<<<<< HEAD
      <div className="home-hidden">
=======
      <div className='home-hidden'>
>>>>>>> 7049b9b3e5497c3d606b6a6a89dfbcf7c1434ec1
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
<<<<<<< HEAD
        <div className="logContainer">
=======
        <div className='logContainer'>
>>>>>>> 7049b9b3e5497c3d606b6a6a89dfbcf7c1434ec1
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
<<<<<<< HEAD
              placeholder="Position applied for"
=======
              placeholder='Position applied for'
>>>>>>> 7049b9b3e5497c3d606b6a6a89dfbcf7c1434ec1
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
<<<<<<< HEAD
              type="email"
=======
              type='email'
>>>>>>> 7049b9b3e5497c3d606b6a6a89dfbcf7c1434ec1
              placeholder="Sender's Email"
              onBlur={(element) =>
                this.setState({
                  email: element.target.value,
                })
              }
            />
            <p>Intro</p>
            <textarea
<<<<<<< HEAD
              placeholder="This is your opportunity to introduce yourself and includes why you are writing to them"
=======
              placeholder='This is your opportunity to introduce yourself and includes why you are writing to them'
>>>>>>> 7049b9b3e5497c3d606b6a6a89dfbcf7c1434ec1
              onBlur={(element) =>
                this.setState({
                  intro: element.target.value,
                })
              }
            />
            <p>Body</p>
            <textarea
<<<<<<< HEAD
              placeholder="Discuss your relevant qualifications according to the job description"
=======
              placeholder='Discuss your relevant qualifications according to the job description'
>>>>>>> 7049b9b3e5497c3d606b6a6a89dfbcf7c1434ec1
              onBlur={(element) =>
                this.setState({
                  body: element.target.value,
                })
              }
            />
            <p>Close</p>
            <textarea
<<<<<<< HEAD
              placeholder="Thank the recipient and provide contact information and follow-up details"
=======
              placeholder='Thank the recipient and provide contact information and follow-up details'
>>>>>>> 7049b9b3e5497c3d606b6a6a89dfbcf7c1434ec1
              onBlur={(element) =>
                this.setState({
                  close: element.target.value,
                })
              }
            />
<<<<<<< HEAD
            <button className="print waves-effect waves-light btn">
=======
            <button className='print waves-effect waves-light btn'>
>>>>>>> 7049b9b3e5497c3d606b6a6a89dfbcf7c1434ec1
              {this.submitButton()}
            </button>
          </form>
        </div>
<<<<<<< HEAD
        <Link to="/joblisting/saved" target="_blank">
          <div>
            <button
              className="info btn-floating btn-medium black"
              //onClick={this.onSubmitHandler}
            >
              <i class="small material-icons">visibility</i>
=======
        <Link to='/joblisting/saved' target='_blank'>
          <div>
            <button
              className='info-visible btn-floating btn-medium black'
              //onClick={this.onSubmitHandler}
            >
              <i class='small material-icons'>visibility</i>
>>>>>>> 7049b9b3e5497c3d606b6a6a89dfbcf7c1434ec1
            </button>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}
