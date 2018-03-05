import { RestfulAdapter } from "../adapters";
import Adapter from "../adapter";

// FUNCTIONS FOR USERS and PHOTO USERS

export function logIn(logInData) {
  return dispatch => {
    Adapter.logIn(logInData)
    .then(data => dispatch(setCurrentUser(data)))
  }
}

export function getLoggedInUser() {
  return dispatch => {
    Adapter.getLoggedInUser()
    .then(data => dispatch(setCurrentUser(data)))
  }
}

export function signUp(signUpData) {
  return dispatch => {
    Adapter.signUp(signUpData)
    .then(data => dispatch(setCurrentUser(data)))
  }
}

export function setCurrentUser(userData) {
  return {
    type: "SET_CURRENT_USER",
    payload: userData
  }
}

export function logOut() {
  return {
    type: "LOG_OUT_USER"
  }
}

// FUNCTIONS FOR PHOTOGRAPHERS

// export function fetchPhotographerURLs() {
//   return dispatch => {
//     Adapter.fetchPhotographerURLs()
//     .then(data => dispatch(setPhotographerPaths(data)))
//   }
// }

// export function setPhotographerPaths(photoURLs) {
//   return {
//     type: "SET_PHOTOGRAPHER_URLS",
//     payload: photoURLs
//   }
// }

export function fetchPhotographer(url) {
  return dispatch => {
    dispatch(loading())
    Adapter.fetchPhotographer(url)
    .then(data => dispatch(dispatchPhotographer(data)))
  }
}

export function dispatchPhotographer(photographerData) {
  return dispatch => {
    dispatch(setSelectedPhotographer(photographerData))
    dispatch(fetchPackages(photographerData.id))
  }
}

export function setSelectedPhotographer(photographerData) {
  return {
    type: "SET_SELECTED_PHOTOGRAPHER",
    payload: photographerData
  }
}

export function loading() {
  return {
    type: "LOADING"
  }
}







// export function fetchPhotographerforRoute(route) {
//   return dispatch => {
//     Adapter.fetchPhotographerforRoute(route)
//     .then(data => dispatch(setSelectedPhotographer(data)))
//   }
// }





// FUNCTIONS FOR PHOTOS
export function fetchPhotos() {
  return dispatch => {
    Adapter.getPhotos()
    .then(data => {
      dispatch({ type: "PHOTO_LOAD", payload: data });
    });
  };
}


// FUNCTIONS FOR TAGS
export function fetchTags() {
  console.log("i am in fetch tags")
  return dispatch => {
    Adapter.getTags()
    .then(data => {
      dispatch({ type: "TAG_LOAD", payload: data });
    });
  };
}

export function addSelectedTags(tag) {
  console.log("I am in add tags")
  return { type: "ADD_SELECTED_TAG", payload: tag }
}

export function removeSelectedTags(tag) {
  console.log("I am in remove tags")
  return { type: "REMOVE_SELECTED_TAG", payload: tag }
}

// FUNCTIONS FOR packages

export function fetchPackages(id) {
  return dispatch => {
    Adapter.fetchPackages(id)
    .then(data => { dispatch({ type: "SELECTED_PHOTOGRAPHER_PACKAGES", payload: data }) })
  }
}

// FUNCTIONS FOR SESSIONS

export function bookSession(sessionData) {
  return dispatch => {
    // dispatch(loading())
    Adapter.bookSession(sessionData)
    .then(data => { dispatch({ type: "BOOK_SESSION", payload: data }) })
  }
}

export function fetchSessions() {
  return dispatch => {
    Adapter.fetchSessions()
    .then(data => { dispatch({ type: "GET_SESSIONS", payload: data }) })
  }
}
