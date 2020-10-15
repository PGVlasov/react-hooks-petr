import React, { Fragment } from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";

export const Home = () => {
  return (
    <Fragment>
      <Search />
      <div className="row">
        <div className="col-sm-4 mb-4">
          <Card />
        </div>
      </div>
    </Fragment>
  );
};
