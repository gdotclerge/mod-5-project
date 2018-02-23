import React from 'react'


const photo = (props) => {

  return (
    <div>
      <img src={props.photo.img_src} />
      <img src="https://www.edgarsmission.org.au/wp-content/uploads/2015/03/Penelope8.jpg"/> <br/>
      <button>View Profile</button>
      <button>Reserve</button>
    </div>
  )

}


export default photo
