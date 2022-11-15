import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Screens/Dashboard/Dashboard";
import EmailScreen from "./components/Screens/SignUp/EmailScreen";
import FirstNameLastName from "./components/Screens/SignUp/FirstNameLastName";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/create-resume/introduction"
          element={<FirstNameLastName />}
        />
        <Route path="/create-resume/contact-info" element={<EmailScreen />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
