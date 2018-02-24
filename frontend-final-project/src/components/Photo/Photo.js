import React from 'react'


const photo = (props) => {

  return (
    <div>
      <img src={props.photo.img_src} />
      <br/>
      <button>View Profile</button>
      <button>Reserve</button>
    </div>
  )

}


export default photo
