import React from 'react'

class Confirmation extends React.Component {

  render = () => {
    return (
      <div>
        <h4>Confirmation</h4>
        {this.props.session.session_type} Session <br />
        Photography Company Name / Name of Photographer <br />
        {this.props.session.start_date} <br />
        {this.props.session.address} <br />
        {this.props.session.city} <br />
        {this.props.session.state} <br />
        {this.props.session.zip} <br />
        {this.props.session.price} <br />
        {this.props.session.hours} <br />
        <p>Between {this.props.session.min_photos} and {this.props.session.max_photos} delivered</p><br />
        <p>Would like a confirmation of your session sent to your email?</p>
        <button onClick={this.handleYesPlease}>Yes Please!</button>
        <button onClick={this.handleNoThanks}>No Thanks</button>
      </div>
    )
  }

  handleYesPlease = () => {

  }

  handleNoThanks = () => {

  }

}




export default Confirmation
