import React from 'react'
import Photo from './Photo'
import Adapter from '../../adapter'


class PhotoList extends React.Component {
  state = {
    photos: []
  }


  componentDidMount = () => {
    Adapter.getPhotos()
    .then(json => {
      this.setState({
        photos: json
      })
    })
  }


  render = () => {
    return (
      <div>
        PhotoList
        {this.mapPhotos()}
      </div>
    )
  }


  mapPhotos = (props) => {
    return this.state.photos.map( (p) => {
      return(<Photo photo={p} key={p.id}/>)
    })
  }


}


export default PhotoList
