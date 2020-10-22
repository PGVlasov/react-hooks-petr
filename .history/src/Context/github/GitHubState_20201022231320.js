import React, { useReducer } from "react";
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";
import { GitHubContext } from "./GitHubContext";
import { GitHubReducer } from "./GitHubReducer";

export const GitHubState = ({ children }) => {
  const initialState = {
    user: [],
    users: {},
    loading: false,
    repos: [],
  };
  const [state, dispatch] = useReducer(GitHubReducer, initialState);
  const search = async (value) => {
    setLoading();
    // ....
    dispatch({
      type: SEARCH_USERS,
      payload: [],
    });
  };

  const getUser = async (name) => {
    setLoading();
    // ....
    dispatch({
      type: GET_USER,
      payload: [],
    });
  };

  const getRepos = (async) => {
    setLoading();
    // ....
    dispatch({
      type: GET_REPOS,
      payload: [],
    });
  };

  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  const { user, users, repos, loading } = state;
  return (
    <GitHubContext.Provider
      value={{
        search,
        getRepos,
        getUser,
        clearUsers,
        setLoading,
        user,
        users,
        repos,
        loading,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};
