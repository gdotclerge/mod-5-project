import React from 'react'
import { connect } from "react-redux";
import '../../CSS/Tag.css';


class TagSearch extends React.Component {

  render = () => {
    return (
      <div className="tag-search-container">
        <input id="search-tags" list="search-tag-data" type="text" onChange={this.props.handleSearch} placeholder="Search Tags"/>
        <datalist id="search-tag-data" >
            {this.props.tags.map( (t) => {
                let tagKey = `search-${t.id}`
                return <option value={t.name} key={tagKey}/>
            })}
        </datalist>
        <i class="material-icons" id="search-submit">search</i>
      </div>
    )
  }

}


export default connect((state)=> ({tags: state.tags.tags}))(TagSearch)
