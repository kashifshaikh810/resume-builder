import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Dashboard from "./components/Screens/Dashboard/Dashboard";
import Login from "./components/Screens/Login/Login";
import LoginDashboard from "./components/Screens/Login/LoginDashboard";
import ResumesCoverLetters from "./components/Screens/ResumesCoverLetters/ResumesCoverLetters";
import ResumesTemplates from "./components/Screens/ResumesTemplates/ResumesTemplates";
import EmailScreen from "./components/Screens/SignUp/EmailScreen";
import AccountSettings from "./components/Screens/AccountSettings/AccountSettings";
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
          path="/create-resume/contact-info"
          element={<EmailScreen navigate={useNavigate} params={useParams} />}
        />
        <Route
          path="/app/auth/sign-in"
          element={<LoginDashboard navigate={useNavigate} params={useParams} />}
        />
        <Route
          path="/app/auth/log-in"
          element={<Login navigate={useNavigate} params={useParams} />}
        />
        <Route
          path="/app"
          element={
            <ResumesCoverLetters navigate={useNavigate} params={useParams} />
          }
        />
        <Route
          path="/app/account"
          element={
            <AccountSettings navigate={useNavigate} params={useParams} />
          }
        />
        <Route
          path="/resumes-templates"
          element={
            <ResumesTemplates navigate={useNavigate} params={useParams} />
          }
        />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
