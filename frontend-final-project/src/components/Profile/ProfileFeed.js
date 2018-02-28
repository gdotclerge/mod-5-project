import React from 'react'
import { connect } from "react-redux";
import PhotoFeedItem from "./PhotoFeedItem";


class ProfileFeed extends React.Component {

  render = () => {
    return (
      <div>
        {this.createAlbums()}
      </div>
    )
  }

  createAlbums = () => {
    return this.props.photos.map( (p) => {
      return <PhotoFeedItem photo={p}/>
    })
  }

}


const mapStateToProps = (state) => {
  const photos = state.photos.photos.filter( (p)=> {
    return p.photographer_id === state.photographers.selectedPhotographer.id
  })

  return {
    photographer: state.photographers.selectedPhotographer,
    photos: photos
  }
}


export default connect((mapStateToProps), null)(ProfileFeed)
