import React from 'react'
import PackageList from './PackageList'
import { connect } from "react-redux";
import { fetchTags, addSelectedTags, removeSelectedTags } from "../../actions";


class PackageContainer extends React.Component {
  state = {
    selectedTag: "Blogger"
  }

  render = () => {
    return (
      <div>
        <select onChange={this.handleSelectionChange}>
          {this.mapTagOptions()}
        </select>
        <PackageList filteredPackages={this.filteredPackages()} handleTagRemoval={this.handleTagRemoval}/>
      </div>
    )
  }

  mapTagOptions = () => {
    return this.props.photographerTags.map( (pt) => {
      let key = `${pt}-option`;
      return <option value={pt}>{pt}</option>
    })
  }

  handleSelectionChange = (e) => {
    debugger
    // needs to change state to handle list
  }

  filteredPackages = () => {
    return this.props.packages.filter( p => {
      let tags = p.tags.map( t => { return t.name })
	    return tags.filter( t => { return t === "Blogger" }).length === tags.length
    })
  }





  //
  // handleSearch = (e) => {
  //   const selectedTag = this.props.tags.find( (t) => {
  //     return t.name === e.target.value
  //   })
  //
  //   if (selectedTag){
  //     this.props.addSelectedTags(selectedTag)
  //     e.target.value = ""
  //   }
  // }
  //
  // handleTagRemoval = (tag) => {
  //   this.props.removeSelectedTags(tag)
  // }

}




const mapStateToProps = (state) => {
  let tags = state.packages.packages.map( (p) => {
    return p.tags.map( t => {
        return t.name
  })})

  return {
    packages: state.packages.packages,
    photographerTags: tags
  }
}


export default connect((mapStateToProps), { fetchTags, addSelectedTags, removeSelectedTags })(PackageContainer)
