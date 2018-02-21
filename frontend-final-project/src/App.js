import React, { Component } from 'react';
import NavBar from './Navbar'
import MainContainer from './components/MainContainer'
import SideContainer from './components/SideContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
        <SideContainer />
      </div>
    );
  }
}

export default App;
