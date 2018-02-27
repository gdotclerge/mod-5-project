import React from 'react'
import ProfilePageContainer from './Profile/ProfilePageContainer'
import { connect } from "react-redux";
import { fetchPhotographer } from "../actions";
import { Route, Switch, Redirect, NavLink, withRouter } from 'react-router-dom'



class Handler extends React.Component {



  render = () => {
    return(
      <div>
        {!!this.props.selectedPhotographer ? <Route path={this.props.route} component={ProfilePageContainer}/> : <Redirect to="/home" /> }
      </div>
    )

  }

  componentWillUnmount = () => {

  }

}



const mapStateToProps = (state) => {
  return {
    selectedPhotographer: state.photographers.selectedPhotographer
  }
}



export default connect((mapStateToProps), { fetchPhotographer } )(Handler)
