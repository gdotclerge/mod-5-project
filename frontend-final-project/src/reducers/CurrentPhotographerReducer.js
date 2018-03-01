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

    case "LOG OUT PHOTOGRAPHER":
      localStorage.clear()
      return {
        ...state,
        loggedInPhotographer: null
      }

    default:
      return state
  }
}
