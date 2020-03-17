import React, { Component, useState } from 'react';
import { api } from '../utils/api';
import { useUserContext } from '../contexts/UserContext';
import Scroll from '../assets/Scroll.jpeg';
import '../styles/table.css';
import 'materialize-css';

const Inventory=()=> {
    const [state, dispatch] = useUserContext();
    const imgStyle = {
        width:'40px',
        height: '40px'
    }
    const tableStyle = {
        border:'1px solid black',
        width: '90%'
    }
    return (
    <div className="row"
    style={{
        margin:'1rem'
    }}
    >
    <h4 className='center'>Inventory</h4>
    <table
        // style={tableStyle}
        >
        <tr>
            <td>
                {
                (state.user.scroll)? <img src={ Scroll } style={imgStyle}/> : null
            }
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
    </div>
    )
}

export default Inventory;