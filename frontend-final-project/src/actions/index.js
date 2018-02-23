import { RestfulAdapter } from "../adapters";
import Adapter from "../adapter";

export function fetchPhotos() {
  return dispatch => {
    dispatch({ type: "PHOTOS_LOADING" });
    Adapter.getPhotos()
    .then(data => {
      dispatch({ type: "PHOTO_LOAD", payload: data });
    });
  };
}
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

export function setPhoto(photo) {
  return { type: "SET_PHOTO", payload: photo };
}

// export function updateForm(formData) {
//   return { type: "UPDATE_FORM", payload: formData };
// }
