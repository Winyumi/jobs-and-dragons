import React, { Component } from 'react';
import { bounce } from 'react-animations';
import styled, { keyframes } from "styled-components";


const Bounce = styled.div`animation: 2s ${keyframes`${bounce}` } infinite`;

export default class Success extends Component {
    
   
  
    render() {

    
    return (
      <div className="card">
        <div className="card-body"><br/><br/>
           <Bounce><h4>Hang Tight while your Resume Downloads!</h4></Bounce><br/><br/>
            
            
            
        </div>  
        
      </div>
    )
  }
}
