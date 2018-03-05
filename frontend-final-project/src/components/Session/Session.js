import React from 'react'

const session = (props) => {
  return (
    <div>
      {props.session.session_type} Photo Session<br />
      Price: {props.session.price} <br />
      {props.session.start_date} <br />
      and the name of the photographer
    </div>
  )
}

export default session
