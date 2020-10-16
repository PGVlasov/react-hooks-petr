import React, { useContext, useState } from "react";
import { AlertContext } from "../Context/Alert/AlertContext";

export const Search = () => {
  const [value, setValue] = useState("");
  const { show } = useContext(AlertContext);
  const onSubmit = (event) => {
    if (event.key === "Enter") {
      show("this is alert");
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyPress={onSubmit}
        value={value}
        onChange={setValue(event.target.value)}
      />
    </div>
  );
};