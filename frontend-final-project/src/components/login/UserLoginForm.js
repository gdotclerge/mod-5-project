import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from "../../actions";

class UserLoginForm extends React.Component {
  constructor (props) {
    super(props)

    const token = localStorage.getItem("jwt")

    if(token){
      this.state = { username: "", password: "", loggedIn: true }
    } else {
      this.state = { username: "", password: "", loggedIn: false }
    }
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
    this.setState({ loggedIn: true })
    this.props.loginUser(this.state.username, this.state.password)
  }

  render() {
    if (this.state.loggedIn){
      return <Redirect to="/home" />
    }

    return(
      <form onSubmit={this.handleLoginSubmit}>
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default connect(null, { loginUser })(UserLoginForm)
