import React, { Component } from 'react';
import NavBar from './Navbar'
import HomePage from './components/PageContainers/HomePageContainer'
import ProfilePage from './components/Profile/ProfilePageContainer'
import LoginPage from './components/login/LoginPageContainer'
import LogOut from './components/login/LogOut'
import SignUpPage from './components/SignUp/SignUpPageContainer'
import './App.css';
import Adapter from './adapter'
import { Route, Switch, Redirect, NavLink, withRouter } from 'react-router-dom'
import { getLoggedInPhotographer, fetchPhotographer, fetchPhotos, fetchAllPhotographersURLs } from "./actions";
import { connect } from "react-redux";
import ProfilePageContainer from "./components/Profile/ProfilePageContainer";




class App extends Component {

  componentDidMount = () => {
    this.props.fetchPhotos()
    this.props.fetchAllPhotographersURLs()

    const token = localStorage.getItem('jwt')
    const selectedPhotographer = localStorage.getItem('selectedPhotographer')

    if (token){
      this.props.getLoggedInPhotographer()
    }

    if (selectedPhotographer){
      this.props.fetchPhotographer(selectedPhotographer)
    }

  }


  //
  //
  createPhotographerPaths = () => {
    return this.props.photographerURLs.map( (url) => {
      const pathName = `/${url}`
      return (<Route exact path={pathName} render={this.renderPhotographerPaths} />)
    })
  }

  renderPhotographerPaths = (routerProps) => {
    const route = routerProps.match.url
    return (<ProfilePageContainer route={route} />)
  }



  render() {
    // <Route path="/photographers/:slug" render={this.callback} />
    return (
      <div className="App">
        <NavBar />
        <Switch>
          {this.createPhotographerPaths()}
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/signup" component={SignUpPage} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    selectedPhotographer: state.photographers.selectedPhotographer,
    photographerURLs: state.photographers.photographerURLs
  }
}


export default withRouter (connect((mapStateToProps), { getLoggedInPhotographer, fetchPhotographer, fetchPhotos, fetchAllPhotographersURLs })(App))
