import { combineReducers } from "redux";
import loginreducer from "Redux/login-redux/loginReducer";

export default combineReducers({
  user: loginreducer,
});
