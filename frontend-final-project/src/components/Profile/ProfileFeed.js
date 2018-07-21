import React from 'react'
import { connect } from "react-redux";
import PhotoFeedItem from "../Photo/PhotoFeedItem";

class ProfileFeed extends React.Component {
  render = () => {
    return (
      <div className="photo-feed">
        {this.createAlbums()}
      </div>
    )
  }

  createAlbums = () => {
    return this.props.photos.map( (p) => {
      return <PhotoFeedItem photo={p} key={p.id}/>
    })
  }
}


const mapStateToProps = (state) => {
  const photos = state.photos.photographerPhotos.filter( (p)=> {
    return p.profileURL === state.photographers.selectedPhotographer.custom_url
  })

  return {
    photographer: state.photographers.selectedPhotographer,
    photos: photos
  }
}

export default connect((mapStateToProps), null)(ProfileFeed)
