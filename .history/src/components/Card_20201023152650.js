import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ user }) => (
  <div className="card">
    <img src={user.avatar.url} alt={user.login} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">React JS</h5>
      <Link to={"/profile/"} className="btn btn-primary">
        Открыть
      </Link>
    </div>
  </div>
);
