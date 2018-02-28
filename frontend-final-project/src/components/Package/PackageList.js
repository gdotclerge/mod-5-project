import React from 'react'
import Package from './Package'


class PackageList extends React.Component {

  render = () => {
    return (
      <div>
        Packages
        {this.listPackages()}
      </div>
    )
  }

  listPackages = () => {
    return this.props.filteredPackages.map( (p) => {
      return(<Package packageItem={p} key={p.id} handlePackageSelection={this.props.handleTagRemoval}/>)
    })
  }

}


export default PackageList
