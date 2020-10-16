import React, { useReducer } from "react";
import { AlertContext } from "./AlertContext";
import { AlertReducer } from "./AlertReducer";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, null);

  return <AlertContext.Provider>{children}</AlertContext.Provider>;
};
