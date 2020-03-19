import React, { Component, useState } from 'react';
import { api } from '../utils/api';
import { useUserContext } from '../contexts/UserContext';
import Scroll from '../assets/Scroll.jpeg';
import '../styles/table.css';
import 'materialize-css';

const Inventory = () => {
    const [state, dispatch] = useUserContext();
    const imgStyle = {
        width: '40px',
        height: '40px',
        align: 'center'
    }
    console.log(state)
    return (
        <div className="row"
            style={{
                margin: '1rem'
            }}
        >
            <h4 className='center'>Inventory</h4>
            <table
            // style={tableStyle}
            >
                <tbody>
                    <tr>
                        <td>
                            {
                                (state.user.inventory.scroll) ? <img src={Scroll} style={imgStyle} /> : null
                            }
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Inventory;