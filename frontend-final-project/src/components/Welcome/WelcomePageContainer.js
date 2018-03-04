import React from 'react'
import UserLogInForm from '../Login/UserLoginForm'
import PhotoUserLogInForm from '../Login/PhotoUserLoginForm'
import UserSignUpForm from '../SignUp/UserSignUpForm'
import PhotoUserSignUpForm from '../SignUp/PhotoUserSignUpForm'

class WelcomePageContainer extends React.Component {
  state = {
    showSignUp: false,
    photoUser: false
  }

  render = () => {
    if (this.state.showSignUp) {
      return (
        <div>
          { this.state.photoUser ? <PhotoUserSignUpForm /> : <UserSignUpForm /> }
          <h4> Photographer? </h4>
          <label className="switch">
            <input type="checkbox" onChange={this.handleSwitch} />
            <span className="slider round"></span>
          </label>
          <h4> Already work with us? </h4>
          <button onClick={this.handleLogInSignUpClick} value="LogIn" >Log In</button>
        </div>
      )
    } else {
      return (
        <div>
          { this.state.photoUser ? <PhotoUserLogInForm /> : <UserLogInForm /> }
          <h4> Photographer? </h4>
          <label className="switch">
            <input type="checkbox" onChange={this.handleSwitch} />
            <span className="slider round"></span>
          </label>
          <h4> New to PicMe? </h4>
          <button onClick={this.handleLogInSignUpClick} value="SignUp" >Sign Up</button>
        </div>
      )
    }
  }

  handleSwitch = (event) => {
    if (event.target.checked) {
      this.setState({ photoUser: true })
    } else {
      this.setState({ photoUser: false })
    }
  }

  handleLogInSignUpClick = (event) => {
    event.preventDefault()
    if (event.target.value === "LogIn") {
      this.setState({ showSignUp: false })
    } else {
      this.setState({ showSignUp: true })
    }
  }


}


export default WelcomePageContainer
