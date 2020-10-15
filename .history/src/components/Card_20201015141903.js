import React from "react";
import { Link } from "react-router-dom";

export const Card = () => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">React JS</h5>
      <Link to={"/profile/" + "react"}>Открыть</Link>
    </div>
  </div>
);
