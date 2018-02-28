import React from 'react'
import { handleTagRemoval } from "../../actions";



const tag = (props) => {

  return (
    <div>
      Price: ${props.packageItem.price} <br />
      Hours: {props.packageItem.hours} <br />
      Photos: {props.packageItem.photos_to_deliver} <br />
      <input type="checkbox" />
    </div>
  )

}


export default tag
