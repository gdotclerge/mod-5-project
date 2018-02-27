import React from 'react'
import { connect } from "react-redux";


class ProfileEditPage extends React.Component {

  render = () => {
    return (
      <div>
        Edit your profile page
      </div>
    )
  }

}


export default connect((state)=> ({ selectedPhotographer: state.photographers.loggedInPhotographer }))(ProfileEditPage)
