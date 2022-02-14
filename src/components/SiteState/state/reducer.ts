import { SET_DARKMODE } from "./actions";

export const siteStateReducer = (
  state = {
    darkMode: true
  },
  action
) => {
  switch (action.type) {
    case SET_DARKMODE: {
      return { ...state, darkMode: action.payload };
    }
    default:
      return state;
  }
};
