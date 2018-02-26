import React from 'react'
import MainContainer from './MainContainer'
import SideContainer from './SideContainer'


class HomePageContainer extends React.Component {

  render = () => {
    return (
      <div >
        <MainContainer />
        <SideContainer />
      </div>
    )
  }

}


export default HomePageContainer
