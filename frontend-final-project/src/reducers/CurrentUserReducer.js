export default function currentUserReducer(state = { user: null }, action) {
  //TODO: fill this bad boy out
  switch (action.type) {

    case "SET_CURRENT_USER":
      if (!localStorage.jwt){
        localStorage.setItem('jwt', action.payload.jwt)
      }

      if (!!action.payload.user) {
        return {...state, user: action.payload.user}
      } else {
        return state
      }

    case "LOG_OUT_USER":
      localStorage.clear()
      return {
        ...state,
        user: null
      }

    default:
      return state
  }
}
