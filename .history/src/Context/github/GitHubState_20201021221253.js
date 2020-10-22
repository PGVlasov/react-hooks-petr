import React, { useReducer } from "react";
import { GitHubContext } from "./GitHubContext";

export const GitHubState = (children) => {
  const [state, dispatch] = useReducer();
  return <GitHubContext.Provider value={{}}>{children}</GitHubContext.Provider>;
};
