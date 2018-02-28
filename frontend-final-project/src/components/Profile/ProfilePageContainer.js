import React from 'react'
import ProfilePage from './ProfilePage'
import ProfileEditPage from './ProfileEditPage'
import { connect } from "react-redux";
import { fetchPhotographerforRoute } from "../../actions";


class ProfilePageContainer extends React.Component {

  componentWillMount = () => {
    if (this.props.route){
      this.props.fetchPhotographerforRoute(this.props.route)
    }
  }

  render = () => {
    console.log("Profile Page Container Rendered")
    return (
      <div>
        {!!this.props.loggedInPhotographer ? <ProfileEditPage /> : <ProfilePage />}
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    loggedInPhotographer: state.photographers.loggedInPhotographer
  }
}

export default connect((mapStateToProps),{ fetchPhotographerforRoute })(ProfilePageContainer)
