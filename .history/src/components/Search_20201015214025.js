import React, { useContext } from "react";
import { AlertContext } from "../Context/Alert/AlertContext";

export const Search = () => {
  const {show} = useContext(AlertContext);
  const onSubmit = event => {
      if(event.key === "ENTER")

  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyPress={onSubmit}
      />
    </div>
  );
};
