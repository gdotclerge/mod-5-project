export default function photoReducer (
  state = { photos: [], filterTags: [], loading: false, formData: {name: "", title: "", key_skill: ""} },
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

    default:
      return state;
  }
}
