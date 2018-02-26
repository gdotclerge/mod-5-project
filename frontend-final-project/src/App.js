import React, { Component } from 'react';
import NavBar from './Navbar'
import HomePage from './components/PageContainers/HomePageContainer'
import ProfilePage from './components/Profile/ProfilePageContainer'
import LoginPage from './components/login/LoginPageContainer'
import SignUpPage from './components/SignUp/SignUpPageContainer'
import './App.css';
import Adapter from './adapter'
import { Route, Switch, Redirect, NavLink, withRouter } from 'react-router-dom'


class App extends Component {
  // state = {
  //   photographers: []
  // }
  //
  //
  // componentDidMount = () => {
  //   Adapter.getPhotographers()
  //   .then(json => {
  //     this.setState({ photographers: json})
  //   })
  // }
  //
  //
  // createPhotographerPaths = () => {
  //   this.state.photographers.map( (p)=> {
  //     const pathName = `/${p.custom_url}`
  //     return <Route exact path={pathName}/>
  //   })
  // }


  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
        </Switch>
      </div>
    );
  }



}

export default App;
