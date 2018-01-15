import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import * as userActions from "../../store/actions/user/actionCreators";
import AuthForm from "../organisms/AuthForm";
import PrivateRoute from "../molecules/PrivateRoute";
import HomePage from "./HomePage";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {
      currentUser,
      authErrorMessage,
      handleSignIn,
      handleSignUp,
      history
    } = this.props;
    return (
      <div className="container">
        <Switch>
          <Route
            exact
            path="/signin"
            render={props => (
              <AuthForm
                signIn={true}
                heading={"Welcome Back."}
                buttonText={"Log in"}
                onAuth={authInfo =>
                  handleSignIn(authInfo).then(() => history.push("/"))
                }
                errorMessage={authErrorMessage}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <AuthForm
                signIn={false}
                heading={"Join LinkedList today."}
                buttonText={"Sign me up!"}
                onAuth={authInfo =>
                  handleSignUp(authInfo).then(() => history.push("/"))
                }
                errorMessage={authErrorMessage}
                {...props}
              />
            )}
          />
          <PrivateRoute
            path="/users/:username"
            currentUser={currentUser}
            componentProps={{ onSubmit: this.handleNewMessage }}
          />
          <Route
            exact
            path="/"
            render={props => <HomePage {...props} currentUser={currentUser} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  errorMessage: state.errorMessage
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSignIn(authData) {
    return dispatch(userActions.userSignIn(authData));
  },
  handleSignUp(authData) {
    console.log(authData);
    return dispatch(userActions.userSignUp(authData));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
