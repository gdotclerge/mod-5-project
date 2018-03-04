import React from 'react'
import Photo from './Photo'
import { connect } from "react-redux";

class PhotoList extends React.Component {
  render = () => {
    return (
      <div className="photo-list">
        {this.allPhotos()}
      </div>
    )
  }

  allPhotos = () => {
    return this.props.photos.map( (p) => {
      return(<Photo photo={p} key={p.id} />)
    })
  }

}



const mapStateToProps = (state) => {
  const filteredPhotos = state.photos.photos.filter( (p) => {
    return state.tags.selectedTags.filter( (t) => {
      return p.tag.id === t.id;
    }).length === state.tags.selectedTags.length
  })
  return {
    photos: filteredPhotos
  }
}

export default connect((mapStateToProps), null)(PhotoList)
