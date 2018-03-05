export default function packagesReducer (
  state = { packages: [] },
  action
) {
  switch (action.type) {

    case "SELECTED_PHOTOGRAPHER_PACKAGES":
      return {
        ...state,
        packages: action.payload,
      };

    default:
      return state;
  }
}
