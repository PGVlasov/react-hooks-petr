import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GitHubContext } from "../Context/github/GitHubContext";

export const Profile = ({ match }) => {
  const { getRepos, getUser, loading, user, repos } = useContext(GitHubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка......</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;
  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        На главную страницу
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} target="_blank" className="btn btn-dark">
                Открыть профиль
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username:</strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company:</strong>
                    {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website:</strong>
                    {blog}
                  </li>
                )}
              </ul>
              <div className="badge badge-primary">Подписчики: {followers}</div>
              <div className="badge badge-success">Подкиски: {following}</div>
              <div className="badge badge-info">
                Репрозитории: {public_repos}
              </div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
