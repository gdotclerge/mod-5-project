import React from 'react'
import { connect } from "react-redux";
import Calendar from "./Calendar";


class BookPhotographerForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    date: ""
  }

  render = () => {
    console.log(this.props.selectedPhotographer)
    console.log(this.state.lastname)
    console.log(this.state.date)
    return (
      <div>
        <input type="text" value={this.state.firstname} onChange={this.handleFirstName} placeholder="First Name"></input>
        <input type="text" value={this.state.lastname} onChange={this.handleLastName} placeholder="Last Name"></input>
        <br /> <br />
        <legend> Select Session Date </legend>
        <Calendar className='calendar-container' handleSelectSlot={this.handleSelectSlot} handleCalClick={this.handleCalClick}/>
        <textarea value={this.state.lastname} onChange={this.handleLastName} placeholder="Additional Notes..."></textarea>
        <button type="submit" onClick={this.handleSubmit}>Reserve Photo Session</button>
      </div>
    )
  }

  handleFirstName = (event) => {
    this.setState({ firstname: event.target.value })
  }

  handleLastName = (event) => {
    this.setState({ lastname: event.target.value })
  }

  handleDate = (event) => {
    this.setState({ date: event.target.value })
  }

  handleSelectSlot = (event) => {
    debugger
  }

  handleCalClick = (event) => {
    debugger
  }





  handleSubmit = (event) => {

    debugger
    // this.setState({ loggedIn: true })
    // this.props.loginPhotographer(this.state.username, this.state.password)
  }


}



const mapStateToProps = (state) => {
  return {
    selectedPhotographer: state.photographers.selectedPhotographer,
    photoSessions: state.photographers.selectedPhotographer.photo_sessions,
    packages: state.packages.packages
  }
}

export default connect((mapStateToProps),null)(BookPhotographerForm)
