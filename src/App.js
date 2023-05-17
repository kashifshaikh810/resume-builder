import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";

import Navigation from "./components/Navigation/Navigation";
import { getCurrentUser } from "./redux/actions/authAction";
import store from "./redux/store";
import { Auth } from "./Firebase/FirebaseConfig";
import PdfComponent from "./main/indexTwo";

const App = () => {
  const [user, loading, error] = useAuthState(Auth);

  useEffect(() => {
    const data = {
      loading,
      user,
      error,
    };
    store.dispatch(getCurrentUser({ ...data }));
  }, [loading, user, error]);

  return (
    <Provider store={store}>
      <Navigation />
      {/* <PdfComponent /> */}
    </Provider>
  );
};

export default App;
