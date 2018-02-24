import React from 'react'
import Photo from './Photo'
import Adapter from '../../adapter'
import { connect } from "react-redux";
import { fetchPhotos } from "../../actions";


class PhotoList extends React.Component {

  componentDidMount = () => {
    this.props.fetchPhotos()
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
    return this.props.photos.photos.map( (p) => {
      return(<Photo className="Photos" photo={p} key={p.id}/>)
    })
  }


  // fakeFilter = () => {
  //   let filtered = this.props.photos.filter( (p) => {
  //     let photoTags = p.tags.map( (t) => t.name )
  //
  //     return photoTags.filter( (t) {
  //         return this.props.filterTags.indexOf(t) > -1;
  //     }).length === this.props.filtersTags.length;
  //  });
  // }





}

// const mapStateToProps = () => {
//
// }



export default connect((state)=> ({photos: state.photos}), { fetchPhotos })(PhotoList)



// use with_router
