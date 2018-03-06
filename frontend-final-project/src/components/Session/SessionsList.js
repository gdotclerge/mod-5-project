import React from 'react'
import Session from './SessionModal'
import { connect } from "react-redux";

const sessionsList = (props) => {
  return (
    <div>
      {listSessions(props)}
    </div>
  )
}

const listSessions = (props) => {
  return props.sessions.map( (s) => {
    return(<Session session={s} key={s.id} handleUpdate={props.handleUpdate}/>)
  })
}

export default connect((state)=> ({sessions: state.sessions.userSessions}))(sessionsList)
