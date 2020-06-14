import React, { Component } from 'react';
import { bounce } from 'react-animations';
import styled, { keyframes } from "styled-components";


const Bounce = styled.div`animation: 2s ${keyframes`${bounce}` } infinite`;

export default class Success extends Component {
    
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.histrory.push({ pathname: "profile" });
  };
  
    render() {

    
    return (
      <div className="card">
        <div className="card-body"><br/><br/>
           <Bounce><h4><i className='material-icons right'>mood</i>Resume is Downloaded!<br/><br/><br/>Please check your Downloads Folders</h4></Bounce><br/><br/>
        </div>  
        <br/>
        <br/>
        <button type="button" className="btn waves-effect waves-light" onClick={this.onSubmitHandler}>Profile<i className="material-icons left">account_box</i></button>
        <button type="button" className="btn waves-effect waves-light" >Home<i className="material-icons left">home</i></button>

      </div>
    )
  }
}
