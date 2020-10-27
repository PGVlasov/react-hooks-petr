import React, { useContext } from "react";
import { GitHubContext } from "../Context/github/GitHubContext";

export const Profile = ({ match }) => {
  const github = useContext(GitHubContext);

  github.getUser();
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  );
};
