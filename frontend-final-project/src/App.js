import React, { Component } from 'react';
import Navbar from './Navbar'
import HomePage from './components/HomePage/HomePageContainer'
import ProfilePage from './components/Profile/ProfilePageContainer'
import LogOut from './components/Login/LogOut'
import WelcomePage from './components/Welcome/WelcomePageContainer'
import SessionPage from './components/Session/SessionPageContainer'
// import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { getLoggedInUser } from "./actions";
import { connect } from "react-redux";
import ProfilePageContainer from "./components/Profile/ProfilePageContainer";


class App extends Component {

  renderPhotographerPaths = (routerProps) => {
    return (<ProfilePageContainer routerProps={routerProps} />)
  }

  render() {
    console.log("RENDERED APP")
    if(!this.logInCheck()) {
      return (
        <Switch>
          <Route exact path="/welcome" render={this.handleWelcomPage} />
          <Redirect from="/" to="/welcome" />
        </Switch>
      )
    } else {
      return (
        <div>
          <Navbar />
          <Switch>
            <Route path="/photographers/:slug" render={this.renderPhotographerPaths} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/sessions" component={SessionPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/logout" component={LogOut} />
          </Switch>
        </div>
      )
    }
  }

  handleWelcomPage = (routerProps) => {
    return <WelcomePage handlelogIn={this.handlelogIn}/>
  }

  logInCheck = () => {
    const token = localStorage.getItem("jwt")
    if (!!token && (token !== "undefined")) {
      this.props.getLoggedInUser();
      return !!token
    }
  }

}


export default withRouter (connect(null, { getLoggedInUser })(App))
