export default function photographersReducer(state = { selectedPhotographer: null, photographerURLs: [], loading: false }, action) {
  //TODO: fill this bad boy out
  switch (action.type) {

    case "SET_PHOTOGRAPHER_URLS":
      return {
        ...state,
        photographerURLs: action.payload
      }

    case "SET_SELECTED_PHOTOGRAPHER":
      return {
        ...state,
        selectedPhotographer: action.payload,
        loading: false
      }

    case "LOADING":
      return {
        ...state,
        loading: true
      }










    case "SET_CURRENT_PHOTOGRAPHER":
      if (!localStorage.jwt){
        localStorage.setItem('jwt', action.payload.jwt)
      }
      return {
        ...state,
        loggedInPhotographer: action.payload.photographer,
        token: action.payload.jwt
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
