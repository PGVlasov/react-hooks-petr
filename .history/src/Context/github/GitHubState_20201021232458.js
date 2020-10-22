import React, { useReducer } from "react";
import { GitHubContext } from "./GitHubContext";
import { GitHubReducer } from "./GitHubReducer";

export const GitHubState = (children) => {
  const initialState = {
    user: [],
    users: {},
    loading: false,
    repos: [],
  };
  const [state, dispatch] = useReducer(GitHubReducer, initialState);
  return <GitHubContext.Provider value={{}}>{children}</GitHubContext.Provider>;
};
