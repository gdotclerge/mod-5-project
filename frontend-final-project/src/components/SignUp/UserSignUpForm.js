import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from "../../actions";
import { Form } from 'semantic-ui-react';

class UserSignUpForm extends React.Component {
  state = {
     firstname: "",
     lastname: "",
     username: "",
     password: "",
     pwConfirm: "",
     email: "",
     state: "",
     city: "",
     loggingIn: false
  }

  render() {
    if (this.logInCheck()) {
      return <Redirect to="/home" />
    }

    return(
      <Form onSubmit={this.handleLoginSubmit}>
        <Form.Field>
          <input type="text" value={this.state.firstname} onChange={this.handleChange} placeholder="First Name" name="firstname"></input> <br /> <br />
          <input type="text" value={this.state.lastname} onChange={this.handleChange} placeholder="Last Name" name="lastname"></input> <br /> <br />
          <input type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username" name="username"></input> <br /> <br />
          <input type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" name="password"></input> <br /> <br />
          <input type="password" value={this.state.pwConfirm} onChange={this.handleChange} placeholder="Password Confirmation" name="pwConfirm"></input> <br /> <br />
          <input type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email" name="email"></input> <br /> <br />
          <input type="text" value={this.state.city} onChange={this.handleChange} placeholder="City" name="city"></input> <br /> <br />
          <button type="submit">Sign Up</button>  
        </Form.Field>
      </Form>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.props.signUp({ user: {
      first_name: this.state.firstname,
      last_name: this.state.lastname,
      username: this.state.username,
      password: this.state.password,
      password_confirmation: this.state.pwConfirm,
      email: this.state.email,
      city: this.state.city
    } })
    this.setState({ loggingIn: true })
  }

  logInCheck = () => {
    const token = localStorage.getItem("jwt")
    return !!token && token !== "undefined"
  }

}

export default connect((state)=>({ currentPhotoUser: state.currentUser.user }), { signUp })(UserSignUpForm)
