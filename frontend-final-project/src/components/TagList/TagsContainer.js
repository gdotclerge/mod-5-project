import React from 'react'
import TagList from './TagList'
import TagSearch from './TagSearch'
import Adapter from '../../adapter'
import { connect } from "react-redux";
import { fetchTags, addSelectedTags, removeSelectedTags } from "../../actions";



class TagsContainer extends React.Component {

  componentWillMount = () => {
    this.props.fetchTags()
  }

  render = () => {
    console.log(this.props.selectedTags)
    return (
      <div>
        <TagSearch handleSearch={this.handleSearch} />
        <TagList handleTagRemoval={this.handleTagRemoval}/>
      </div>
    )
  }


  handleSearch = (e) => {
    const selectedTag = this.props.tags.find( (t) => {
      return t.name === e.target.value
    })

    if (selectedTag){
      this.props.addSelectedTags(selectedTag)
      e.target.value = ""
    }
  }


  handleTagRemoval = (tag) => {
    this.props.removeSelectedTags(tag)

    // const index = this.state.selectedTags.indexOf(tag)
    // this.setState( (preState) => {
    //   preState.selectedTags.splice(index, 1)
    //   return {selectedTags: preState.selectedTags }
    // })
  }

}


const mapStateToProps = (state) => {
  return {
    tags: state.tags.tags,
    selectedTags: state.tags.selectedTags
  }
}



export default connect(mapStateToProps, { fetchTags, addSelectedTags, removeSelectedTags })(TagsContainer)
