import React, { useContext } from "react";
import { AlertContext } from "../Context/Alert/AlertContext";

export const Alert = ({ alert }) => {
  const alert = useContext(AlertContext);
  return (
    <div
      className={`alert alert-${alert.type || "secondary"} alert-dismissible`}
      role="alert"
    >
      {alert.text}
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
