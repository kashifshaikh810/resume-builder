import React, { useCallback, useEffect } from "react";
import { Provider } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";

import Navigation from "./components/Navigation/Navigation";
import { getCurrentUser } from "./redux/actions/authAction";
import store from "./redux/store";
import { Auth } from "./Firebase/FirebaseConfig";

const App = () => {
  const [user, loading, error] = useAuthState(Auth);

  const dispatchCurrentUser = useCallback((data) => {
    store.dispatch(getCurrentUser({ ...data }));
  }, []);

  useEffect(() => {
    const data = {
      loading,
      user,
      error,
    };
    dispatchCurrentUser(data);
  }, [loading, user, error, dispatchCurrentUser]);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
