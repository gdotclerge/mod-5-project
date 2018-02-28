import React from 'react'
import Photo from './Photo'
import Adapter from '../../adapter'
import { connect } from "react-redux";
import { fetchPhotos } from "../../actions";


class PhotoList extends React.Component {

  // componentDidMount = () => {
  //   this.props.fetchPhotos()
  // }

  render = () => {
    console.log("rendered Photo List")
    return (
      <div>
        {this.allPhotos()}
      </div>
    )
  }

  allPhotos = () => {
    return this.props.photos.map( (p) => {
      return(<Photo className="Photos" photo={p} key={p.id}/>)
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


export default connect((mapStateToProps), { fetchPhotos })(PhotoList)



// use with_router
