import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [testMessage, setTestMessage] = useState('');
  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3001', {
        method: 'GET',
        'Content-Type': 'application/json'
      })
        .then(res => res.json())
        .then(res => {
          console.log('Hey');
          setTestMessage(res.data);
        });
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{testMessage}</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
