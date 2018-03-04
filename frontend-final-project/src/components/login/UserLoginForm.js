import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logIn } from "../../actions";

class UserLoginForm extends React.Component {
  state = {
     username: "",
     password: "",
     loggingIn: false
  }

  render() {
    if (this.logInCheck()) {
      return <Redirect to="/home" />
    }

    return(
      <form onSubmit={this.handleLoginSubmit}>
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} placeholder="Username" ></input> <br />
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" ></input> <br />
        <button type="submit">Login</button>
      </form>
    )
  }


  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.props.logIn({ user: {
      username: this.state.username,
      password: this.state.password
    } })
    this.setState({ loggingIn: true })
  }

  logInCheck = () => {
    const token = localStorage.getItem("jwt")
    return !!token && token !== "undefined"
  }


}

export default connect((state)=>({ currentUser: state.currentUser.user }), { logIn })(UserLoginForm)
