import React, { Component, useState } from 'react';
import { api } from '../utils/api';
import { useUserContext } from '../contexts/UserContext';
import 'materialize-css';

const Stats=()=> {
    const [state, dispatch] = useUserContext();
    console.log(state.user.hp)
//     constructor(props) {

//         super(props)
// console.log(props)
//         this.state = {
//             hp: 10,
//             jp: 1,
//             strength: 20,
//             speed: 12,
//             intelligence: 44,
//             scroll: false,
//             bow: false
//         }
//     }

    return (
    <div className="row"
    style={{
        margin:'1rem'
    }}>
        <h4 className='center'>Stats</h4>
        <div className="col"
        >
        <p>hp</p>
        <StatsBar stat={state.user.hp} />
        <p>jp</p>
        <StatsBar stat={state.user.jp} />
        <p>strength</p>
        <StatsBar stat={state.user.strength} />
        <p>speed</p>
        <StatsBar stat={state.user.speed} />
        <p>intelligence</p>
        <StatsBar stat={state.user.intelligence} />
        </div>
    </div>
    )
    
}


const StatsBar = (props) => {
    const [state, dispatch] = useUserContext();
    // console.log(state)
    // api.getUserInfo(user.email).then(result => {
    //     if (result.success) {
    //       dispatch({ type: 'user', payload: result.data });
    //     }
    // }, [dispatch]);
    return (
        <div className="stats-bar"
        style={{
            position: "relative",
            height: '20px',
            width:'100px',
            // borderRadius:'50px',
            border: '1px solid #333'
        }}
        >
            <Filler stat={props.stat}/>
        </div>
    )
}

const Filler = (props) => {
    return <div className="filler" 
    style={{
        background: "#1DA598",
        height: '100%',
        width: `${props.stat}px`,
        // transition: 'width .2s ease-in'
    }}>
        <p>{props.stat}/100</p>
        </div>
}


export default Stats;