import React from 'react'
import Photo from './Photo'
import Adapter from '../../adapter'
import { connect } from "react-redux";
import { fetchPhotos } from "../../actions";


class PhotoList extends React.Component {
  // state = {
  //   photos: [],
  //   filterBy: []
  // }


  componentDidMount = () => {
    this.props.fetchPhotos()
    // Adapter.getPhotos()
    // .then(json => {
    //   this.setState({
    //     photos: json
    //   })
    // })
  }


  render = () => {
    return (
      <div>
        PhotoList
        {this.allPhotos()}
      </div>
    )
  }


  allPhotos = () => {
    return this.props.photos.map( (p) => {
      return(<Photo photo={p} key={p.id}/>)
    })
  }


  // filteredPhotos = () => {
    // this.state.filterBy.each( (f) => {
    //    this.state.photos.filter( (p) => {
    //
    //    })
    // })

  //   return this.state.photos.map( (p) => {
  //     return(<Photo photo={p} key={p.id}/>)
  //   })
  // }


}


export default connect((state)=> ({photos: state.photos}), { fetchPhotos })(PhotoList)
