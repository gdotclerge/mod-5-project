import React from 'react'
import { Redirect } from 'react-router-dom';
import '../../CSS/Photo.css';

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
        <div className="container reflection">
          <img className="photo" src={this.props.photo.img_src} alt="" />
          <div className="overlay"></div>
          <button className="button" onClick={ (e)=> {this.handleProfileClick(this.props.photo)} } >@{this.props.photo.photoUser}</button>
        </div>
      </div>
    )
  }

  handleProfileClick = (photo) => {
    this.setState({ redirect: true })
  }
}

export default Photo
