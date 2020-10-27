import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
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
  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        На главную страницу
      </Link>
    </Fragment>
  );
};
