import React from 'react'
import LoginForm from './LoginForm'


class LoginPageContainer extends React.Component {

  render = () => {
    return (
      <div>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <LoginForm />
      </div>
    )
  }

  onSignIn = (googleUser) => {
    let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

}

export default LoginPageContainer
