import React from 'react'
import { connect } from "react-redux";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


BigCalendar.momentLocalizer(moment)

class Calendar extends React.Component {
  state = {
    allEvents: [...this.props.openSessions, ...this.props.bookedSessions]
  }

  render = () => {
    return (
      <div className="calendar">

        <BigCalendar
          selectable
          events={this.state.allEvents}
          defaultView="month"
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2018, 3, 12)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={slotInfo => this.props.handleSelectSlot(
            [slotInfo.start.toLocaleString(), slotInfo.end.toLocaleString()]
          ) }
        />
      </div>
    )
  }

  setEvents = (selectedDate) => {
    // this.props.handleSelectSlot(selectedDate)
    this.setState( (preState) => {
      allEvents: [...preState.allEvents, {
        title: 'My Session',
        start: selectedDate[0],
        end: selectedDate[1],
        allDay: false
      }]
    })
  }

}



const mapStateToProps = (state) => {
  return {
    openSessions: state.sessions.selectedPhotographerOpenSessions,
    bookedSessions: state.sessions.selectedPhotographerBookedSessions
  }
}

export default connect((mapStateToProps),null)(Calendar)
