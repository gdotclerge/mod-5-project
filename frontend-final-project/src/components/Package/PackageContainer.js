import React from 'react'
import PackageList from './PackageList'
import { connect } from "react-redux";

class PackageContainer extends React.Component {
  state = {
    selectedTag: this.props.photographerTags[0],
    filteredPackages: []
  }

  componentDidMount = () => {
    let filteredPackages = this.filterPackages(this.props.photographerTags[0])
    this.setState({ filteredPackages })
  }

  render = () => {
    return (
      <div>
        <select onChange={ (e) => {this.handleSelectionChange(e)} }>
          {this.mapTagOptions()}
        </select>
        <PackageList filteredPackages={this.state.filteredPackages} handlePackageSelection={this.props.handlePackageSelection}/>
      </div>
    )
  }

  mapTagOptions = () => {
    return this.props.photographerTags.map( (pt) => {
      let optionKey = `${pt}-option`;
      return <option value={pt} key={optionKey}>{pt}</option>
    })
  }

  handleSelectionChange = (e) => {
    let filteredPackages = this.filterPackages(e.target.value)
    this.setState({
      selectedTag: e.target.value,
      filteredPackages: filteredPackages
    })
  }

  filterPackages = (selectedTag) => {
    return this.props.packages.filter( p => {
      let tags = p.tags.map( t => { return t.name })
	    return tags.filter( t => { return t == selectedTag }).length > 0
    })
  }
}




const mapStateToProps = (state) => {
  let tags = state.packages.packages.map( (p) => {
    return p.tags.map( t => {
        return t.name
  })})
  let mergedTags = [].concat.apply([], tags);

  return {
    photographer: state.photographers.selectedPhotographer,
    packages: state.packages.packages,
    photographerTags: mergedTags.unique()
  }
}


export default connect((mapStateToProps), null)(PackageContainer)



Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.includes(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}
