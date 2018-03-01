import React from 'react'
import { connect } from "react-redux";
import UserLogInForm from '../login/UserLoginForm'
import PhotoUserLogInForm from '../login/PhotoUserLoginForm'
import UserSignUpForm from '../SignUp/UserSignUpForm'
import PhotoUserSignUpForm from '../SignUp/PhotoUserSignUpForm'

class WelcomePageContainer extends React.Component {
  state = {
    showSignUp: false,
    photoUser: false
  }

  render = () => {
    console.log("RENDERED WELCOME")
    if (this.state.showSignUp) {
      return (
        <div>
          { this.state.photoUser ? <PhotoUserSignUpForm /> : <UserSignUpForm /> }
          <h4> Photographer? </h4>
          <label class="switch">
            <input type="checkbox" onChange={this.handleSwitch} />
            <span class="slider round"></span>
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
          <label class="switch">
            <input type="checkbox" onChange={this.handleSwitch} />
            <span class="slider round"></span>
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


// return (
//   <div>
//     <div class="g-signin2" data-onsuccess="onSignIn"></div>
//     <LoginForm />
//     User LogIN
//     <UserLogInForm />
//   </div>
// )

//
// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.currentUser.user,
//     currentPhotoUser: state.currentPhotoUser.photoUser
//   }
// }

export default connect(null, null)(WelcomePageContainer)





// if (this.state.showSignUp) {
//   if (this.state.photoUser) {
//     return (
//       <div>
//         <PhotoUserSignUpForm />
//         <label class="switch">
//           <input type="checkbox" onChange={this.handleSwitch} />
//           <span class="slider round"></span>
//         </label>
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <UserSignUpForm />
//         <label class="switch">
//           <input type="checkbox" onChange={this.handleSwitch} />
//           <span class="slider round"></span>
//         </label>
//       </div>
//     )
//   }
// } else {
//   if (this.state.photoUser) {
//     return (
//       <div>
//         <PhotoUserLogInForm />
//         <label class="switch">
//           <input type="checkbox" onChange={this.handleSwitch} />
//           <span class="slider round"></span>
//         </label>
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <UserLogInForm />
//         <label class="switch">
//           <input type="checkbox" onChange={this.handleSwitch} />
//           <span class="slider round"></span>
//         </label>
//       </div>
//     )
//   }
// }
// }
