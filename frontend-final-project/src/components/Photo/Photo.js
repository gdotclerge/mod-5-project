import React from 'react'
import { connect } from "react-redux";
import { fetchPhotographer } from "../../actions";
import { NavLink, Redirect } from 'react-router-dom';


class Photo extends React.Component {
  state = {
    redirectToProfile: false
  }


  render = () => {

    if (this.state.redirectToProfile) {
      return <Redirect to='/profile' />
    }

    return (
      <div className="photo">
        <img src={this.props.photo.img_src} alt="" />
        <br/>
        <div className="overlay"></div>
        <div className="photobutton" >
          <button className="button" onClick={ (e)=> {this.handleProfileClick(this.props.photo)} } >View Profile</button>
          <br/><br/>
          <button className="button">Reserve</button>
        </div>
      </div>
    )
  }


  handleProfileClick = (photo) => {
    this.props.fetchPhotographer(photo.photographer_id)
    this.setState({redirectToProfile: true})
  }


}




export default connect(null, { fetchPhotographer })(Photo)
