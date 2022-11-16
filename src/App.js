import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Dashboard from "./components/Screens/Dashboard/Dashboard";
import EmailScreen from "./components/Screens/SignUp/EmailScreen";
import FirstNameLastName from "./components/Screens/SignUp/FirstNameLastName";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard navigate={useNavigate} params={useParams} />}
        />
        <Route
          path="/create-resume/introduction"
          element={
            <FirstNameLastName navigate={useNavigate} params={useParams} />
          }
        />
        <Route
          path="/create-resume/contact-info/:firstName/:lastName"
          element={<EmailScreen navigate={useNavigate} params={useParams} />}
        />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
