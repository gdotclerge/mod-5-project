import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { logOut } from "../../actions";


class LoginPageContainer extends React.Component {

  componentWillMount = () => {
    localStorage.clear()
  }

  render = () => {
    return (
      <div>
        <Redirect to="/welcome" />
      </div>
    )
  }
}

export default connect(null, { logOut })(LoginPageContainer)
