import React from 'react'
import { connect } from "react-redux";
import { NavLink, Link } from 'react-router-dom'
import './CSS/Nav.css';

const navbar = (props) => {

  if (!!props.currentPhotoUser) {
    return (
      <div className="navbar">
        <Link to='/home'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/calendar'>Calendar</Link>
        <Link to='/logout'>LogOut</Link>
      </div>
    )
  } else {
    return (
      <div className="navbar">
        <Link to='/home'>Home</Link>
        <Link to='/sessions'>Sessions</Link>
        <Link to='/logout'>LogOut</Link>
      </div>
    )
  }

}



const mapStateToProps = (state) => {
  return {
    currentPhotoUser: state.currentPhotoUser.photoUser
  }
}

export default connect((mapStateToProps), null )(navbar)
