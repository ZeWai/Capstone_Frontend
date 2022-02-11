import { ADD_FARMLOG } from "./actions";
import { ADD_FARMLOG_CURRENT_VIEW } from "./actions";

const initialState = {
  farmlogInfo: {},
  currentView: "",
};

export function farmlogReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FARMLOG:
      return {
        farmlogInfo: action.payload,
        currentView: "",
      };
    case ADD_FARMLOG_CURRENT_VIEW:
      return {
        farmlogInfo: {},
        currentView: action.payload,
      };
    default:
      return state;
  }
}
