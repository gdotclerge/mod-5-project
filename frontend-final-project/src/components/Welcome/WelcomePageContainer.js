import React from 'react'
import UserLogInForm from '../Login/UserLoginForm'
import PhotoUserLogInForm from '../Login/PhotoUserLoginForm'
import UserSignUpForm from '../SignUp/UserSignUpForm'
import PhotoUserSignUpForm from '../SignUp/PhotoUserSignUpForm'
import '../../CSS/Welcome.css';
import { Checkbox, Button, Segment } from 'semantic-ui-react'

class WelcomePageContainer extends React.Component {
  state = {
    showSignUp: false,
    showLogIn: false,
    photoUser: false
  }

  render = () => {
    if (this.state.showSignUp) {

      if (this.state.photoUser) {
        return (
          <div className="welcome-container" >
            <div class="video-background">
              <div class="video-foreground">
                <iframe src="https://player.vimeo.com/video/244221322?autoplay=1&loop=1" frameborder="0" webkitallowfullscreen allowfullscreen loop="true"></iframe>
              </div>
            </div>

            <div className="sign_form">
              <Segment>
                <PhotoUserSignUpForm />
                <h4> Photographer </h4>
                <Checkbox toggle onChange={this.handleSwitch}/>
              </Segment>
            </div>
          </div>
        )
      } else {
        return (
          <div className="welcome-container" >
            <div className="video-background">
              <div className="video-foreground">
                <iframe src="https://player.vimeo.com/video/244221322?autoplay=1&loop=1" frameborder="0" webkitallowfullscreen allowfullscreen loop="true"></iframe>
              </div>
            </div>

            <div className="sign_form">
              <Segment>
                <UserSignUpForm />
                <h4> Photographer </h4>
                <Checkbox toggle onChange={this.handleSwitch}/>
              </Segment>
            </div>
          </div>
        )
      }

    } else if (this.state.showLogIn) {

      if (this.state.photoUser) {
        return (
          <div className="welcome-container" >
            <div className="video-background">
              <div className="video-foreground">
                <iframe src="https://player.vimeo.com/video/244221322?autoplay=1&loop=1" frameborder="0" webkitallowfullscreen allowfullscreen loop="true"></iframe>
              </div>
            </div>

            <div className="login-form">
              <Segment>
                <PhotoUserLogInForm />
                <h4> Photographer </h4>
                <Checkbox toggle onChange={this.handleSwitch}/>
              </Segment>
            </div>
          </div>
        )
      } else {
        return (
          <div className="welcome-container" >
            <div className="video-background">
              <div className="video-foreground">
                <iframe src="https://player.vimeo.com/video/244221322?autoplay=1&loop=1" frameborder="0" webkitallowfullscreen allowfullscreen loop="true"></iframe>
              </div>
            </div>

            <div className="login-form">
              <Segment>
                <UserLogInForm /> <br/>
                <h4> Photographer </h4>
                <Checkbox toggle onChange={this.handleSwitch}/>
              </Segment>
            </div>
          </div>
        )
      }

    } else {
      return (
        <div className="welcome-container">
          <div class="video-background">
            <div class="video-foreground">
              <iframe src="https://player.vimeo.com/video/244221322?autoplay=1&loop=1" frameborder="0" webkitallowfullscreen allowfullscreen loop="true"></iframe>
            </div>
          </div>


          <div className="welcome-form">
            <h4 id="welcome-title"> Capture </h4>
            <i className="material-icons" id="camera-icon" >photo_camera</i>
            <button className="li-button" onClick={this.handleLogInSignUpClick} value="LogIn" >Log In</button>
            <button className="su-button" onClick={this.handleLogInSignUpClick} value="SignUp" >Sign Up</button>
          </div>
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
    if (event.target.value === "LogIn") {
      this.setState({ showLogIn: true })
    } else if (event.target.value === "SignUp") {
      this.setState({ showSignUp: true })
    }
  }


}


export default WelcomePageContainer
