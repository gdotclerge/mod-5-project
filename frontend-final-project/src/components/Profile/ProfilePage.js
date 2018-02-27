import React from 'react'
import { connect } from "react-redux";
import PhotoFeed from "./PhotoFeed";

// import { fetchPhotographer } from "../../actions";


class ProfilePage extends React.Component {
  debugger
  render = () => {
    return (
      <div>
        Profile Page with no one loggedin
        <PhotoFeed />
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    selectedPhotographer: state.photographers.selectedPhotographer
  }
}

export default connect((mapStateToProps), null )(ProfilePage)
