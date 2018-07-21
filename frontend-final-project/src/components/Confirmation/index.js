import React from 'react'

class Confirmation extends React.Component {

  render = () => {
    console.log(this.props.session)
    return (
      <div>
        <h4>Confirmation</h4>
        <p>{this.props.session.session_type} Session </p>
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

        {this.props.session.hours} hour session at ${this.props.session.price}<br />
        <p>{this.props.session.min_photos} to {this.props.session.max_photos} delivered</p><br />
      </div>
    )
  }

  handleYesPlease = () => {

  }

  handleNoThanks = () => {

  }

}




export default Confirmation
