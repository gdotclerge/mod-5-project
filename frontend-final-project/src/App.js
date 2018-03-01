import React, { Component } from 'react';
import Navbar from './Navbar'
import HomePage from './components/PageContainers/HomePageContainer'
import ProfilePage from './components/Profile/ProfilePageContainer'
import LoginPage from './components/login/LoginPageContainer'
import LogOut from './components/login/LogOut'
// import SignUpPage from './components/SignUp/SignUpPageContainer'
import WelcomePage from './components/Welcome/WelcomePageContainer'
import './App.css';
import Adapter from './adapter'
import { Route, Switch, Redirect, NavLink, withRouter } from 'react-router-dom'
import { getLoggedInPhotographer, getLoggedInUser, fetchPhotographer, fetchPhotos, fetchAllPhotographersURLs } from "./actions";
import { connect } from "react-redux";
import ProfilePageContainer from "./components/Profile/ProfilePageContainer";


class App extends Component {

  componentDidMount = () => {
    this.props.fetchPhotos()
    this.props.fetchAllPhotographersURLs()

    const token = localStorage.getItem('jwt')
    if (token){
      this.props.getLoggedInUser()
    }


    const selectedPhotographer = localStorage.getItem('selectedPhotographer')
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
    if(!this.props.currentPhotoUser || !this.props.currentUser) {
      return (
        <Switch>
          <Route exact path="/welcome" component={WelcomePage} />
          <Redirect from="/" to="/welcome" />
        </Switch>
      )
    } else {
      return (
        <div>
          <Navbar />
          <Switch>
            {this.createPhotographerPaths()}
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/logout" component={LogOut} />
          </Switch>
        </div>
      )
    }
  }

}



const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
    currentPhotoUser: state.currentPhotoUser.photoUser,
    selectedPhotographer: state.photographers.selectedPhotographer,
    photographerURLs: state.photographers.photographerURLs
  }
}

export default withRouter (connect((mapStateToProps), { getLoggedInPhotographer, getLoggedInUser, fetchPhotographer, fetchPhotos, fetchAllPhotographersURLs })(App))
