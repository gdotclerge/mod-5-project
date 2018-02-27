import { RestfulAdapter } from "../adapters";
import Adapter from "../adapter";

// FUNCTIONS FOR PHOTOGRAPHERS
export function fetchAllPhotographersURLs() {
  return dispatch => {
    Adapter.fetchAllPhotographersURLs()
    .then(data => dispatch(setPhotographerURLs(data)))
  }
}

export function setPhotographerURLs(photographersURLs) {
  return {
    type: "SET_PHOTOGRAPHER_URLS",
    payload: photographersURLs
  }
}


export function loginPhotographer(username, password) {
  console.log(username)
  return dispatch => {
    Adapter.loginPhotographer({username, password})
    .then(data => dispatch(setCurrentPhotographer(data)))
  }
}

export function getLoggedInPhotographer() {
  return dispatch => {
    Adapter.getLoggedInPhotographer()
    .then(data => {
      if (data) {
        console.log("Your token returned: ", data);
        dispatch(setCurrentPhotographer(data))
      } else {
        console.log('token returned null, render login page')
      }
    })
  }
}

export function setCurrentPhotographer(photographerData) {
  return {
    type: "SET_CURRENT_PHOTOGRAPHER",
    payload: photographerData
  }
}

export function fetchPhotographer(id) {
  return dispatch => {
    Adapter.fetchPhotographer(id)
    .then(data => dispatch(setSelectedPhotographer(data)))
  }
}

export function fetchPhotographerforRoute(route) {
  return dispatch => {
    Adapter.fetchPhotographerforRoute(route)
    .then(data => dispatch(setSelectedPhotographer(data)))
  }
}

export function setSelectedPhotographer(photographerData) {
  return {
    type: "SET_SELECTED_PHOTOGRAPHER",
    payload: photographerData
  }
}



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



// export function selectHobbit(hobbit) {
//   return { type: "SELECT_HOBBIT", payload: hobbit };
// }



// export function selectHobbit(hobbit) {
//   return { type: "SELECT_HOBBIT", payload: tag };
// }
//
// export function updateHobbit({ id, name, title, key_skill }) {
//   return dispatch => {
//     RestfulAdapter.editFetch("hobbits", id, {
//       hobbit: { name, title, key_skill }
//     }).then(data => {
//       dispatch(setHobbit(data));
//     });
//   };
// }




//
// export function selectHobbit(hobbit) {
//   return { type: "SELECT_HOBBIT", payload: hobbit };
// }
//
// export function updateHobbit({ id, name, title, key_skill }) {
//   return dispatch => {
//     RestfulAdapter.editFetch("hobbits", id, {
//       hobbit: { name, title, key_skill }
//     }).then(data => {
//       dispatch(setHobbit(data));
//     });
//   };
// }

// export function setPhoto(photo) {
//   return { type: "SET_PHOTO", payload: photo };
// }

// export function updateForm(formData) {
//   return { type: "UPDATE_FORM", payload: formData };
// }
