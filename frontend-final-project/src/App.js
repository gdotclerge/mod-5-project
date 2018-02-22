import React, { Component } from 'react';
import NavBar from './Navbar'
import MainContainer from './components/MainContainer'
import SideContainer from './components/SideContainer'
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'


class App extends Component {
  state = {
    photographers: []
  }


  createPhotographerPaths = () => {
    this.state.photographers.map( (p)=> {
      return <Route exact path={}/>
    })
  }


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
