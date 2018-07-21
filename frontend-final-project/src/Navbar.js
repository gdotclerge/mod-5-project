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
      <div className="nav-container">
        <div className="menu-button">Menu</div>
        <ul className="flexnav" data-breakpoint="800">
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/sessions'>Sessions</Link></li>
          <li><Link to="/welcome" onClick={ (e)=> handleLogOut()}>LogOut</Link></li>
        </ul>
      </div>
    )
  }

}

const handleLogOut = () => {
  localStorage.removeItem("jwt")
}


const mapStateToProps = (state) => {
  return {
    currentPhotoUser: state.currentPhotoUser.photoUser
  }
}

export default connect((mapStateToProps), null )(navbar)
