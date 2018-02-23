export default function photoReducer(
  state = { photos: [], selectedPhoto: null, loading: false, formData: {name: "", title: "", key_skill: ""} },
  action
) {
  switch (action.type) {
    // case "HOBBITS_LOADING":
    //   return {
    //     ...state,
    //     loading: true
    //   }
    case "PHOTO_LOAD":
      return {
        ...state,
        photos: action.payload,
        loading: false
      };
      
    // case "SELECT_HOBBIT":
    //   return {
    //     ...state,
    //     formData: action.payload
    //   };
    // case "UPDATE_FORM":
    //   return {
    //     ...state,
    //     formData: {...state.formData, ...action.payload}
    //   }

    case "SET_PHOTO":
      return {
        ...state,
        photos: state.photos.map(photo => {
          if(photo.id === action.payload.id) {
            return action.payload
          } else {
            return photo
          }
        })
      }

    default:
      return state;
  }
}
