import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Main from "./Main";
import * as userActions from "../../store/actions/user/actionCreators";
import Navbar from "../molecules/Navbar";

const App = ({ currentUser, authErrorMessage, onLogout }) => (
  <div>
    <Navbar
      currentUser={currentUser}
      profileImageUrl={
        currentUser && currentUser.profileImageUrl
          ? currentUser.profileImageUrl
          : null
      }
      onLogout={onLogout}
    />
    <Main />
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLogout() {
    dispatch(userActions.userLogout());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
