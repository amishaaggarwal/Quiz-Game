import { LOGGED_IN,GET_USER } from "constant/redux-constants/login-constants";
const initialState = {
  loggedIn: "",
};

const loginreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default loginreducer;
