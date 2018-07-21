import React from 'react'
import { cancelSession, load } from "../../actions";
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/lib/react-responsive-modal.css';
import { Card, Icon, Image } from 'semantic-ui-react'
import Loading from '../Loading';

class SessionModal extends React.Component {
  state = {
    openFirstModal: false,
    openSecondModal: false,
    date: new Date(this.props.session.start_date).toString().split(" ")
  }

  componentDidMount = () => {
    this.props.load()
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
    console.log(this.props.session)
  


    const { openFirstModal, openSecondModal } = this.state;
    return (
      <div>
        <div className="my-session" onClick={this.onOpenFirstModal}>
          <Card className="my-session-card">
            <div className="my-session-image-container">
              <Image src={this.props.session.photographer.profile_photo} className="session-card-image"/>
            </div>
            <Card.Content>
              <Card.Header>
                {this.props.session.session_type} Photography Session
              </Card.Header>
              <Card.Description>
                Date: {this.state.date[0]} {this.state.date[1]} {this.state.date[2]}
              </Card.Description>
            </Card.Content>
          </Card>
        </div>

        <Modal open={openFirstModal} onClose={this.onCloseFirstModal} className="my-session-modal"little>
          <h4>@{this.props.session.photographer.username} </h4>
          <p>{this.props.session.session_type} Photography Session</p>

          <p>
            Date: {this.state.date[0]} {this.state.date[1]} {this.state.date[2]}
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
          <button onClick={ (e)=> this.props.handleUpdate(this.props.session) } className="my-session-modal-button" >Update</button>
          <button onClick={this.onOpenSecondModal} className="my-session-modal-button" >Cancel</button>
        </Modal>


        <Modal open={openSecondModal} onClose={this.onCloseSecondModal} little>
          <br/><br/>
          <p> Are you sure you want to cancel your session? </p>
          <button onClick={this.handleCancel} className="my-session-modal-button">Yes</button>
          <button onClick={this.onCloseSecondModal} className="my-session-modal-button">No</button>
        </Modal>
      </div>
    )
  }

  handleCancel = (event) => {
    this.props.cancelSession(this.props.session.id)
  }



}


export default connect((state)=>({ loading: state.sessions.loading }),{ cancelSession, load })(SessionModal)
