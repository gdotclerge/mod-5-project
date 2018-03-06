import React from 'react'
import ProfileFeed from './ProfileFeed'
import Loading from '../Loading'
import { connect } from "react-redux";
import SideContainer from "./SideContainer";
import ReserveSessionForm from "../Session/ReserveSessionForm";
import { fetchPhotographer, bookSession } from "../../actions";
import { Redirect } from 'react-router-dom';


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
      <div>
        {this.state.booking ? <ReserveSessionForm /> : <ProfileFeed /> }
        <SideContainer handleScheduleSession={this.handleScheduleSession} booking={this.state.booking} />
      </div>
    )
  }

  handleScheduleSession = (e) => {
    this.setState({ booking: true })
  }
}


const mapStateToProps = (state, props) => {
  return {
    url: props.routerProps.match.params.slug,
    loading: state.photographers.loading
  }
}

export default connect((mapStateToProps),{ fetchPhotographer, bookSession })(ProfilePageContainer)
