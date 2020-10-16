import React, { useContext, useState } from "react";
import { AlertContext } from "../Context/Alert/AlertContext";

export const Search = () => {
  const [value, setValue] = useState("");
  const { show } = useContext(AlertContext);
  const onSubmit = (event) => {
    if (event.key === "Enter") {
      return;
    }
  };
  if (value.trim()) {
    console.log("my request with ", value);
  } else {
    show();
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyPress={onSubmit}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};
