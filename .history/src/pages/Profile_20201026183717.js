import React, { useContext, useEffect } from "react";
import { GitHubContext } from "../Context/github/GitHubContext";

export const Profile = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Information</h1>
        <p className="lead">
          project version<strong> 1.1.0</strong>{" "}
        </p>
      </div>
    </div>
  );
};
