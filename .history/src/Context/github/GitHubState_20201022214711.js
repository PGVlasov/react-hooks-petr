import React, { useReducer } from "react";
import { GET_REPOS, GET_USER, SEARCH_USERS } from "../types";
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
  const search = async (value) => {
    // ....
    dispatch({
      type: SEARCH_USERS,
      payload: [],
    });
  };

  const getUser = async (name) => {
    // ....
    dispatch({
      type: GET_USER,
      payload: [],
    });
  };

  const getRepos = (async) => {
    // ....
    dispatch({
      type: GET_REPOS,
      payload: [],
    });
  };

  const clearUsers = () => {
    type: GET_REPOS;
  };

  const setLoading = () => {
    type: GET_REPOS;
  };
  return <GitHubContext.Provider value={{}}>{children}</GitHubContext.Provider>;
};
