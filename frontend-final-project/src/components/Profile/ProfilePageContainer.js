import React from 'react'
import ProfileFeed from './ProfileFeed'
import Loading from '../Loading'
import { connect } from "react-redux";
import SideContainer from "./SideContainer";
import BookPhotographer from "./BookPhotographerForm";
import { fetchPhotographer } from "../../actions";


class ProfilePageContainer extends React.Component {
  state = {
    booking: false
  }

  componentDidMount = () => {
    this.props.fetchPhotographer(this.props.url)
  }

  render = () => {
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


const mapStateToProps = (state, props) => {
  return {
    url: props.routerProps.match.params.slug,
    loading: state.photographers.loading
  }
}

export default connect((mapStateToProps),{ fetchPhotographer })(ProfilePageContainer)
