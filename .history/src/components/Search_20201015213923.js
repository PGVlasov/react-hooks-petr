import React, { useContext } from "react";
import { AlertContext } from "../Context/Alert/AlertContext";

export const Search = () => {
  const {} = useContext(AlertContext);
  const onSubmit = () => {};

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
