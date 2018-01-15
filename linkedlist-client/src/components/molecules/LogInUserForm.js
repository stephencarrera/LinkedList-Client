import React from "react";
import styled from "styled-components";

const LoginForm = styled.form`
  background-color: lightgrey;
  margin: 50px;
  padding: 24px;
  border-radius: 5px;
`;

const LogInUserForm = props => {
  return (
    <LoginForm>
      <div>
        <label htmlFor="username">Username</label>
        <input
          className="text-input"
          type="text"
          name="username"
          onChange={this.handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="text-input"
          type="password"
          name="password"
          onChange={this.handleChange}
        />
      </div>
    </LoginForm>
  );
};

export default LogInUserForm;
