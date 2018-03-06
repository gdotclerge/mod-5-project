import React from 'react'
import { connect } from "react-redux";
import Calendar from "../Calendar";
import PackageContainer from '../Package/PackageContainer'
import Confirmation from '../Confirmation'
import { bookSession } from '../../actions'
import { Redirect } from 'react-router-dom';
import Modal from 'react-responsive-modal/lib/css'
import 'react-responsive-modal/lib/react-responsive-modal.css';

class UpdateSessionForm extends React.Component {
  state = {
    start_date: new Date(this.props.session.start_date).toString().split(" "),
    end_date: this.props.session.end_date,
    address: this.props.session.address,
    city: this.props.session.city,
    state: this.props.session.state,
    zip: this.props.session.zip,
    additional_notes: this.props.session.additional_notes,
    photographer_id: this.props.session.photographer_id,
    user_id: this.props.currentUser.id,
    price: this.props.session.price,
    hours: this.props.session.hours,
    min_photos: this.props.session.min_photos,
    max_photos: this.props.session.max_photos,
    session_type: this.props.session.session_type,
    open: false,
    redirect: false
  }

  render = () => {
    console.log(this.props.session)
    console.log(this.state.state)
    if (this.state.redirect){
      return <Redirect to="/sessions" />
    }


    return (
      <div>
        <h4> Photographer Name </h4>
        <p>{this.state.session_type} Photography Session</p>
        <p>
          {this.state.hours} hour session at ${this.state.price} <br/>
          {this.state.min_photos} to {this.state.max_photos} photos to be delivered
        </p>
        <p>
          Date: {this.state.start_date[0]} {this.state.start_date[1]} {this.state.start_date[2]}
        </p>

        <br/>
        Update Details <br/>
        <input type="text" value={this.state.address} onChange={this.handleChange} placeholder="Address" name="address"></input> <br />
        <input type="text" value={this.state.city} onChange={this.handleChange} placeholder="City" name="city"></input> <br />
        <input type="text" value={this.state.state} onChange={this.handleChange} placeholder="State" name="state"></input> <br />
        <input type="text" value={this.state.zip} onChange={this.handleChange} placeholder="Zip Code" name="zip"></input> <br />
        <textarea value={this.state.additional_notes} onChange={this.handleChange} placeholder="Additional Notes..." name="additional_notes"></textarea> <br />
        <button type="submit" onClick={this.handleSubmit}>Update Session</button>
        <button type="submit" onClick={this.handleSubmit}>Cancel Session</button>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSelectSlot = (selectedDate) => {
    this.setState({ start_date: selectedDate[0], end_date: selectedDate[1] })
  }

  handlePackageSelection = (packageItem) => {
    this.setState({
      price: packageItem.price,
      hours: 1,
      min_photos: 8,
      max_photos: 10,
      session_type: packageItem.tags[0].name
    })
  }

  handleSubmit = (event) => {
    this.setState({ open: true });
  }

}



const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
    selectedPhotographer: state.photographers.selectedPhotographer,
    packages: state.packages.packages,
  }
}

export default connect((mapStateToProps),{ bookSession })(UpdateSessionForm)
