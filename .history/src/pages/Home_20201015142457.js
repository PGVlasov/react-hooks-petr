import React, { Fragment } from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";

export const Home = () => {
  return (
    <Fragment>
      <Search />

      <Card />
    </Fragment>
  );
};
