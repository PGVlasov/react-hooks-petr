import React, { useReducer } from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../types";
import { AlertContext } from "./AlertContext";
import { AlertReducer } from "./AlertReducer";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, null);

  const hide = () => dispatch({ type: HIDE_ALERT });

  const show = (text, type = "secondary") => {
    dispatch({
      type: SHOW_ALERT,
      payload: { type, text },
    });
  };

  return <AlertContext.Provider>{children}</AlertContext.Provider>;
};