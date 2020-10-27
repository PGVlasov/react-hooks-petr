import React, { useContext, useEffect } from "react";
import { GitHubContext } from "../Context/github/GitHubContext";

export const Profile = ({ match }) => {
  const { getRepos, getUser, loading, user, repos } = useContext(GitHubContext);
  const name = match.params.name;

  useEffect(() => {
    getUser(name);
    getRepos(name);
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка......</p>;
  }

  console.log(match);
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  );
};
