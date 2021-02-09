import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";

import {CLEAR_ON_SIGNOUT} from "../constants";

import AuthReducer from "./AuthReducer";
import SystemReducer from "../reducers/SystemReducer";

const appReducer = combineReducers({
  auth: AuthReducer,
  system: SystemReducer,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_ON_SIGNOUT) {
    storage.removeItem("persist:ucook");
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
