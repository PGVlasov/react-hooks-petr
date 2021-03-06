import {
  SET_LOADING,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  CLEAR_USERS,
} from "../types";

const handlers = {
  [SEARCH_USERS]: (state, { payload }) => ({
    ...state,
    users: payload,
    loading: false,
  }),
  [GET_REPOS]: (state, { payload }) => ({
    ...state,
    repos: payload,
    loading: false,
  }),
  [GET_USER]: (state, { payload }) => ({
    ...state,
    user: payload,
    loading: false,
  }),
  [SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: true,
  }),
  [CLEAR_USERS]: (state, { payload }) => ({
    ...state,
    loading: true,
  }),
  DEFAULT: (state) => state,
};

export const GitHubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
