import React from 'react';
import { connect } from "react-redux";
import { fetchSessions, load } from "../../actions";
import Loading from '../Loading';
import SessionsList from './SessionsList';
import UpdateSessionForm from './UpdateSessionForm';
import '../../CSS/Home.css';

class SessionPageContainer extends React.Component {
  state = {
    update: false
  }

  componentDidMount = () => {
    this.props.fetchSessions()
  }

  render = () => {
    return (
      <div>
        { this.state.update ? <UpdateSessionForm session={this.state.session}/> : <SessionsList handleUpdate={this.handleUpdate} /> }
      </div>
    )
  }

  handleUpdate = (sessionInfo) => {
    this.setState({ update: true, session: sessionInfo })
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.currentUser.user
  }
}

export default connect((mapStateToProps), { fetchSessions, load })(SessionPageContainer)
