import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import {createStore} from "redux";

import rootReducer from "../services/reducers";

const persistConfig = {
  key: "ucook",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

if (process.env.NODE_ENV === "development") {
  // middlewares.push(logger);
}

export const store = createStore(persistedReducer, {});

export const persistor = persistStore(store);
export default store;
