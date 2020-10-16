import React from "react";

export const Alert = (props) => {
  return (
    <div className={`alert alert-${props.type} alert-dismissible`} role="alert">
      {props.text}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
