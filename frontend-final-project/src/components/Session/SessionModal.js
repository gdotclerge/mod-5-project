import React from 'react'
import Modal from 'react-modal'

const sessionModal = (props) => {

  return (
    <div id="myModal" class="modal">
      {props.session.session_type} Session
      Photography Company Name / Name of Photographer
      {props.session.start_date}
      {props.session.address}
      {props.session.city}
      {props.session.state}
      {props.session.zip}
      {props.session.price}
      {props.session.hours}
      {props.session.min_photos}
      {props.session.max_photos}
    </div>
  )

}

export default sessionModal


<!-- Trigger/Open The Modal -->
<button id="myBtn">Open Modal</button>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
