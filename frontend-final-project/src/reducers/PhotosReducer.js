export default function photoReducer (
  state = { photos: [], filterTags: [], loading: false, photographerPhotos: [] },
  action
) {
  switch (action.type) {

    case "PHOTO_LOAD":
      return {
        ...state,
        photos: action.payload,
      };

    case "FILTER_TAG_LOAD":
      return {
        ...state,
        filterTags: state.filterTags.push(action.payload),
      };

    case "SET_SELECTED_PHOTOGRAPHER":
      return {
        ...state,
        photographerPhotos: action.payload.photos,
        loading: false
      }

    case "LOADING":
      return {
        ...state,
        loading: true
      }

    default:
      return state;
  }
}
