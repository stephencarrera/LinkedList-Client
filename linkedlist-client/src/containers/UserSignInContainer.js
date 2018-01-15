import React, { Component } from "react";
import { connect } from "react-redux";
import { userSignupRequest } from "../store/actions/user/actionCreators";
import AddUserForm from "../components/molecules/AddUserForm";

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering
  };
}

export default connect(mapStateToProps)(AddUserForm);
