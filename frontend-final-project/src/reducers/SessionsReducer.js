export default function sessionsReducer (
  state = { userSessions: [], photoUserSessions: [], selectedPhotographerOpenSessions: [], selectedPhotographerBookedSessions: [], loading:false },
  action
) {
  switch (action.type) {

    case "BOOK_SESSION":
      return {
        ...state,
        userSessions: action.payload
      };

    case "GET_SESSIONS":
      return {
        ...state,
        userSessions: action.payload
      };

    case "CANCEL_SESSION":
      return {
        ...state,
        userSessions: action.payload
      }

    case "SET_SELECTED_PHOTOGRAPHER":
      return {
        ...state,
        selectedPhotographerOpenSessions: action.payload.open_photo_sessions.map( (p)=>
                      ({
                        title: 'AVAILABLE',
                        start: p.start_date,
                        end: p.end_date,
                        allDay: true
                      })),
        selectedPhotographerBookedSessions: action.payload.booked_photo_sessions.map( (p)=>
                      ({
                        title: 'RESERVED',
                        start: p.start_date,
                        end: p.end_date,
                        allDay: true
                      })),
        loading: false
      }

      case "SESSION_LOAD":
        return {
          ...state,
          loading: true
        }

    default:
      return state;
  }
}
