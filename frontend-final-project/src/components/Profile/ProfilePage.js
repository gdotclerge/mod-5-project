import React from 'react'
import { connect } from "react-redux";
import Loading from "../Loading";
import ProfileFeed from "./ProfileFeed";
import SideContainer from "./SideContainer";
import BookPhotographer from "./BookPhotographerForm";


class ProfilePage extends React.Component {
  state = {
    booking: false
  }

  render = () => {
    console.log("RENDERED PROFILE PAGE")
    if (this.props.loading) {
      return (<Loading />)
    }


    return (
      <div>
        {this.state.booking ? <BookPhotographer /> : <ProfileFeed /> }
        <SideContainer handleScheduleSession={this.handleScheduleSession} booking={this.state.booking} />
      </div>
    )
  }

  handleScheduleSession = (e) => {
    this.setState({ booking: true })
  }

}



const mapStateToProps = (state) => {
  return {
    selectedPhotographer: state.photographers.selectedPhotographer,
    loading: state.photos.loading
  }
}

export default connect((mapStateToProps), null )(ProfilePage)
