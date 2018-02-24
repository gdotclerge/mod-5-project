import React from 'react'


const photo = (props) => {

  return (
    <div className="photo">
      <img src={props.photo.img_src} alt="" />
      <br/>
      <div className="overlay"></div>
      <div className="photobutton" >
        <button>View Profile</button>
        <button>Reserve</button>
      </div>
    </div>
  )

}


export default photo
