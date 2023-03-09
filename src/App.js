import React, { useEffect } from "react";
import { Provider } from "react-redux";

import Navigation from "./components/Navigation/Navigation";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
