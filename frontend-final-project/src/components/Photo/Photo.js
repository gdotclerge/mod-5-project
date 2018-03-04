import React from 'react'
import { Redirect } from 'react-router-dom';

class Photo extends React.Component {
  state = {
    redirect: false
  }

  render = () => {
    if (this.state.redirect) {
      let path = "/photographers/" + this.props.photo.profileURL
      return <Redirect to={path} />
    }

    return (
      <div className="photo-container">
        <img className="photo" src={this.props.photo.img_src} alt="" />
        <br/>
        <div className="overlay">Hello</div>
        <div className="photobutton" >
          <button className="button" onClick={ (e)=> {this.handleProfileClick(this.props.photo)} } >View Profile</button>
        </div>
      </div>
    )
  }

  handleProfileClick = (photo) => {
    this.setState({ redirect: true })
  }
}

export default Photo
