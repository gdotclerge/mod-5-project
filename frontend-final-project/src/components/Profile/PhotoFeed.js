import React from 'react'
import { connect } from "react-redux";
import PhotoAlbum from "./PhotoAlbum";


class PhotoFeed extends React.Component {

  render = () => {
    return (
      <div>
        {this.createAlbums()}
      </div>
    )
  }

  createAlbums = () => {
    return this.props.photos.map( (p) => {
      return <PhotoAlbum photo={p}/>
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


export default connect((mapStateToProps), null)(PhotoFeed)
