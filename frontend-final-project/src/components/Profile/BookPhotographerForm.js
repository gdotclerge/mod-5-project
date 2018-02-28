import React from 'react'
import { connect } from "react-redux";


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
      <form onSubmit={this.handleBookSubmit}>
        <input type="text" value={this.state.firstname} onChange={this.handleFirstName} placeholder="First Name"></input>
        <input type="text" value={this.state.lastname} onChange={this.handleLastName} placeholder="Last Name"></input>
        <input type="datetime-local" value={this.state.date} oninput={this.handleDate} min="2018-01-02" />
        <button type="submit">Book</button>
      </form>
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

  handleBookSubmit = (event) => {
    event.preventDefault()
    debugger
    // this.setState({ loggedIn: true })
    // this.props.loginPhotographer(this.state.username, this.state.password)
  }


}



const mapStateToProps = (state) => {
  return {
    selectedPhotographer: state.photographers.selectedPhotographer
  }
}

export default connect((mapStateToProps),null)(BookPhotographerForm)
