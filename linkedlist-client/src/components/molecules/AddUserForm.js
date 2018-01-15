import React, { Component } from "react";
import styled from "styled-components";

const UserForm = styled.form`
  background-color: lightgrey;
  margin: 50px;
  padding: 24px;
  border-radius: 5px;
`;
const AddUserForm = props => (
  <UserForm id="user-form" onSubmit={props.handleSubmit}>
    <div>
      <label htmlFor="email">Email</label>
      <input
        className="text-input"
        type="email"
        name="email"
        onChange={props.handleChange}
      />
    </div>
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        className="text-input"
        type="text"
        name="firstName"
        onChange={props.handleChange}
      />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <input
        className="text-input"
        type="text"
        name="lastName"
        onChange={props.handleChange}
      />
    </div>
    <div>
      <label htmlFor="username">Username</label>
      <input
        className="text-input"
        type="text"
        name="username"
        onChange={props.handleChange}
      />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input
        className="text-input"
        type="password"
        name="password"
        onChange={props.handleChange}
      />
    </div>
    <div>
      <label htmlFor="photo">Photo</label>
      <input
        className="text-input"
        type="text"
        name="photo"
        onChange={props.handleChange}
      />
    </div>
    <button type="submit">I'm in!</button>
  </UserForm>
);

// class AddUserForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       firstName: "",
//       lastName: "",
//       username: "",
//       password: "",
//       photo: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     const newUser = { ...this.state };
//     userSignupRequest(newUser);
//     document.getElementById("user-form").reset();
//     this.setState({
//       email: "",
//       firstName: "",
//       lastName: "",
//       username: "",
//       password: "",
//       photo: ""
//     });
//   }
//   render() {
//     return (
//       <UserForm id="user-form" onSubmit={this.handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             className="text-input"
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             className="text-input"
//             type="text"
//             name="firstName"
//             onChange={this.handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             className="text-input"
//             type="text"
//             name="lastName"
//             onChange={this.handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             className="text-input"
//             type="text"
//             name="username"
//             onChange={this.handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             className="text-input"
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="photo">Photo</label>
//           <input
//             className="text-input"
//             type="text"
//             name="photo"
//             onChange={this.handleChange}
//           />
//         </div>
//         <button type="submit">I'm in!</button>
//       </UserForm>
//     );
//   }
// }

// AddUserForm.propTypes = {
//   email: PropTypes.string.isRequired,
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   photo: PropTypes.string
// };

export default AddUserForm;

// import React from "react";

// export default AddUserForm;
