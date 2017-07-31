import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
        </div>
        <div className="App-intro">
          <h1>This is the App Component</h1>
        </div>
        <TextInput />
      </div>
    );
  }
}

export default App;
