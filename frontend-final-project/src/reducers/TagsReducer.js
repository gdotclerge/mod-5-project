export default function tagsReducer (
  state = { tags: [], selectedTags: [], formData: {name: "", title: "", key_skill: ""} },
  action
) {
  switch (action.type) {

    case "TAG_LOAD":
      return {
        ...state,
        tags: action.payload,
      };

    case "ADD_SELECTED_TAG":
      return {
        ...state,
        selectedTags: [...state.selectedTags, action.payload]
      };

    case "REMOVE_SELECTED_TAG":
      return {
        ...state,
        selectedTags: state.selectedTags.filter( (t)=> t !== action.payload )
      }


    //
    // case "FILTER_TAG_LOAD":
    //   console.log("in filter tag load case reducer")
    //   return {
    //     ...state,
    //     filterTags: state.filterTags.push(action.payload),
    //   };

    default:
      return state;
  }
}
