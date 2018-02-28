import React from 'react'


class SideContainer extends React.Component {

  render = () => {
    return (
      <div className="SmallContainer">
        where the profile photo will go for the photographer (component)
        <button>Reserve</button>
        <button onClick={this.props.handleScheduleSession} >Schedule Call</button>
      </div>
    )
  }

}


export default SideContainer
