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
    return (
      <div className="tags-container">
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
  }

}




export default connect((state) => ({tags: state.tags.tags}), { fetchTags, addSelectedTags, removeSelectedTags })(TagsContainer)
