import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestSharedComponent from './components/TestSharedComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestSharedComponent/>
      </header>
    </div>
  );
}

export default App;
