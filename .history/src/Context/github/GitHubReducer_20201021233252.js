import { GET_LOADING, GET_REPOS, GET_USER, SEARCH_USERS } from "../types";

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
  [GET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: false,
  }),
  DEFAULT: (state) => state,
};

export const GitHubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
