import React from 'react'
import Tag from './Tag'
import { connect } from "react-redux";


class TagList extends React.Component {

  render = () => {
    return (
      <div>
        {this.listTags()}
      </div>
    )
  }

  listTags = () => {
    return this.props.selectedTags.map( (t) => {
      return(<Tag tag={t} key={t.id} handleTagRemoval={this.props.handleTagRemoval}/>)
    })
  }

}


export default connect((state)=> ({selectedTags: state.tags.selectedTags}))(TagList)
