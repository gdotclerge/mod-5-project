import React from 'react'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/lib/react-responsive-modal.css';

class SessionModal extends React.Component {
  state = {
    open: false
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


  render = () => {
    const { open } = this.state;
    return (
      <div>
        <div onClick={this.onOpenModal}>
          {this.props.session.session_type} Session <br />
          Photography Company Name / Name of Photographer
        </div>
        <Modal open={open} onClose={this.onCloseModal} little>
          {this.props.session.session_type} Session <br />
          Photography Company Name / Name of Photographer <br />
          {this.props.session.start_date} <br />
          {this.props.session.address} <br />
          {this.props.session.city} <br />
          {this.props.session.state} <br />
          {this.props.session.zip} <br />
          {this.props.session.price} <br />
          {this.props.session.hours} <br />
          {this.props.session.min_photos} <br />
          {this.props.session.max_photos}
        </Modal>
      </div>
    )
  }


}

export default SessionModal
