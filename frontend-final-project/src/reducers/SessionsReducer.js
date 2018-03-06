export default function sessionsReducer (
  state = { userSessions: [], photographerSessions: [], selectedPhotographerSessions: [] },
  action
) {
  switch (action.type) {

    case "BOOK_SESSION":
      return {
        ...state,
        userSessions: [...state.userSessions, action.payload]
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
        selectedPhotographerSessions: action.payload.photo_sessions.map( (p)=> 
                      ({
                        title: `${p.session_type} session`,
                        start: p.start_date,
                        end: p.end_date,
                        allDay: false
                      }))
      }

    default:
      return state;
  }
}
