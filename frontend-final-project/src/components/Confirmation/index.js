import React from 'react'
import { connect } from "react-redux";

class Confirmation extends React.Component {
  render = () => {
    return (
      <div>
        CONFIRMATION
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    session: state.sessions.bookedSession
  }
}

export default connect((mapStateToProps), null)(Confirmation)
