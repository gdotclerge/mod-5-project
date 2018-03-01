// import React from 'react'
// import LoginForm from './LoginForm'
// import UserLogInForm from './UserLoginForm'
//
//
// class LoginPageContainer extends React.Component {
//   constructor (props) {
//     super(props)
//     const token = localStorage.getItem("jwt")
//     this.state = { loggedIn: !!token }
//   }
//
//   render = () => {
//     return (
//       <div>
//         <div class="g-signin2" data-onsuccess="onSignIn"></div>
//         <LoginForm />
//         User LogIN
//         <UserLogInForm />
//       </div>
//     )
//   }
//
//   onSignIn = (googleUser) => {
//     let profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
//   }
//
// }
//
// export default LoginPageContainer
