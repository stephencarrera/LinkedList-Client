import { combineReducers } from "redux";
import companyReducer from "./company";
import currentUser, { getCurrentUser } from "./currentUser";

export { getCurrentUser };

const rootReducer = combineReducers({
  currentUser,
  company: companyReducer
});

export default rootReducer;
