import React from 'react';
import { connect } from "react-redux";
import { fetchSessions } from "../../actions";
import Loading from '../Loading';
import SessionsList from './SessionsList';
import '../../CSS/Home.css';

class SessionPageContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchSessions()
  }

  render = () => {
    if (!!this.props.loading){
      return <Loading />
    }

    return (
      <div>
        <SessionsList />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    loading: state.photographers.loading,
    user: state.currentUser.user
  }
}

export default connect((mapStateToProps), { fetchSessions })(SessionPageContainer)
