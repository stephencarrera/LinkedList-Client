import * as t from "../actions/user/constants";

const DEFAULT_STATE = {
  username: null,
  firstName: null,
  lastName: null,
  email: null,
  currentCompany: null,
  photo: null,
  experience: [],
  education: [],
  skills: [],
  error: null
};

// const userReducer = (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//     case t.USER_SIGNUP_SUCCESS: {
//       return { ...state, ...action.user };
//     }
//     case t.USER_SIGNUP_FAIL: {
//       console.log(action.error);
//     }
//     default:
//       return { ...state };
//   }
// };

const LOCAL_STORAGE_USER_KEY = "ll-info";

const setCurrentUser = currentUser => {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(currentUser));
};

const clearCurrentUser = () => {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
};

export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY));
  } catch (e) {
    return undefined;
  }
};

const currentUser = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "USER_LOGOUT":
      clearCurrentUser();
      return { ...state };
    case "AUTHENTICATE_USER":
      setCurrentUser(action.currentUser);
      return { ...action.currentUser };
    default:
      return state;
  }
};

export default currentUser;
