import React, { Component } from 'react';
import NavBar from './Navbar'
import MainContainer from './components/MainContainer'
import SideContainer from './components/SideContainer'
import './App.css';
import Adapter from './adapter'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'


class App extends Component {
  state = {
    photographers: []
  }


  componentDidMount = () => {
    Adapter.getPhotographers()
    .then(json => {
      this.setState({ photographers: json})
    })
  }


  createPhotographerPaths = () => {
    this.state.photographers.map( (p)=> {
      const pathName = `/${p.custom_url}`
      return <Route exact path={pathName}/>
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
