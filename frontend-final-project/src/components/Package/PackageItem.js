import React from 'react'

const packageItem = (props) => {
  return (
    <div>
      Price: ${props.packageItem.price} <br />
      Hours: {props.packageItem.hours} <br />
      Photos: {props.packageItem.photos_to_deliver} <br />
      <input type="checkbox" value={props.packageItem.id} onChange={ (event) => props.handlePackageSelection(props.packageItem) }/>
    </div>
  )
}

export default packageItem
