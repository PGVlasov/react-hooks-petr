import React, { useContext, useEffect } from "react";
import { GitHubContext } from "../Context/github/GitHubContext";

export const Profile = ({ match }) => {
  const github = useContext(GitHubContext);
  const name = match.params.name;

  useEffect(() => {
    //
    console.log("Effect");
  });

  console.log(match);
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  );
};
