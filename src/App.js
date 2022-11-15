import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./components/Screens/Dashboard/Dashboard";
import EmailScreen from "./components/Screens/SignUp/EmailScreen";
import FirstNameLastName from "./components/Screens/SignUp/FirstNameLastName";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard navigate={useNavigate} />} />
        <Route
          path="/create-resume/introduction"
          element={<FirstNameLastName navigate={useNavigate} />}
        />
        <Route
          path="/create-resume/contact-info"
          element={<EmailScreen navigate={useNavigate} />}
        />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
