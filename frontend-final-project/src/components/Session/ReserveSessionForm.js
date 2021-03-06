import React from 'react'
import { connect } from "react-redux";
import Calendar from "../Calendar";
import PackageContainer from '../Package/PackageContainer'
import Confirmation from '../Confirmation'
import { bookSession } from '../../actions'
import { Redirect, withRouter } from 'react-router-dom';
import Modal from 'react-responsive-modal/lib/css'
import 'react-responsive-modal/lib/react-responsive-modal.css';
import '../../CSS/PhotoSession.css';
import { Form } from 'semantic-ui-react'

class ReserveSessionForm extends React.Component {
  state = {
    start_date: "",
    end_date: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    additional_notes: "",
    photographer_id: this.props.selectedPhotographer.id,
    user_id: this.props.currentUser.id,
    price: "",
    hours: "",
    min_photos: "",
    max_photos: "",
    session_type: "",
    reserved: true,
    open: false,
    redirect: false
  }

  render = () => {
    if (this.state.redirect){
      return <Redirect to="/sessions" />
    }


    const { open } = this.state;
    return (
      <div className="reserve-session-form">

        <div>
          <Calendar className='calendar-container' handleSelectSlot={this.handleSelectSlot} handleCalClick={this.handleCalClick}/>
          <Form className="session-form">
            <Form.Field>
              <input type="text" value={this.state.address} onChange={this.handleChange} placeholder="Address" name="address"></input> <br />
              <input type="text" value={this.state.city} onChange={this.handleChange} placeholder="City" name="city"></input> <br />
              <input type="text" value={this.state.state} onChange={this.handleChange} placeholder="State" name="state"></input> <br />
              <input type="number" value={this.state.zip} onChange={this.handleChange} placeholder="Zip Code" name="zip"></input> <br />
              <textarea value={this.state.additional_notes} onChange={this.handleChange} placeholder="Additional Notes..." name="additional_notes"></textarea>
            </Form.Field>
          </Form>

          <div className="reserve-session-button">
            <button className="profile-card-button" onClick={this.handleSubmit}>Reserve</button>
          </div>
        </div>

        <PackageContainer handlePackageSelection={this.handlePackageSelection}/>



        <Modal
          open={open}
          onClose={this.onCloseModal}
          little
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
          }}
          animationDuration={1000}
        >
          <Confirmation session={this.state} />
        </Modal>
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

  onCloseModal = () => {
    this.props.bookSession(this.state)
    this.props.history.push("/sessions")
  }

}




const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
    selectedPhotographer: state.photographers.selectedPhotographer,
    photoSessions: state.photographers.selectedPhotographer.photo_sessions,
    packages: state.packages.packages,
  }
}

export default withRouter(connect((mapStateToProps),{ bookSession })(ReserveSessionForm))


//
// <Form.Input fluid label='Address' placeholder="Address" name="address" value={this.state.address} onChange={this.handleChange} />
// <Form.Input fluid label='City' placeholder="City" name="city" value={this.state.city} onChange={this.handleChange} />
// <Form.Input fluid label='State' placeholder="State" name="state" value={this.state.state} onChange={this.handleChange} />
// <Form.TextArea label='Notes' placeholder='Tell us more...' name="additional_notes" value={this.state.additional_notes} onChange={this.handleChange}/>
