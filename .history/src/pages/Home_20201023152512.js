import React, { Fragment, useContext } from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";
import { GitHubContext } from "../Context/github/GitHubContext";

export const Home = () => {
  const { loading, users } = useContext(GitHubContext);
  return (
    <Fragment>
      <Search />
      <div className="row">
        {loading ? (
          <p className="text-center">...Загрузка...</p>
        ) : (
          users.map((user) => {
            return (
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card user={user} />
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};
