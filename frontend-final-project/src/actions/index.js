import { RestfulAdapter } from "../adapters";
import Adapter from "../adapter";

export function fetchPhotos() {
  console.log("i am in fetch photos")
  return dispatch => {
    Adapter.getPhotos()
    .then(data => {
      dispatch({ type: "PHOTO_LOAD", payload: data });
    });
  };
}

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
