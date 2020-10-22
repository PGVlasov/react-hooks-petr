import React, { useReducer } from "react";
import axios from "axios";
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";
import { GitHubContext } from "./GitHubContext";
import { GitHubReducer } from "./GitHubReducer";

const clientId = process.env.REACT_APP_CLIAENT_ID;
const clientSecret = process.env.CLIAENT_SECRET;
const withCreds = (url) => {
  return `${url}&cleint_id=${clientId}&client_secret=${clientSecret}`;
};

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
    const response = await axios.get(
      withCreds(`https//api.github.com/search/users?q=${value}&`)
    );

    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  const getUser = async (name) => {
    setLoading();
    const response = await axios.get(
      withCreds(`https//api.github.com/users/${name}?`)
    );
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  const getRepos = async (name) => {
    setLoading();
    const response = await axios.get(
      withCreds(`https//api.github.com/users/${name}/repos?per_page=5&`)
    );

    dispatch({
      type: GET_REPOS,
      payload: response.data,
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
