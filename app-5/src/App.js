import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image myImage= {"https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg"}/>
      </div>
    );
  }
}

export default App;
