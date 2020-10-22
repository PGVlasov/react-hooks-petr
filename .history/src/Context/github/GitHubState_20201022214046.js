import React, { useReducer } from "react";
import { SEARCH_USERS } from "../types";
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
  const search = async value => {
      // ....
      dispatch({
          type: SEARCH_USERS,
          payload: []
      })
  }

  const getUser = async name => {// ....
    dispatch({
        type: SEARCH_USERS,
        payload: []
  }

  const getRepos = async => {
      // ....
      dispatch({
        type: SEARCH_USERS,
        payload: []

  }

  const clearUsers = () => {
      
  }

  const setLoading = () => {

  }
  return <GitHubContext.Provider value={{}}>{children}</GitHubContext.Provider>;
};
