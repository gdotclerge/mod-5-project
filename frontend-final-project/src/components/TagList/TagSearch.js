import React from 'react'
import { connect } from "react-redux";


class TagSearch extends React.Component {

  render = () => {
    return (
      <div className="tag-search">
        <input list="data" type="text" onChange={this.props.handleSearch} placeholder="Search Tags"/>
        <datalist id="data" >
            {this.props.tags.map( (t) => {
                let tagKey = `search-${t.id}`
                return <option value={t.name} key={tagKey}/>
            })}
        </datalist>
      </div>
    )
  }

}


export default connect((state)=> ({tags: state.tags.tags}))(TagSearch)
