import { GET_USER, LOGGED_IN } from "constant/redux-constants/login-constants";

export function setLoggedIn(user) {
  return {
    type: LOGGED_IN,
    payload: user,
  };
}
export function getUser() {
  return {
    type: GET_USER,
  };
}
