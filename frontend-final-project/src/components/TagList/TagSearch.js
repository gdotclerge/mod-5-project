import React from 'react'


class TagSearch extends React.Component {


  render = () => {
    return (
      <div>
        <input list="data" type="text" onChange={this.props.handleSearch}/>
        <datalist id="data" onSubmit={this.props.handleTagClick}>
            {this.props.tags.map( (t) =>
                <option value={t.name} onClick={this.props.handleTagClick} />
            )}
        </datalist>
      </div>
    )
  }

}


export default TagSearch
