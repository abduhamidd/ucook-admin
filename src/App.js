import React from "react";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import Routes from "./routes/index";

import {persistor} from "./Store";

export const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  );
};
export default App;
