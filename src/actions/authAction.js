import { restoreSession, logout } from "../features/authSlice";

/**
 *  @description Action to check the validity of the token
*/ 
export const checkTokenValidity = () => (dispatch) => {
    //retrieve token in the session storage
  const token = sessionStorage.getItem("token");
  if (token) {
    const isValid = isValidToken(token);
    if (isValid) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      dispatch(restoreSession(user));
    } else {
      dispatch(logout());
    }
  } else {
    dispatch(logout());
  }
};

const isValidToken = () => {
  return true;
};
