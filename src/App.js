import React, { useEffect } from "react";
import { Provider } from "react-redux";

import Navigation from "./components/Navigation/Navigation";
import { getCurrentUser } from "./redux/actions/authAction";
import store from "./redux/store";

const App = () => {
  useEffect(() => {
    store.dispatch(getCurrentUser());
  }, []);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
