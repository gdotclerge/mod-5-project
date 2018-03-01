import React from 'react'
import { connect } from "react-redux";
import { NavLink, Link } from 'react-router-dom'

const navbar = (props) => {

  if (!!props.currentPhotoUser) {
    return (
      <div className="Navbar">
        <Link to='/home'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/calendar'>Calendar</Link>
        <Link to='/logout'>LogOut</Link>
      </div>
    )
  } else {
    return (
      <div className="Navbar">
        <Link to='/home'>Home</Link>
        <Link to='/logout'>LogOut</Link>
      </div>
    )
  }

}



const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
    currentPhotoUser: state.currentPhotoUser.photoUser
  }
}



export default connect((mapStateToProps), null )(navbar)
