import React from 'react'


class PhotoAlbum extends React.Component {



  render = () => {
    return (
      <div className="photo">
        <img src={this.props.photo.img_src} alt="" />
        <br/>
        <div className="overlay"></div>
        <div className="photobutton" >
          <h3>Wedding</h3>
        </div>
      </div>
    )
  }

}




export default PhotoAlbum
