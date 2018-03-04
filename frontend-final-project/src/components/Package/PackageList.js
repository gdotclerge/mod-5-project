import React from 'react'
import PackageItem from './PackageItem'

const packageList = (props) => {
  return (
    <div>
      Packages
      {listPackages(props)}
    </div>
  )
}

const listPackages = (props) => {
  return props.filteredPackages.map( (p) => {
    return(<PackageItem packageItem={p} key={p.id} handlePackageSelection={props.handleTagRemoval}/>)
  })
}

export default packageList
