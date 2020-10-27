import React, { useContext } from "react";
import { GitHubContext } from "../Context/github/GitHubContext";

export const Profile = ({ match }) => {
  const github = useContext(GitHubContext);
  const name = match.params.name;

  github.getUser(name);
  github.getRepos(name);
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  );
};
