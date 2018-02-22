import React from 'react'
import TagList from './TagList'
import TagSearch from './TagSearch'
import Adapter from '../../adapter'



class TagsContainer extends React.Component {

  state = {
    selectedTags: [],
    tags: []
  }


  componentWillMount = () => {
    Adapter.getTags()
    .then(json => {
      this.setState({
        tags: json
      })
    })
  }

  render = () => {
    return (
      <div>
        <TagSearch handleSearch={this.handleSearch} tags={this.state.tags} />
        <TagList selectedTags={this.state.selectedTags}/>
      </div>
    )
  }


  handleSearch = (e) => {
    const selectedTag = this.state.tags.find( (t) => {
      return t.name === e.target.value
    })

    if (selectedTag){
      this.setState( (preState)=> {
        return {selectedTags: [...this.state.selectedTags, selectedTag]}
      })
      e.target.value = ""
    }
  }







}


export default TagsContainer
