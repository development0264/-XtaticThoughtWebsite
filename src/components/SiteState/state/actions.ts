export const SET_DARKMODE = "SET_DARKMODE";

export function setDarkMode(type) {
  return async dispatch => {
    dispatch({
      type: SET_DARKMODE,
      payload: type
    });
  };
}
