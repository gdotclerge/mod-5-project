import React from 'react'
import { connect } from "react-redux";
import { NavLink, Link } from 'react-router-dom'

const navbar = (props) => {
  return(
    <div className="Navbar">
      <Link to='/home'>Home</Link>
      {loggedInPhotographerNavbar(props)}
      { props.loggedInPhotographer ? <Link to='/logout'>LogOut</Link> : <Link to='/login'>Log In</Link> }
    </div>
  )
}

  const loggedInPhotographerNavbar = (props) => {
    if (props.loggedInPhotographer){
      return(
        <div>
          <Link to='/profile'>Profile</Link>
          <Link to='/calendar'>Calendar</Link>
        </div>
      )
    }
  }



export default connect((state) => ({loggedInPhotographer: state.photographers.loggedInPhotographer}), null )(navbar)
