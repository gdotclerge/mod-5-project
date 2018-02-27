export default function photographersReducer(state = { loggedInPhotographer: null, selectedPhotographer: null, photographerURLs: [] }, action) {
  //TODO: fill this bad boy out
  switch (action.type) {

    case "SET_PHOTOGRAPHER_URLS":
      return {
        ...state,
        photographerURLs: action.payload
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


    case "SET_SELECTED_PHOTOGRAPHER":
      localStorage.setItem('selectedPhotographer', action.payload.id)
      return {
        ...state,
        selectedPhotographer: action.payload
      }





    default:
      return state
  }
}
