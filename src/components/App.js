import React from "react";
import "./../styles/App.css";

import store from "../store/store";
import Home from "./Home";
import { Provider } from "react-redux";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Home />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
