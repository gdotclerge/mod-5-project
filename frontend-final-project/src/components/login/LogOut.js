import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { logOutPhotographer } from "../../actions";


class LoginPageContainer extends React.Component {

  componentWillMount = () => {
    this.props.logOutPhotographer()
  }

  render = () => {
    return (
      <div>
        <Redirect to="/home" />
      </div>
    )
  }
}

export default connect(null, { logOutPhotographer })(LoginPageContainer)
