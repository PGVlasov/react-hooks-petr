import { SHOW_ALERT } from "../types";

export const AlertReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return action.payload;
  }
};
