import React from 'react'
import "./style.css";
import Auth0Context from '../../react-auth0-spa';

export default class ProgressBarExample extends React.Component {
     constructor(props) {
      super(props)
      
      this.state = {
        percentage: 0
      }
      
      
    }
    
    static contextType = Auth0Context;
  
    componentDidMount() {
      const userEmail = this.context.user.email;
      fetch(`/api/v1/users/email/${userEmail}`)
        .then((res) => res.json())
        .then(
          (result) =>
          {if (result.data.progressTracker.quest1===false && result.data.progressTracker.quest2 === false && result.data.progressTracker.quest3=== false){ 
            return this.setState(prevState =>({percentage:prevState.percentage + 0}))
          }else if (result.data.progressTracker.quest1===true && result.data.progressTracker.quest2 === false && result.data.progressTracker.quest3=== false){ 
           return this.setState(prevState =>({percentage:prevState.percentage + 33.333}))
          }else if (result.data.progressTracker.quest1===true && result.data.progressTracker.quest2 === true && result.data.progressTracker.quest3=== false ){ 
            return this.setState(prevState =>({percentage:prevState.percentage + 66.666}))
          }else if (result.data.progressTracker.quest1===true && result.data.progressTracker.quest2 === true && result.data.progressTracker.quest3=== true){
            return this.setState(prevState =>({percentage:prevState.percentage + 100}))
          }

        })
      
  console.log(this.state)
    }
  
    
    render() {
      return (
        <div className="progBar">
          <h3>Progress</h3>
          <ProgressBar percentage={this.state.percentage} />
          <Title percentage={this.state.percentage}/>
        </div>
      )
    }  
  }
  
  const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }
  
  const Title = (props)=>{
      let text;
      switch (props.percentage){
        case 0:
            text = "Student";
            break;
        case 33.333:
            text = 'Employer Ready' ;
            break;
        case 66.666:
            text =  "Employer Competative";
            break;
        case 100:
            text = "Industry Professional";
            break;
      }
      console.log(props.percentage);
     
     return <h2>{text}</h2> ;
      ;
  }
  