import * as t from "./constants";
import axios from "axios";

export const userLogout = () => ({ type: t.USER_LOGOUT });

export const authenticateUser = currentUser => ({
  type: t.AUTHENTICATE_USER,
  currentUser
});

//export const API_URL = process.env.API_URL || "http://localhost:3010"; // express server URL
export const API_URL = process.env.API_URL || "http://localhost:3010"; // express server URL

const formatPackage = json => {
  return { data: json };
};

const authRequest = (authInfo, url) => {
  return axios.post(url, authInfo).then(resp => {
    console.log(resp);
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = { authErrorMessage: data.message };
          throw err;
        });
      } else {
        let err = {
          authErrorMessage: "Please try again later.  Server not responding."
        };
        throw err;
      }
    }
    return resp.json();
  });
};

export const userSignUp = authInfo => (dispatch, getState) =>
  authRequest(formatPackage(authInfo), `${API_URL}/users`).then(currentUser =>
    dispatch(authenticateUser(currentUser)).catch(e => {
      // sign in error
    })
  );

export const userSignIn = authInfo => (dispatch, getState) => {
  console.log(formatPackage(authInfo));
  return authRequest(formatPackage(authInfo), `${API_URL}/user-auth`)
    .then(currentUser => dispatch(authenticateUser(currentUser)))
    .catch(e => {
      // some error handling const AUTH FAIL takes error returns object
    });
};
