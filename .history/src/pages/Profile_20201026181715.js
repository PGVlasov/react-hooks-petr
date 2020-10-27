import React, { useContext, useEffect } from "react";
import { GitHubContext } from "../Context/github/GitHubContext";

export const Profile = ({ match }) => {
  const { getRepos, getUser } = useContext(GitHubContext);
  const name = match.params.name;

  useEffect(() => {
    github.getUser(name);
    github.getRepos(name);
    console.log("efect");
  }, []);

  console.log(match);
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  );
};
