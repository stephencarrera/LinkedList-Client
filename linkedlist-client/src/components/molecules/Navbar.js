import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  const { currentUser, onLogout, profileImageUrl } = props;
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <span>LinkedList</span>
          </Link>
        </div>
        {currentUser ? (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a>
                <img src={profileImageUrl} alt="user" />
              </a>
            </li>
            <li>
              <Link to={`/users/${currentUser.username}/`}>My profile</Link>
            </li>
            <li>
              <Link to="/signin" onClick={onLogout}>
                Log out
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
