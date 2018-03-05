export default function sessionsReducer (
  state = { userSessions: [], photographerSessions: [] },
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

    default:
      return state;
  }
}
