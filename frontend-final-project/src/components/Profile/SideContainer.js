import React from 'react'
import PackageContainer from '../Package/PackageContainer'


class SideContainer extends React.Component {

  render = () => {
    if (this.props.booking){
      return (
        <div className="SmallContainer">
        </div>
      )
    }

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
