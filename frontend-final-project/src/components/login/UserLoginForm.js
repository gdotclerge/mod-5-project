import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from "../../actions";

class UserLoginForm extends React.Component {
  state = {
     username: "",
     password: ""
  }

  render() {
    if (!!this.props.currentUser) {
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
    this.setState({ loggedIn: true })
    this.props.loginUser(this.state.username, this.state.password)
  }


}

export default connect((state)=>{ currentUser: state.currentUser.user }, { loginUser })(UserLoginForm)
