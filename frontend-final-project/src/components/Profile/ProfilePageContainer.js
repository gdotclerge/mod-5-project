import React from 'react'
import ProfileFeed from './ProfileFeed'
import Loading from '../Loading'
import { connect } from "react-redux";
import SideContainer from "./SideContainer";
import ProfileCard from "./ProfileCard";
import ReserveSessionForm from "../Session/ReserveSessionForm";
import { fetchPhotographer, bookSession } from "../../actions";
import { Redirect } from 'react-router-dom';
import '../../CSS/Profile.css';


class ProfilePageContainer extends React.Component {
  state = {
    booking: false
  }

  componentDidMount = () => {
    this.props.fetchPhotographer(this.props.url)
  }

  render = () => {
    console.log("RENDERING PROFILE PAGE")
    if (this.props.loading) {
      return (<Loading />)
    }

    return (
      <div className="profile-page">
        {this.state.booking ? <ReserveSessionForm /> : <ProfileFeed /> }
        <ProfileCard handleScheduleSession={this.handleScheduleSession} booking={this.state.booking} />
      </div>
    )
  }

  handleScheduleSession = (e) => {
    if (e.target.value === "Reserve") {
      this.setState({ booking: true })
    } else {
      this.setState({ booking: false })
    }
  }
}


const mapStateToProps = (state, props) => {
  return {
    url: props.routerProps.match.params.slug,
    loading: state.photographers.loading
  }
}

export default connect((mapStateToProps),{ fetchPhotographer, bookSession })(ProfilePageContainer)
