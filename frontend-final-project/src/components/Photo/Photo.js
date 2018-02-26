import React from 'react'


const photo = (props) => {

  return (
    <div className="photo">
      <img src={props.photo.img_src} alt="" />
      <br/>
      <div className="overlay"></div>
      <div className="photobutton" >
        <button className="button">View Profile</button>
        <br/><br/>
        <button className="button">Reserve</button>
      </div>
    </div>
  )

}


export default photo
