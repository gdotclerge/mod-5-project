import React from 'react'
import { connect } from "react-redux";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.momentLocalizer(moment)

class Calendar extends React.Component {

  render = () => {
    return (
      <div className="calendar">
        <BigCalendar events={this.props.photoSessions} startAccessor='startDate' endAccessor='endDate' />
      </div>
    )
  }

  handleDateSubmit = (event) => {
    event.preventDefault()
    debugger
  }


}



const mapStateToProps = (state) => {
  return {
    selectedPhotographer: state.photographers.selectedPhotographer,
    photoSessions: state.photographers.selectedPhotographer.photo_sessions
  }
}

export default connect((mapStateToProps),null)(Calendar)
