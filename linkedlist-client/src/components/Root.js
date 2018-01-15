import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";
import configureStore from "../store/configure";
import { getCurrentUser } from "../store/reducers";
import { authenticateUser } from "../store/actions/user/actionCreators";

const store = configureStore();

let user = getCurrentUser();

if (user) {
  store.dispatch(authenticateUser(user));
}

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
