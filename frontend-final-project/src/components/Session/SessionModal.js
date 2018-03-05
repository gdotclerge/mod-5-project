import React from 'react'
import { cancelSession } from "../../actions";
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/lib/react-responsive-modal.css';

class SessionModal extends React.Component {
  state = {
    openFirstModal: false,
    openSecondModal: false,
  }

  onOpenFirstModal = () => {
    this.setState({ openFirstModal: true });
  };

  onCloseFirstModal = () => {
    this.setState({ openFirstModal: false });
  };

  onOpenSecondModal = () => {
    this.setState({ openSecondModal: true });
  };

  onCloseSecondModal = () => {
    this.setState({ openSecondModal: false });
  };


  render = () => {
    const { openFirstModal, openSecondModal } = this.state;
    return (
      <div>
        <div onClick={this.onOpenFirstModal}>
          {this.props.session.session_type} Session <br />
          <h4>Photography Company Name / Name of Photographer</h4>
        </div>

        <Modal open={openFirstModal} onClose={this.onCloseFirstModal} little>
          <h4>Photography Company Name </h4>
          <p>{this.props.session.session_type} Photography Session</p>

          <p>
            Date: {this.props.session.start_date}
          </p>
          <p>
            Location: <br/>
            {this.props.session.address} <br/>
            {this.props.session.city} <br/>
            {this.props.session.state} <br/>
            {this.props.session.zip}
          </p>
          <p>
            {this.props.session.hours} hour session at ${this.props.session.price}<br/>
            {this.props.session.min_photos} to {this.props.session.max_photos} photos to be delivered
          </p>
          <button onClick={this.onOpenSecondModal}>Cancel Session</button>
        </Modal>


        <Modal open={openSecondModal} onClose={this.onCloseSecondModal} little>
          <p> Are you sure you want to cancel your session? </p>
          <button onClick={this.handleCancel}>Yes</button>
          <button onClick={this.onCloseSecondModal}>No</button>
        </Modal>
      </div>
    )
  }

  handleCancel = (event) => {
    this.props.cancelSession(this.props.session.id)
  }

}


export default connect(null,{ cancelSession })(SessionModal)
