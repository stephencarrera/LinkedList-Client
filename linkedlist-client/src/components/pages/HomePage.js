import React from "react";

const Homepage = ({ currentUser }) => {
  if (!currentUser) {
    return <div style={{ textAlign: "center" }}>Please login</div>;
  }
  return <h1>Homepage</h1>;
};

export default Homepage;
