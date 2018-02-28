import React from 'react'
import { connect } from "react-redux";
import ProfileFeed from "./ProfileFeed";
import SideContainer from "./SideContainer";
import BookPhotographer from "./BookPhotographerForm";


class ProfilePage extends React.Component {
  state = {
    booking: false
  }

  render = () => {
    return (
      <div>
        {this.state.booking ? <BookPhotographer /> : <ProfileFeed /> }
        <SideContainer handleScheduleSession={this.handleScheduleSession} />
      </div>
    )
  }

  handleScheduleSession = (e) => {
    this.setState({ booking: true })
  }

}



const mapStateToProps = (state) => {
  return {
    selectedPhotographer: state.photographers.selectedPhotographer
  }
}

export default connect((mapStateToProps), null )(ProfilePage)
