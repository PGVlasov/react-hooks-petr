import { HIDE_ALERT, SHOW_ALERT } from "../types";

const hendlers = {
  [SHOW_ALERT]: (state, action) => action.payload,
  [HIDE_ALERT]: () => null,
};

export const AlertReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return action.payload;
    case HIDE_ALERT:
      return null;
    default:
      return state;
  }
};
