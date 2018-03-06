import React from 'react'
import { connect } from "react-redux";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../../CSS/Calendar.css';

BigCalendar.momentLocalizer(moment)

class Calendar extends React.Component {

  render = () => {
    return (
      <div className="calendar">

        <BigCalendar
          selectable
          events={this.props.photographerSessions}
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

}



const mapStateToProps = (state) => {
  return {
    selectedPhotographer: state.photographers.selectedPhotographer,
    photographerSessions: state.sessions.selectedPhotographerSessions
  }
}

export default connect((mapStateToProps),null)(Calendar)
