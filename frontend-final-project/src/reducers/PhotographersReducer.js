export default function photographersReducer(state = { photographer: null }, action) {
  //TODO: fill this bad boy out
  switch (action.type) {

    case "SET_CURRENT_PHOTOGRAPHER":
      localStorage.setItem('jwt', action.payload.jwt)
      return {...state, photographer: action.payload.photographer}

    default:
      return state
  }
}
