import React from 'react';

import './App.css';

import logo from './logo.png';

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <img src={logo} />
        <h1>Welcome, it's React\Redux Boilerplate</h1>
        <strong>Edit src/App.js and save to reload.</strong>
        <a href="https://github.com/AituAbdiluly" target="_blank">
          Github
        </a>
      </div>
    </div>
  );
};

export default App;
