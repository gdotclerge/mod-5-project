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
    return this.props.photos.map( (p) => {
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

const mapStateToProps = (state) => {
  const filteredPhotos = state.photos.photos.filter( (p) => {
    let photoTags = p.tags.map( (pt) => pt.name )

    return state.tags.selectedTags.filter( (t) => {
      return photoTags.indexOf(t.name) > -1;
    }).length === state.tags.selectedTags.length
  })


  return {
    photos: filteredPhotos
  }
}


export default connect((mapStateToProps), { fetchPhotos })(PhotoList)



// use with_router
