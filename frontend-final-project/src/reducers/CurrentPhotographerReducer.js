export default function currentPhotographerReducer(state = { photoUser: null }, action) {
  //TODO: fill this bad boy out
  switch (action.type) {

    case "SET_CURRENT_USER":
      if (!localStorage.jwt){
        localStorage.setItem('jwt', action.payload.jwt)
      }

      if (!!action.payload.photographer) {
        return {...state, photoUser: action.payload.photographer}
      } else {
        return state
      }

    case "LOG_OUT_USER":
      localStorage.clear()
      return {
        ...state,
        photoUser: null
      }

    default:
      return state
  }
}
