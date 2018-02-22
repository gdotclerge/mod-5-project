import React from 'react'
import Tag from './Tag'


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
      return(<Tag tag={t} key={t.id}/>)
    })
  }

}


export default TagList
