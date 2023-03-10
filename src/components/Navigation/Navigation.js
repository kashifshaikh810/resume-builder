import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

import Dashboard from "../Screens/Dashboard/Dashboard";
import Login from "../Screens/Login/Login";
import LoginDashboard from "../Screens/Login/LoginDashboard";
import ResumesCoverLetters from "../Screens/ResumesCoverLetters/ResumesCoverLetters";
import ResumesTemplates from "../Screens/ResumesTemplates/ResumesTemplates";
import EmailScreen from "../Screens/SignUp/EmailScreen";
import AccountSettings from "../Screens/AccountSettings/AccountSettings";
import FirstNameLastName from "../Screens/SignUp/FirstNameLastName";
import EditResume from "../Screens/EditResume/EditResume";
import AllTemplates from "../Screens/AllTemplates/AllTemplates.js";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../redux/actions/authAction";

const Navigation = () => {
  const dispatch = useDispatch();
  const { error: signInError } = useSelector((state) => state.userSignIn);

  useEffect(() => {
    if (signInError) {
      alert(signInError);
      dispatch(clearErrors());
    }
  }, [dispatch, signInError]);

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
        <Route
          path="/app/resumes/id/edit/:tabName"
          element={<EditResume navigate={useNavigate} params={useParams} />}
        />
        <Route
          path="/app/resumes/id/templates/:tabName"
          element={<AllTemplates navigate={useNavigate} params={useParams} />}
        />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Router>
  );
};

export default Navigation;
