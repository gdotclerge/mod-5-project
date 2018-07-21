import React from 'react'

class PhotoFeedItem extends React.Component {

  render = () => {
    console.log(this.props.photo)
    return (
      <div className="photo-feed-container">
        <div className="feed-container reflection">
          <img className="feed-photo" src={this.props.photo.img_src} alt="" />
          <div className="overlay"></div>
          <h4 className="feed-album-title">Wedding</h4>
        </div>
      </div>
    )
  }

}

export default PhotoFeedItem
