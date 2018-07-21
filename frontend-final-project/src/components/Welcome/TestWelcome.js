import React from 'react'
import UserLogInForm from '../Login/UserLoginForm'
import PhotoUserLogInForm from '../Login/PhotoUserLoginForm'
import UserSignUpForm from '../SignUp/UserSignUpForm'
import PhotoUserSignUpForm from '../SignUp/PhotoUserSignUpForm'
import '../../CSS/Welcome.css';

class WelcomePageContainer extends React.Component {
  state = {
    email: "",
    password: ""
  }

  render = () => {
    return (
      <div className="welcome-test-cont">

        <div className="welcome-form sign-in">
          <h2>Welcome back,</h2>
          <label>
            <span>Email</span>
            <input type="email" value={this.state.email} onChange={this.handleChange} name="email"/>
          </label>

          <label>
            <span>Password</span>
            <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button type="button" className="submit">Log In</button>
        </div>


        <div className="welcome-test-sub-cont">

          <div className="welcome-test-img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great photographers!</p>
            </div>

            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>If you already have an account, just sign in!</p>
            </div>

            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Log In</span>
            </div>
          </div>

          <div className="form sign-up">
            <h2>Glad to have you</h2>
            <label>
              <span>Name</span>
              <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" value={this.state.email} onChange={this.handleChange} name="email"/>
            </label>
            <label>
              <span>Password</span>
              <input type="password" value={this.state.password} onChange={this.handleChange} name="password"/>
            </label>
            <button type="button" class="submit">Sign Up</button>
          </div>


        </div>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
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
