export default function sessionsReducer (
  state = { userSessions: [], photographerSessions: [], bookedSession: "", loading: false },
  action
) {
  switch (action.type) {

    case "BOOK_SESSION":
      return {
        ...state,
        userSessions: [...state.userSessions, action.payload]
      };

    case "BOOK_SESSION":
      return {
        ...state,
        bookedSession: action.payload,
        loading: false
      };

    case "GET_SESSIONS":
      return {
        ...state,
        userSessions: action.payload
      };

    case "LOADING":
      return {
        ...state,
        loading: true
      }

    default:
      return state;
  }
}
